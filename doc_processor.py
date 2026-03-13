"""
Document processing pipeline for NI Device Q&A Skills.

Handles:
- PDF → Markdown conversion via MinerU
- LLM-based Markdown cleanup (specs / user manuals)
- LLM-suggested API doc splitting
- Image asset management
"""

from __future__ import annotations

import json
from collections import deque
import logging
import re
import shutil
import subprocess
import tempfile
from collections.abc import Callable
from pathlib import Path
from typing import Any

from openai import AsyncOpenAI
import pypdf

logger = logging.getLogger("ni_device_qa.doc_processor")

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

SKILLS_DIR = Path(__file__).parent / "skills"
DOCS_DIR = SKILLS_DIR / "docs"
IMAGES_DIR = DOCS_DIR / "images"

# ---------------------------------------------------------------------------
# 1. PDF → Markdown via MinerU
# ---------------------------------------------------------------------------

TOP_HEADING_RE = re.compile(r"^(#{1,6})\s+(.+)", re.MULTILINE)


def _has_gpu() -> bool:
    """Check whether a CUDA-capable GPU is available for MinerU.

    MinerU uses vLLM (not raw PyTorch) for GPU-accelerated inference.
    We check two things:
      1. vLLM is installed (required for MinerU GPU mode).
      2. The machine has an NVIDIA CUDA GPU (via ``nvidia-smi``).

    We intentionally do NOT use ``torch.cuda.is_available()`` because
    torch may have been built without CUDA support even on a machine
    that has a perfectly usable NVIDIA GPU.
    """
    # 1. Is vLLM importable?
    try:
        import vllm  # noqa: F401
        logger.info("vLLM is installed — checking for NVIDIA GPU hardware")
    except ImportError:
        logger.info("vLLM not installed, assuming no GPU — will use CPU pipeline")
        return False

    # 2. Does the machine have an NVIDIA GPU?
    try:
        result = subprocess.run(
            ["nvidia-smi", "--query-gpu=name", "--format=csv,noheader"],
            capture_output=True,
            text=True,
            timeout=10,
        )
        if result.returncode == 0 and result.stdout.strip():
            gpu_name = result.stdout.strip().splitlines()[0]
            logger.info("vLLM + NVIDIA GPU detected: %s", gpu_name)
            return True
        else:
            logger.info(
                "vLLM installed but nvidia-smi reported no GPUs — will use CPU pipeline"
            )
            return False
    except FileNotFoundError:
        logger.info(
            "vLLM installed but nvidia-smi not found — will use CPU pipeline"
        )
        return False
    except subprocess.TimeoutExpired:
        logger.warning(
            "nvidia-smi timed out — assuming no GPU, will use CPU pipeline"
        )
        return False


def _split_pdf(pdf_path: Path, output_dir: Path, chunk_size: int = 100) -> list[Path]:
    """Split a PDF into smaller chunks of at most `chunk_size` pages."""
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    if total_pages <= chunk_size:
        return [pdf_path]
        
    logger.info("Splitting %s (%d pages) into %d-page chunks...", pdf_path.name, total_pages, chunk_size)
    chunks = []
    
    for start_idx in range(0, total_pages, chunk_size):
        end_idx = min(start_idx + chunk_size, total_pages)
        writer = pypdf.PdfWriter()
        for i in range(start_idx, end_idx):
            writer.add_page(reader.pages[i])
            
        chunk_path = output_dir / f"{pdf_path.stem}_part{start_idx // chunk_size + 1}.pdf"
        with open(chunk_path, "wb") as f:
            writer.write(f)
        chunks.append(chunk_path)
        
    return chunks


def _find_mineru_output(output_dir: Path, pdf_stem: str) -> tuple[Path | None, Path | None]:
    """Locate MinerU output files (MD and images dir) in the output directory.

    Returns (md_file_or_None, images_dir_or_None).
    """
    candidate_dirs = [
        output_dir / pdf_stem / "auto",
        output_dir / pdf_stem,
        output_dir,
    ]

    md_file: Path | None = None
    for d in candidate_dirs:
        if d.is_dir():
            md_files = list(d.glob("*.md"))
            if md_files:
                md_file = md_files[0]
                break

    if md_file is None:
        # Search recursively as a fallback
        md_files = list(output_dir.rglob("*.md"))
        if md_files:
            md_file = md_files[0]

    images_dir: Path | None = None
    if md_file is not None:
        candidate_img = md_file.parent / "images"
        if candidate_img.is_dir():
            images_dir = candidate_img

    return md_file, images_dir


# Patterns that indicate a vLLM / GPU engine shutdown message rather than
# a real MinerU processing failure.  These are checked against the last few
# lines of combined stdout/stderr to decide whether a non-zero exit code
# can be tolerated.
_VLLM_SHUTDOWN_PATTERNS = [
    "EngineCore",
    "died unexpectedly",
    "shutting down client",
    "AsyncEngineDeadError",
    "core_client",
]


