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
import logging
import re
import shutil
import subprocess
import tempfile
from pathlib import Path
from typing import Any

from openai import AsyncOpenAI

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
    """Check whether a CUDA-capable GPU is available."""
    try:
        import torch
        available = torch.cuda.is_available()
        if available:
            logger.info("CUDA GPU detected: %s", torch.cuda.get_device_name(0))
        else:
            logger.info("No CUDA GPU detected, will use CPU pipeline")
        return available
    except ImportError:
        logger.info("PyTorch not installed, assuming no GPU — will use CPU pipeline")
        return False


def convert_pdf_to_md(pdf_path: Path, output_dir: Path | None = None) -> tuple[Path, Path | None]:
    """Convert a PDF to Markdown using the MinerU CLI.

    Automatically selects GPU or CPU backend based on CUDA availability.
    Returns (md_file_path, images_dir_or_None).
    """
    if output_dir is None:
        output_dir = Path(tempfile.mkdtemp(prefix="mineru_"))

    output_dir.mkdir(parents=True, exist_ok=True)

    # Detect GPU availability and choose backend
    use_gpu = _has_gpu()
    cmd = ["mineru", "-p", str(pdf_path), "-o", str(output_dir)]
    if not use_gpu:
        cmd += ["-b", "pipeline"]

    mode_label = "GPU" if use_gpu else "CPU (pipeline)"
    logger.info("Running MinerU (%s mode): %s", mode_label, " ".join(cmd))

    timeout_secs = 600 if use_gpu else 1800  # 10 min GPU, 30 min CPU

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout_secs,
        )
        if result.returncode != 0:
            raise RuntimeError(
                f"MinerU conversion failed (rc={result.returncode}):\n"
                f"{result.stderr[:1000]}"
            )
    except subprocess.TimeoutExpired:
        raise RuntimeError(
            f"MinerU conversion timed out after {timeout_secs // 60} minutes "
            f"({mode_label} mode). The PDF may be too large for CPU processing. "
            f"Consider using a machine with a CUDA GPU for faster conversion."
        )
    except FileNotFoundError:
        raise RuntimeError(
            "MinerU CLI ('mineru') not found. "
            "Install it with: uv pip install -U 'mineru[all]'"
        )

    # MinerU outputs into a subfolder named after the PDF stem
    pdf_stem = pdf_path.stem
    # Look for the generated MD file
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
        if not md_files:
            raise RuntimeError(
                f"MinerU produced no Markdown files in {output_dir}"
            )
        md_file = md_files[0]

    # Find images directory (MinerU typically puts images next to the MD)
    images_dir = md_file.parent / "images"
    if not images_dir.is_dir():
        images_dir = None

    logger.info("MinerU output: md=%s, images=%s", md_file, images_dir)
    return md_file, images_dir


# ---------------------------------------------------------------------------
# 2. Copy images
# ---------------------------------------------------------------------------


def copy_images(source_images_dir: Path | None, target_images_dir: Path | None = None) -> int:
    """Copy extracted images to the skills images directory.

    Returns the number of images copied.
    """
    if source_images_dir is None or not source_images_dir.is_dir():
        return 0

    if target_images_dir is None:
        target_images_dir = IMAGES_DIR
    target_images_dir.mkdir(parents=True, exist_ok=True)

    count = 0
    for img in source_images_dir.iterdir():
        if img.is_file() and img.suffix.lower() in (
            ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".bmp",
        ):
            dest = target_images_dir / img.name
            shutil.copy2(img, dest)
            count += 1

    logger.info("Copied %d images to %s", count, target_images_dir)
    return count


# ---------------------------------------------------------------------------
# 3. LLM-based Markdown cleanup
# ---------------------------------------------------------------------------

CLEANUP_SYSTEM_PROMPT = """\
You are a technical documentation editor. Your job is to clean up raw \
Markdown that was produced by an OCR/PDF-to-Markdown tool (MinerU) and \
convert it into LLM-friendly Markdown.

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

Return ONLY the cleaned Markdown. Do not wrap in code fences. \
Do not add commentary.\
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

    cleaned = response.choices[0].message.content or ""
    logger.info("LLM cleanup returned %d chars", len(cleaned))
    return cleaned.strip()


# ---------------------------------------------------------------------------
# 4. API doc split analysis (headers only)
# ---------------------------------------------------------------------------

SPLIT_ANALYSIS_SYSTEM_PROMPT = """\
You are an API documentation expert. You will receive a list of Markdown \
headings extracted from a large API reference document.

Your task is to suggest how to split this monolithic document into smaller, \
logically grouped files so that each file covers a coherent API topic.

Return a JSON array where each element has:
- "filename": a snake_case .md filename (e.g. "dcpower_c_api_functions_measure.md")
- "title": a human-readable title for the section (used as H1 in the output)
- "prefixes": an array of heading-text prefixes that belong in this file. \
A heading belongs to a section if the heading text starts with any of these prefixes.

Rules:
- Group related headings together (e.g. all "Measure" headings, all "Source" headings).
- The prefixes must match the *text after* the `#` in the heading, not the `#` itself.
- Every heading should be covered by exactly one section.
- Return ONLY the JSON array, no surrounding text or code fences.\
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
) -> list[dict[str, Any]]:
    """Ask an LLM to analyze API doc headers and suggest split points.

    Only the headers are sent to minimize token usage.
    Returns a list of split definitions.
    """
    headers_text = _extract_headers(raw_md)
    if not headers_text.strip():
        raise ValueError("No Markdown headers found in the document.")

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
            {"role": "system", "content": SPLIT_ANALYSIS_SYSTEM_PROMPT},
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

    logger.info("LLM suggested %d split sections", len(splits))
    return splits


# ---------------------------------------------------------------------------
# 5. Split API doc by heading prefixes
# ---------------------------------------------------------------------------

_HEADING_RE = re.compile(r"^# (.+)")


def split_api_doc(
    raw_md: str,
    split_definitions: list[dict[str, Any]],
) -> dict[str, str]:
    """Split a monolithic API Markdown into multiple files.

    split_definitions: list of {"filename": str, "title": str, "prefixes": [str]}
    Returns {filename: content}.
    """
    lines = raw_md.splitlines(keepends=True)

    buckets: list[list[str]] = [[] for _ in split_definitions]
    current_bucket: int | None = None

    for line in lines:
        m = _HEADING_RE.match(line)
        if m:
            heading_text = m.group(1).strip()
            # Find matching section
            for idx, sdef in enumerate(split_definitions):
                prefixes = sdef.get("prefixes", [])
                if any(heading_text.startswith(p) for p in prefixes):
                    current_bucket = idx
                    break

        if current_bucket is not None:
            buckets[current_bucket].append(line)

    result: dict[str, str] = {}
    for idx, sdef in enumerate(split_definitions):
        if not buckets[idx]:
            logger.warning("Split section '%s' matched no headings", sdef.get("title", "?"))
            continue
        filename = sdef["filename"]
        title = sdef.get("title", filename)
        content = f"# {title}\n\n" + "".join(buckets[idx])
        result[filename] = content

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