def _run_mineru_single(pdf_path: Path, output_dir: Path, use_gpu: bool) -> tuple[Path, Path | None]:
    """Run MinerU on a single PDF file (or chunk).
    
    Returns (md_file_path, images_dir_or_None).
    """
    output_dir.mkdir(parents=True, exist_ok=True)

    cmd = ["mineru", "-p", str(pdf_path), "-o", str(output_dir)]
    if not use_gpu:
        cmd += ["-b", "pipeline"]

    mode_label = "GPU" if use_gpu else "CPU (pipeline)"
    logger.info("Running MinerU (%s mode): %s", mode_label, " ".join(cmd))

    # Keep the last N lines of output so we can inspect them if the process
    # exits with a non-zero code (e.g. vLLM engine crash on WSL).
    tail_lines: deque[str] = deque(maxlen=30)

    try:
        with subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1,
        ) as process:
            if process.stdout:
                for line in process.stdout:
                    stripped = line.rstrip()
                    tail_lines.append(stripped)
                    logger.info("MinerU: %s", stripped)
            
            process.wait()
            returncode = process.returncode
    except FileNotFoundError:
        raise RuntimeError(
            "MinerU CLI ('mineru') not found. "
            "Install it with: uv pip install -U 'mineru[all]'"
        )

    pdf_stem = pdf_path.stem

    if returncode != 0:
        # -----------------------------------------------------------------
        # Non-zero exit.  On WSL with vLLM-backed MinerU the GPU engine
        # (EngineCore_DP0) is often killed by Linux's aggressive background
        # process cleanup *after* MinerU has finished writing all output
        # files.  The vLLM client then panics and causes a non-zero exit
        # even though the conversion is 100 % complete.
        #
        # Strategy: check whether the expected output Markdown file already
        # exists.  If it does, treat this as a harmless noisy shutdown and
        # emit a warning instead of raising.
        # -----------------------------------------------------------------
        md_file, images_dir = _find_mineru_output(output_dir, pdf_stem)

        tail_text = "\n".join(tail_lines)
        looks_like_vllm_crash = any(
            pat in tail_text for pat in _VLLM_SHUTDOWN_PATTERNS
        )

        if md_file is not None and md_file.stat().st_size > 0:
            # Output exists → conversion succeeded despite the messy exit.
            if looks_like_vllm_crash:
                logger.warning(
                    "MinerU exited with rc=%d due to vLLM GPU engine "
                    "shutdown (likely WSL cleanup). Output file %s was "
                    "already written — treating as success.",
                    returncode, md_file,
                )
            else:
                logger.warning(
                    "MinerU exited with rc=%d but output file %s exists "
                    "(%d bytes). Proceeding despite non-zero exit code. "
                    "Last output lines:\n%s",
                    returncode, md_file, md_file.stat().st_size, tail_text,
                )
            logger.info("MinerU output: md=%s, images=%s", md_file, images_dir)
            return md_file, images_dir

        # No output produced → this is a genuine failure.
        raise RuntimeError(
            f"MinerU conversion failed (rc={returncode}). "
            f"No output Markdown found in {output_dir}.\n"
            f"Last output:\n{tail_text}"
        )

    # Happy path: process exited cleanly.
    md_file, images_dir = _find_mineru_output(output_dir, pdf_stem)

    if md_file is None:
        raise RuntimeError(
            f"MinerU produced no Markdown files in {output_dir}"
        )

    logger.info("MinerU output: md=%s, images=%s", md_file, images_dir)
    return md_file, images_dir


def convert_pdf_to_md(
    pdf_path: Path,
    output_dir: Path | None = None,
    progress_callback: Callable[[int, int], None] | None = None,
) -> tuple[Path, Path | None]:
    """Convert a PDF to Markdown using the MinerU CLI.
    
    Automatically handles splitting large PDFs into chunks to prevent MinerU
    from crashing or stalling, processes them sequentially, and merges the results.
    """
    if output_dir is None:
        output_dir = Path(tempfile.mkdtemp(prefix="mineru_"))

    output_dir.mkdir(parents=True, exist_ok=True)
    
    # 1. Split PDF into chunks (<= 100 pages)
    chunks = _split_pdf(pdf_path, output_dir, chunk_size=100)

    # Report initial conversion state before the first chunk starts.
    if progress_callback:
        progress_callback(0, len(chunks))
    
    use_gpu = _has_gpu()
    combined_md_content = []
    has_images = False
    
    master_images_dir = output_dir / f"{pdf_path.stem}_images"
    master_images_dir.mkdir(parents=True, exist_ok=True)
    
    for i, chunk_path in enumerate(chunks, 1):
        logger.info("Processing chunk %d of %d: %s", i, len(chunks), chunk_path.name)
        
        # MinerU output folder for this specific chunk
        chunk_out_dir = output_dir / f"chunk_{i}"
        
        try:
            md_file, images_dir = _run_mineru_single(chunk_path, chunk_out_dir, use_gpu)
            
            # Read chunk markdown and append
            chunk_md = md_file.read_text(encoding="utf-8")
            combined_md_content.append(chunk_md)
            
            # Copy chunk images to master images dir and update references
            if images_dir and images_dir.is_dir():
                has_images = True
                for img in images_dir.iterdir():
                    if img.is_file():
                        # Prefix with chunk number to avoid name collisions
                        # across chunks (MinerU often numbers images sequentially).
                        new_img_name = f"c{i}_{img.name}"
                        dest_img = master_images_dir / new_img_name
                        shutil.copy2(img, dest_img)

                        # Update the in-memory markdown to reference the
                        # renamed image.  We must NOT re-read md_file here
                        # because that would discard renames from previous
                        # iterations of this loop.
                        chunk_md = chunk_md.replace(
                            f"images/{img.name}", f"images/{new_img_name}"
                        ).replace(
                            f"images\\{img.name}", f"images/{new_img_name}"
                        )

                # Reflect all image renames in the combined list
                combined_md_content[-1] = chunk_md

            if progress_callback:
                # Report completed chunks so callers can show stable progress.
                progress_callback(i, len(chunks))

        except Exception as e:
            logger.error("Failed processing chunk %d: %s", i, e)
            raise RuntimeError(f"Conversion failed at chunk {i} of {len(chunks)}: {e}") from e
            
    # Write combined markdown
    final_md_path = output_dir / f"{pdf_path.stem}_combined.md"
    final_md_path.write_text("\n\n---\n\n".join(combined_md_content), encoding="utf-8")
    
    final_images_dir = master_images_dir if has_images else None
    
    logger.info("Finished PDF conversion: %s", final_md_path)
    return final_md_path, final_images_dir


# ---------------------------------------------------------------------------
# 2. Copy images
# ---------------------------------------------------------------------------


_IMAGE_REF_RE = re.compile(r"images[/\\]([^\s\)\"'>]+)", re.IGNORECASE)


def copy_images(
    source_images_dir: Path | None,
    md_content: str = "",
    target_images_dir: Path | None = None,
) -> int:
    """Copy extracted images to the skills images directory.

    Only images whose filenames are referenced in *md_content* are copied.
    If *md_content* is empty, all images are copied (legacy behaviour).

    Returns the number of images copied.
    """
    if source_images_dir is None or not source_images_dir.is_dir():
        return 0

    if target_images_dir is None:
        target_images_dir = IMAGES_DIR
    target_images_dir.mkdir(parents=True, exist_ok=True)

    # Build set of referenced image filenames from the markdown
    referenced: set[str] | None = None
    if md_content:
        referenced = set(_IMAGE_REF_RE.findall(md_content))
        logger.info("Found %d referenced images in markdown", len(referenced))

    count = 0
    for img in source_images_dir.iterdir():
        if img.is_file() and img.suffix.lower() in (
            ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp",
        ):
            # Skip images not referenced in the markdown
            if referenced is not None and img.name not in referenced:
                continue
            dest = target_images_dir / img.name
            shutil.copy2(img, dest)
            count += 1

    logger.info("Copied %d images to %s", count, target_images_dir)
    return count


# Matches Markdown image syntax: ![alt text](images/something.png)
# Also matches HTML img tags referencing local images.
_MD_IMAGE_LINK_RE = re.compile(
    r"!\[[^\]]*\]\([^)]*images[/\\][^)]+\)\s*", re.IGNORECASE
)
_HTML_IMG_RE = re.compile(
    r"<img\s[^>]*src=[\"'][^\"']*images[/\\][^\"']+[\"'][^>]*/?\s*>\s*",
    re.IGNORECASE,
)


def strip_image_links(md_content: str) -> str:
    """Remove all image links from Markdown content.

    Strips both ``![...](images/...)`` and ``<img src="images/...">`` tags.
    Blank lines left behind after removal are collapsed.
    """
    result = _MD_IMAGE_LINK_RE.sub("", md_content)
    result = _HTML_IMG_RE.sub("", result)
    result = re.sub(r"\n{3,}", "\n\n", result)
    return result


# ---------------------------------------------------------------------------
# HTML table → Markdown table conversion
# ---------------------------------------------------------------------------

_HTML_TABLE_BLOCK_RE = re.compile(
    r"<table[^>]*>.*?</table>", re.IGNORECASE | re.DOTALL
)
_HTML_ROW_RE = re.compile(r"<tr[^>]*>(.*?)</tr>", re.IGNORECASE | re.DOTALL)
_HTML_CELL_RE = re.compile(
    r"<(th|td)([^>]*)>(.*?)</\1>", re.IGNORECASE | re.DOTALL
)
_HTML_BR_RE = re.compile(r"<br\s*/?>", re.IGNORECASE)
_HTML_TAG_RE = re.compile(r"<[^>]+>")
_COLSPAN_RE = re.compile(r'colspan\s*=\s*["\']?(\d+)', re.IGNORECASE)


def _parse_html_table(table_html: str) -> str:
    """Convert a single ``<table>…</table>`` HTML block to a Markdown table."""
    rows: list[list[str]] = []
    first_row_is_header = False

    for row_match in _HTML_ROW_RE.finditer(table_html):
        row_html = row_match.group(1)
        cells: list[str] = []
        has_th = False
        for cell_match in _HTML_CELL_RE.finditer(row_html):
            tag = cell_match.group(1).lower()
            attrs = cell_match.group(2)
            raw_content = cell_match.group(3)

            if tag == "th":
                has_th = True

            # Handle colspan: duplicate the cell content
            colspan = 1
            cs_match = _COLSPAN_RE.search(attrs)
            if cs_match:
                colspan = int(cs_match.group(1))

            # Clean the cell text
            text = _HTML_BR_RE.sub(" ", raw_content)   # <br> → space
            text = _HTML_TAG_RE.sub("", text)           # strip remaining tags
            text = " ".join(text.split())               # collapse whitespace
            text = text.replace("|", "\\|")             # escape pipes

            for _ in range(colspan):
                cells.append(text)

        if cells:
            if not rows and has_th:
                first_row_is_header = True
            rows.append(cells)

    if not rows:
        return ""

    # Normalise column count across all rows
    max_cols = max(len(r) for r in rows)
    for r in rows:
        while len(r) < max_cols:
            r.append("")

    # Build the Markdown table
    lines: list[str] = []

    if first_row_is_header:
        header = rows[0]
        lines.append("| " + " | ".join(header) + " |")
        lines.append("| " + " | ".join("---" for _ in header) + " |")
        data_rows = rows[1:]
    else:
        # No explicit header – synthesise an empty one
        lines.append("| " + " | ".join("" for _ in range(max_cols)) + " |")
        lines.append("| " + " | ".join("---" for _ in range(max_cols)) + " |")
        data_rows = rows

    for row in data_rows:
        lines.append("| " + " | ".join(row) + " |")

    return "\n".join(lines)


def html_tables_to_md(md_content: str) -> str:
    """Replace every ``<table>…</table>`` block with a Markdown table.

    Leaves non-table HTML untouched.
    """
    def _replace(match: re.Match) -> str:
        md_table = _parse_html_table(match.group(0))
        return md_table if md_table else match.group(0)

    return _HTML_TABLE_BLOCK_RE.sub(_replace, md_content)


# ---------------------------------------------------------------------------
# Content page index (TOC) line removal
# ---------------------------------------------------------------------------

# Matches TOC-style lines such as:
#   NIDCPOWER_ATTR_AUXILIARY_POWER_SOURCE_AVAILABLE . . . . . . . . . 22
#   Some Section Title .................. 14
#   niDCPower_ConfigureOutputEnabled  . . . . .  35
#   Pulse Current . . 952
#   niDCPower_ConfigureSourceMode . 988
#   niDCPower_ConfigureDigitalEdgeSequenceAdvanceTriggerWithChannels 1180
# The pattern matches either:
#   1) text with at least one dot leader followed by a page number, or
#   2) a bare underscore-identifier (function name) followed by a page number.
_TOC_LINE_RE = re.compile(
    r"^(?:"
    r".*\s\.[\s.]*\d+"           # text, space, dot(s), page number
    r"|"
    r"\s*\w+_\w+\s+\d{2,}"      # identifier_name followed by page number (no dots)
    r")\s*$",
    re.MULTILINE,
)


def clean_toc_lines(md_content: str) -> str:
    """Remove table-of-contents index lines from Markdown content.

    These are lines like ``SOME_IDENTIFIER . . . . . . . . . 22`` that OCR
    or PDF-to-MD tools preserve from the original document's content pages.
    """
    result = _TOC_LINE_RE.sub("", md_content)
    # Collapse blank lines left behind
    result = re.sub(r"\n{3,}", "\n\n", result)
    return result


def clean_api_md(raw_md: str) -> str:
    """Apply all non-LLM cleaning steps suitable for an API Markdown doc.

    Performs, in order:
      1. Strip image links (API docs typically only have icons)
      2. Convert HTML tables to Markdown tables
      3. Remove TOC / content-page index lines
    """
    md = strip_image_links(raw_md)
    md = html_tables_to_md(md)
    md = clean_toc_lines(md)
    return md


def clean_manual_md(raw_md: str) -> str:
    """Apply all non-LLM cleaning steps for user manual / specifications docs.

    Performs, in order:
      1. Convert HTML tables to Markdown tables
      2. Remove TOC / content-page index lines

    Image links are intentionally preserved (not stripped) so the LLM can
    process figure captions and images remain in the final output.
    """
    md = html_tables_to_md(raw_md)
    md = clean_toc_lines(md)
    return md


# ---------------------------------------------------------------------------
# 3. LLM-based Markdown cleanup
# ---------------------------------------------------------------------------

CLEANUP_SYSTEM_PROMPT_old = """\
You are a technical documentation editor. Your job is to clean up raw \
Markdown that was produced by an OCR/PDF-to-Markdown tool (MinerU) and \
convert it into LLM-friendly Markdown. And since the user will be using this \
skill to answer questions via a LLM with limited context window, \
make sure the Markdown is easy to parse and understand.

Follow ALL of these rules:

1. **Establish a Clear Heading Hierarchy**
   - Reserve H1 (`#`) strictly for the document title.
   - Use H2 (`##`) for major sections and H3 (`###`) for subsections.

2. **Convert HTML Tables to Markdown Tables**
   - Replace any raw HTML `<table>` blocks with standard Markdown table syntax.

3. **Remove Unnecessary Math Formatting for Simple Units**
   - Strip math formatting from plain numbers/units.
   - Convert e.g. `$1 0 0 \\mathsf{k}\\mathsf{S}/\\mathsf{s}$` → **100 kS/s**.
   - Keep math formatting only for actual equations like $V = I \\times R$.

4. **Clean Up OCR Text Artifacts**
   - Fix broken/duplicated text in headers (e.g. \
"Selecting an Ac ting Accessory for Your Applic our Application" → \
"Selecting an Accessory for Your Application").

5. **Consolidate Image Links with Context**
   - Keep image references as `![](images/...)`.
   - Place them directly below their figure titles without excess blank lines.
   - Remove image refs that are just icons.

6. **Consolidate Repetitive Boilerplate Warnings**

Return ONLY the cleaned Markdown. Do not wrap in code fences. \
Do not add commentary.\
"""

CLEANUP_SYSTEM_PROMPT = """
You are an expert Technical Documentation Optimizer and Data Engineer. Your objective is to process raw, OCR-extracted hardware manuals, PDFs, and API documentation, converting them into hyper-efficient, cleanly structured Markdown. 

This output will be used to build a Retrieval-Augmented Generation (RAG) knowledge base for a local LLM with a strict, limited context window. Every token matters. You must prioritize high information density, structural integrity, and absolutely zero formatting bloat.

Apply the following STRICT RULES to your output:

1. ELIMINATE MATHEMATICAL/LATEX BLOAT
Never use LaTeX, MathJax, or heavy symbol wrappers (e.g., `$`, `\\mathrm`,  `\\mathsf`) for basic units, numbers, or simple variables. 
- BAD: `$6 0 0 \\mathrm { k } \\mathsf { S } / \\mathsf { s }$` or `$1 0 0 \\mathsf { k } \\Omega$`
- GOOD: `600 kS/s` or `100 kΩ`
Only use LaTeX for complex, multi-line equations that cannot be represented in plain text.

2. NATIVE MARKDOWN TABLES ONLY
Absolutely NO HTML tags are allowed. Convert all `<table>`, `<tr>`, `<td>`, `colspan`, and `<br>` elements into clean, native Markdown tables (`| Column | Column |`). Keep the text inside the tables concise.

3. AGGRESSIVE OCR CLEANUP
Actively detect and fix OCR artifacts and rendering glitches. 
- Fix stuttering headers (e.g., change `Making L Making Local Sense Me al Sense Measurements` to `Making Local Sense Measurements`).
- Fix broken line breaks inside sentences.
- Remove redundant page numbers, footers, and non-informative layout text.

4. STRICT HIERARCHY FOR CHUNKING
Use standard Markdown headings (`#`, `##`, `###`) to create a logical, nested structure. Ensure every section has a clear header, as this will be used by the downstream system for deterministic document chunking.

5. BOILERPLATE CONDENSATION
Condense repetitive, verbose warnings into concise blockquotes (e.g., `> **Note:**` or `> **Caution:**`) without losing the core technical constraints or safety parameters. Merge disjointed image captions directly into the relevant context.

6. PRESERVE IMAGES AND DIAGRAMS
Preserve all original image links exactly as they appear (e.g., `![](images/...)`). Insert short, descriptive bracketed text like `` near the image links to provide semantic context to the text-only LLM. 

Output ONLY the optimized Markdown document. Do not include any conversational filler, preambles, or explanations of what you changed.

7. AGGRESSIVE BOILERPLATE DELETION (LOSSY OPTIMIZATION)
You have explicit permission to DELETE text that does not add unique technical value. Your goal is maximum information density.
- DELETE repetitive introductory fluff (e.g., "The following table lists the...", "Complete the following steps to...").
- CONSOLIDATE repeated warnings. If a safety warning appears 5 times in the document, keep it once in a global "Safety Guidelines" section and delete the rest.
- DELETE obvious filler (e.g., "The User Manual provides detailed descriptions of the product functionality and the step by step processes for use.")
- SUMMARIZE verbose paragraphs into punchy, single-line bullet points. 
"""


async def cleanup_md_with_llm(
    raw_md: str,
    api_url: str,
    api_key: str,
    model: str,
) -> str:
    """Send raw MinerU Markdown to an LLM for cleanup.

    Returns the cleaned Markdown string.
    """
    client = AsyncOpenAI(base_url=api_url, api_key=api_key)

    logger.info(
        "Sending %d chars to %s for cleanup (model=%s)",
        len(raw_md),
        api_url,
        model,
    )

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": CLEANUP_SYSTEM_PROMPT},
            {
                "role": "user",
                "content": (
                    "Clean up the following MinerU-generated Markdown. "
                    "Apply all five rules.\n\n"
                    f"{raw_md}"
                ),
            },
        ],
        temperature=0.1,
    )

    choice = response.choices[0]
    cleaned = choice.message.content or ""
    
    if not cleaned.strip():
        finish_reason = getattr(choice, "finish_reason", "unknown")
        logger.error("LLM cleanup returned empty content. Finish reason: %s", finish_reason)
        raise RuntimeError(f"LLM returned an empty response (finish_reason: {finish_reason}). The payload might have triggered a safety filter or exceeded context limits.")
        
    logger.info("LLM cleanup returned %d chars (finish_reason: %s)", len(cleaned), getattr(choice, "finish_reason", "unknown"))
    return cleaned.strip()


# ---------------------------------------------------------------------------
# 4. API doc split analysis (headers only)
# ---------------------------------------------------------------------------

SPLIT_ANALYSIS_SYSTEM_PROMPT = """\
You are an API documentation expert. You will receive a sequential list of Markdown \
headings extracted from a large, monolithic API reference document.

Your task is to suggest how to split this document into smaller, manageable files \
strictly following its existing sequential order. Do NOT reorganize, reorder, or \
attempt to gather related content from different parts of the document. You are \
simply defining the logical "cut points" to slice the document from top to bottom.

Return a JSON array where each element represents a new file chunk in sequential order. \
Each element must have:
- "filename": a snake_case .md filename using the format ``{filename_prefix}_<section>.md`` \
where ``<section>`` is a short, descriptive snake_case label for the chunk \
(e.g., "{filename_prefix}_functions_measure.md", "{filename_prefix}_attributes_source.md").
- "title": a human-readable title for the section (used as the H1 in the output).
- "start_heading": The exact text of the heading where this chunk begins (excluding the `#` characters).

Rules:
- A chunk begins exactly at the "start_heading" and contains all content until the \
"start_heading" of the next chunk in the list.
- The first element in the JSON array MUST start with the very first heading provided.
- Preserve the original linear flow. Do NOT group by topic if it breaks the original document order.
- Choose "start_heading" points at major architectural shifts or logical breaks (e.g., transitioning from Configuration to Measurement functions).
- Return ONLY the JSON array, no surrounding text, and no markdown code fences.\
"""


def _extract_headers(md_text: str) -> str:
    """Extract all Markdown headers from the text, preserving hierarchy."""
    lines = []
    for match in TOP_HEADING_RE.finditer(md_text):
        lines.append(f"{match.group(1)} {match.group(2)}")
    return "\n".join(lines)


async def suggest_api_split(
    raw_md: str,
    api_url: str,
    api_key: str,
    model: str,
    device_slug: str = "",
    category: str = "",
    language: str = "",
) -> list[dict[str, Any]]:
    """Ask an LLM to analyze API doc headers and suggest split points.

    Only the headers are sent to minimize token usage.
    Returns a list of split definitions.
    """
    headers_text = _extract_headers(raw_md)
    if not headers_text.strip():
        raise ValueError("No Markdown headers found in the document.")

    # Build the filename prefix from category and language
    cat_slug = re.sub(r"[^a-z0-9]+", "_", category.lower()).strip("_") if category.strip() else ""
    lang_slug = re.sub(r"[^a-z0-9]+", "_", language.lower()).strip("_") if language.strip() else ""
    if cat_slug and lang_slug:
        filename_prefix = f"{cat_slug}_{lang_slug}"
    elif cat_slug:
        filename_prefix = cat_slug
    elif lang_slug:
        filename_prefix = lang_slug
    else:
        filename_prefix = device_slug or "api"

    system_prompt = SPLIT_ANALYSIS_SYSTEM_PROMPT.replace(
        "{filename_prefix}", filename_prefix
    )

    client = AsyncOpenAI(base_url=api_url, api_key=api_key)

    logger.info(
        "Sending %d header lines to %s for split analysis (model=%s)",
        headers_text.count("\n") + 1,
        api_url,
        model,
    )

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": (
                    f"Device/API identifier: {device_slug}\n\n"
                    "Here are the Markdown headings:\n\n"
                    f"{headers_text}"
                ),
            },
        ],
        temperature=0.1,
    )

    content = response.choices[0].message.content or "[]"

    # Strip potential code fences
    content = content.strip()
    if content.startswith("```"):
        content = re.sub(r"^```\w*\n?", "", content)
        content = re.sub(r"\n?```$", "", content)
    content = content.strip()

    try:
        splits = json.loads(content)
    except json.JSONDecodeError as e:
        raise ValueError(
            f"LLM returned invalid JSON for split suggestions: {e}\n"
            f"Raw response:\n{content[:500]}"
        )

    if not isinstance(splits, list):
        raise ValueError("LLM split suggestions must be a JSON array.")

    # Normalize filenames to ensure they follow {prefix}_{section}.md format
    for sdef in splits:
        fn = sdef.get("filename", "")
        if fn and not fn.startswith(filename_prefix + "_"):
            # Strip any leading numbering (e.g., "01_") the LLM may have added
            section = re.sub(r"^\d+_", "", fn.removesuffix(".md"))
            sdef["filename"] = f"{filename_prefix}_{section}.md"

    logger.info("LLM suggested %d split sections", len(splits))
    return splits


# ---------------------------------------------------------------------------
# 5. Split API doc by sequential cut-points
# ---------------------------------------------------------------------------

_HEADING_RE = re.compile(r"^(#{1,6})\s+(.+)")


def split_api_doc(
    raw_md: str,
    split_definitions: list[dict[str, Any]],
) -> dict[str, str]:
    """Split a monolithic API Markdown into multiple files by sequential cut-points.

    *split_definitions* is a JSON-style list produced by the LLM paginator::

        [
          {"filename": "01_init.md", "title": "Init", "start_heading": "Initialize NI-DCPower"},
          {"filename": "02_measure.md", "title": "Measure", "start_heading": "Measure Multiple Channels"},
          ...
        ]

    The document is walked line-by-line.  When a heading whose text matches
    a ``start_heading`` is encountered, all subsequent lines are routed to
    that chunk until the next cut-point is hit.  Content that appears before
    the very first cut-point is saved as ``00_introduction.md``.

    Returns ``{filename: content}``.
    """
    if not split_definitions:
        return {}

    # Map heading text → index for O(1) lookup
    heading_to_idx: dict[str, int] = {}
    for idx, sdef in enumerate(split_definitions):
        heading_to_idx[sdef["start_heading"].strip()] = idx

    lines = raw_md.splitlines(keepends=True)

    # Bucket 0 = intro (before first match); 1‥N map to split_definitions[0‥N-1]
    buckets: list[list[str]] = [[] for _ in range(len(split_definitions) + 1)]
    current_bucket = 0  # start in the intro bucket

    for line in lines:
        m = _HEADING_RE.match(line)
        if m:
            heading_text = m.group(2).strip()
            if heading_text in heading_to_idx:
                current_bucket = heading_to_idx[heading_text] + 1

        buckets[current_bucket].append(line)

    result: dict[str, str] = {}

    # Intro content (everything before the first cut-point)
    intro = "".join(buckets[0]).strip()
    if intro:
        result["00_introduction.md"] = f"# Introduction\n\n{intro}\n"
        logger.info("Intro content saved to 00_introduction.md")

    # Named chunks
    for idx, sdef in enumerate(split_definitions):
        bucket = buckets[idx + 1]
        if not bucket:
            logger.warning(
                "Split section '%s' matched no headings", sdef.get("title", "?")
            )
            continue
        filename = sdef["filename"]
        title = sdef.get("title", filename)
        result[filename] = f"# {title}\n\n{''.join(bucket)}"

    logger.info("Split produced %d non-empty files", len(result))
    return result


# ---------------------------------------------------------------------------
# 6. Metadata helpers
# ---------------------------------------------------------------------------

METADATA_PATH = SKILLS_DIR / "metadata.json"


def _load_metadata() -> dict:
    with open(METADATA_PATH, encoding="utf-8") as f:
        return json.load(f)


def _save_metadata(registry: dict) -> None:
    with open(METADATA_PATH, "w", encoding="utf-8") as f:
        json.dump(registry, f, ensure_ascii=False, indent=2)
        f.write("\n")


def register_skill(entry: dict) -> None:
    """Add or replace a skill entry in metadata.json."""
    registry = _load_metadata()
    registry["skills"] = [
        s for s in registry["skills"] if s["name"] != entry["name"]
    ]
    registry["skills"].append(entry)
    _save_metadata(registry)
    logger.info("Registered skill: %s", entry["name"])


def estimate_tokens(text: str) -> int:
    """Rough token estimate (1 token ≈ 4 chars for English text)."""
    return len(text) // 4


# ---------------------------------------------------------------------------
# 7. LLM-based API doc split (full-content approach)
# ---------------------------------------------------------------------------

LLM_SPLIT_SYSTEM_PROMPT = """\
You are an API documentation expert. You will receive a large, monolithic API \
reference document in Markdown.

Your task is to analyze the full document and suggest how to split it into \
smaller, manageable files by defining sequential cut-points — exactly the same \
way you would if you only saw the headings, but with the advantage of reading \
the full content to make better grouping decisions.

Return a JSON array where each element represents a new file chunk in sequential \
order. Each element must have:
- "filename": a snake_case .md filename using the format ``{filename_prefix}_<section>.md`` \
(e.g., "{filename_prefix}_functions_measure.md", "{filename_prefix}_attributes_source.md").
- "title": a human-readable title for the section (used as the H1 in the output).
- "start_heading": The exact text of the heading where this chunk begins \
(excluding the `#` characters).
- "description": A brief one-sentence description of what this section covers \
(used as metadata for skill search).

Rules:
- A chunk begins exactly at the "start_heading" and contains all content until \
the "start_heading" of the next chunk in the list.
- The first element in the JSON array MUST start with the very first heading provided.
- Preserve the original linear flow. Do NOT group by topic if it breaks the \
original document order.
- Choose "start_heading" points at major architectural shifts or logical breaks \
(e.g., transitioning from Configuration to Measurement functions).
- Split at logical boundaries: group related functions, attributes, or topics together.
- Keep each file focused on a single coherent topic area.
- Return ONLY the JSON array — no surrounding text, no markdown code fences.\
"""


async def llm_split_api_doc(
    raw_md: str,
    api_url: str,
    api_key: str,
    model: str,
    device_slug: str = "",
    category: str = "",
    language: str = "",
) -> list[dict[str, Any]]:
    """Send the full API doc to an LLM for split analysis.

    Unlike ``suggest_api_split`` which only sends headers, this sends the
    entire document content so the LLM can make better grouping decisions.
    The output format is the same as ``suggest_api_split`` (filename, title,
    start_heading) plus a ``description`` field for each section.

    The actual splitting is still performed by ``split_api_doc()`` using
    the returned cut-points.

    WARNING: This consumes a large number of input tokens since the full
    document is sent.
    """
    cat_slug = re.sub(r"[^a-z0-9]+", "_", category.lower()).strip("_") if category.strip() else ""
    lang_slug = re.sub(r"[^a-z0-9]+", "_", language.lower()).strip("_") if language.strip() else ""
    if cat_slug and lang_slug:
        filename_prefix = f"{cat_slug}_{lang_slug}"
    elif cat_slug:
        filename_prefix = cat_slug
    elif lang_slug:
        filename_prefix = lang_slug
    else:
        filename_prefix = device_slug or "api"

    system_prompt = LLM_SPLIT_SYSTEM_PROMPT.replace(
        "{filename_prefix}", filename_prefix
    )

    client = AsyncOpenAI(base_url=api_url, api_key=api_key)

    input_tokens = estimate_tokens(raw_md)
    logger.info(
        "Sending full API doc (%d chars, ~%d tokens) to %s for LLM split (model=%s)",
        len(raw_md),
        input_tokens,
        api_url,
        model,
    )

    response = await client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": (
                    f"Device/API identifier: {device_slug}\n\n"
                    "Analyze the following API documentation and suggest how to "
                    "split it into logical files by defining cut-points.\n\n"
                    f"{raw_md}"
                ),
            },
        ],
        temperature=0.1,
    )

    content = response.choices[0].message.content or "[]"

    # Strip potential code fences
    content = content.strip()
    if content.startswith("```"):
        content = re.sub(r"^```\w*\n?", "", content)
        content = re.sub(r"\n?```$", "", content)
    content = content.strip()

    try:
        splits = json.loads(content)
    except json.JSONDecodeError as e:
        raise ValueError(
            f"LLM returned invalid JSON for split output: {e}\n"
            f"Raw response (first 500 chars):\n{content[:500]}"
        )

    if not isinstance(splits, list):
        raise ValueError("LLM split output must be a JSON array.")

    # Normalize filenames
    for sdef in splits:
        fn = sdef.get("filename", "")
        if fn and not fn.startswith(filename_prefix + "_"):
            section = re.sub(r"^\d+_", "", fn.removesuffix(".md"))
            sdef["filename"] = f"{filename_prefix}_{section}.md"

    logger.info("LLM split produced %d files", len(splits))
    return splits
