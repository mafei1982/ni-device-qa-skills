from __future__ import annotations

import asyncio
from datetime import datetime, timezone
import json
import logging
import os
from pathlib import Path
import re
import shutil
import tempfile
import zipfile
from typing import Any
from uuid import uuid4

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, StreamingResponse
from pydantic import BaseModel, Field

import doc_processor

logger = logging.getLogger("ni_device_qa.standalone_tasks")

router = APIRouter(prefix="/api/standalone", tags=["standalone-tasks"])

DOC_TYPES = {"user_manual", "specifications", "programming_api"}
MANUAL_LIKE_TYPES = {"user_manual", "specifications"}
SPLIT_MODES = {"headers", "full"}

TASKS_ROOT = Path(__file__).parent / "storage" / "tasks"
WORKFLOW_TEMPLATE_PATH = Path(__file__).parent / "skills" / "workflow" / "device_qa_workflow.md"
REGISTRY_START = "<!-- DOC_REGISTRY_START -->"
REGISTRY_END = "<!-- DOC_REGISTRY_END -->"

DOC_WORKFLOW_TEMPLATE = """---
name: {category}_QA_Workflow
version: \"1.0\"
type: workflow
description: For answering user questions about NI hardware device {category} accurately, grounded in official documentation. Follow these steps strictly.
---

# Device Q&A Workflow — Standard Operating Procedure

You are an NI Hardware Device Expert. Your job is to answer user questions about NI hardware device {category} accurately, grounded in official documentation. Follow these steps strictly.

---

## Step 1 — Question Classification & Device Name Normalization

When you receive a user question:

1. **Identify the device**: Determine which NI device the user is asking about (e.g., PXIe-4135, PXIe-4147, PXIe-4163). Look for model numbers, product names, or descriptions. Users may just ask general test questions, and you can give advice on what device could be used.

2. **Normalize the device name**: Users may type device names in many formats. You MUST normalize them before looking up skills:
   - Convert to **lowercase**
   - Replace all separators (hyphens `-`, spaces ` `, dots `.`) with **underscores `_`**
   - Examples:
     | User Input | Normalized | Skill Prefix |
     |---|---|---|
     | PXIe-4135 | pxie_4135 | `pxie_4135_` |
     | pxie 4135 | pxie_4135 | `pxie_4135_` |
     | PXIE_4135 | pxie_4135 | `pxie_4135_` |
     | PXIe4135 | pxie4135 | `pxie_4135_` |
     | PXI-4163 | pxi_4163 | `pxi_4163_` |
   - The normalized name is used as the `device` field in the skill registry. Match against the `device` field of each skill entry, NOT the `name` field.

3. **Classify the question type**: Determine whether the answer requires:
   - **Specifications** — electrical data, timing specs, operating ranges, accuracy, resolution, environmental limits
   - **User Manual** — setup, wiring, programming, configuration, troubleshooting, safety, installation
   - **Programming API** — programming interface reference, function/method signatures, API parameters, return values, code examples, driver API details
   - **Multiple** — comparison questions or questions spanning specs, usage, and/or API

4. **Handle Missing Devices (Feature Inquiries)**: If the user does not mention a specific device but asks about a specific feature, concept, or test method (e.g., "Sequence Step Delta Time"):
   - Attempt to identify the **category** the feature belongs to (e.g., dcpower, scopes, dmm) based on the context of the question.
   - If you can infer the category, proceed directly to Step 2b and load the category-level doc to answer the question.
   - *Only* ask the user to clarify the device or category if the feature is entirely ambiguous and you cannot infer the category.

---

## Step 2 — Skill Selection & Loading (Device + Category)

### 2a — Load device-specific doc(s)

1. Review the skill registry in your system prompt.
2. Find the doc skill(s) where the `device` field matches your normalized device name AND the `subtype` matches the question type:
   - For specification questions → load the skill with `subtype: "specifications"` for that device.
   - For user manual questions (User Manual provides detailed descriptions of product functionality and step-by-step processes for use) → load the skill with `subtype: "user_manual"` for that device
   - For programming API questions → load the skill with `subtype: "programming_api"` for that device. If there is no device-specific programming_api doc, load the appropriate **section** of the category-level C API reference (see **Step 2d** below). Please also consider which programming language the user is asking about; if not specified, use the C API as the default choice.
   - For questions for asking suggestions on which device/devices is recommended → load all the relevant specifications skills
   - For questions requiring multiple → load all relevant skills
3. Call `load_skill_content` with the appropriate skill name(s).
4. If no matching device-specific doc skill exists in the registry, inform the user that documentation for that device has not been uploaded yet, and suggest they upload it via the UI.

### 2b — Load category-level doc (if applicable)

1. Check the `category` field of the matched device-specific skill(s). For example, PXIe-4135 and PXIe-4163 both have `category: "dcpower"`.
2. If a category is set, look in the registry for a skill whose `device` field equals that category name (e.g., `device: "dcpower"`). This is the **category-level doc** — it covers concepts, programming patterns, and usage common to all devices in that category.
3. **Standalone Category Loading**: If the user asks a general feature question without a device name (as identified in Step 1.4), load the appropriate category-level doc directly using the `device` field (e.g., `device: "dcpower"`).
4. **Load the category-level doc** when the user's question is about:
   - Programming, API usage, configuration, or software concepts (these are typically in the category manual, not the device-specific sheet)
   - How something works in general across the device family
   - Topics that span multiple devices in the same category
5. **Skip the category-level doc** when the question is purely about device-specific specs (e.g., "what is the voltage range of PXIe-4135?" — the specs sheet is sufficient).
6. When in doubt, **load the category-level doc** — it's better to have extra context than to miss relevant information.

### 2c — Iterative Fallback Search for Missing Information (CRITICAL)

1. If you load a document (like the category doc or a single device doc) and the specific answer or feature is NOT found, **you MUST NOT stop, guess, or immediately tell the user the information is missing.**
2. **Execute a Strict Iterative Loop:**
   - Identify all remaining document skills (user manuals, then specifications, then programming API references) for the devices within that identified category.
   - Call `load_skill_content` for the *first* alternative document.
   - Check the newly loaded content. If the answer is found, immediately proceed to Step 3.
   - If the answer is *still* not found, call `load_skill_content` for the *next* document in the list.
   - Repeat this process **one by one** until you either successfully find the answer OR you have completely exhausted every single available document for that category.
3. You are only permitted to state that the information is not found *after* you have systematically loaded and checked every related document skill.

---

## Step 3 — Answer Synthesis

1. Read the loaded document content carefully.
2. Compose a clear, accurate answer based **solely** on the information found in the loaded documents. Do NOT guess or infer data if your search loop in Step 2c failed to find it.
3. **Include inline citations**: Do NOT announce that you checked or referenced any document before providing the answer. Provide the answer directly and include citations as an inline reference link right beside the relevant result. Use the format: `[Source: {skill_name}, Section: {section_heading}]`.
4. **Code Snippet Policy**: Do NOT provide programming examples, API scripts, or code snippets unless the user *explicitly* requests them. If the user does request code, you must ONLY extract and provide the code verbatim from the loaded documentation. Do NOT write, guess, or synthesize new code.

---

## Step 4 — Follow-up

1. After answering, offer to help with related questions about the same or different devices.
2. If the user asks about a different device or a different aspect, loop back to Step 1.
3. If the user asks a comparison question across multiple devices, load all relevant doc skills and present a structured comparison.

---

## Anti-Patterns (NEVER Do These)

- **NEVER give up after one failed document load**.
- **NEVER guess or hallucinate the result**.
- **NEVER announce your document search process**.
- **NEVER generate unprompted code**.
- **NEVER write custom code**.
- **NEVER mix data from different devices** without explicitly framing it as a comparison.
- **NEVER answer from general knowledge** when doc skills are available.
- **NEVER skip loading documents**.
- **NEVER load the workflow skill again** after initial load.
- **NEVER fail to normalize device names**.

---

## Doc Registry

The following registry is auto-generated and synchronized with task docs.

{registry_block}
"""


class DocProcessInput(BaseModel):
    subtype: str
    device: str = ""
    language: str = ""
    split_mode: str = "headers"


class UpdateDocContentRequest(BaseModel):
    content: str


class UpdateDocMetaRequest(BaseModel):
    description: str | None = None
    subtype: str | None = None
    device: str | None = None
    language: str | None = None


class CreateTaskRequest(BaseModel):
    category: str = Field(min_length=1)


class TaskSummary(BaseModel):
    task_id: str
    category: str
    created_at: str
    updated_at: str
    status: str
    docs_count: int


def _slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", value.strip().lower()).strip("_")


def _now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _normalize_api_language(value: str) -> str:
    """Normalize UI/user language labels into canonical registry values."""
    norm = value.strip().lower()
    aliases = {
        "csharp": "c#",
        "c_sharp": "c#",
        "c#": "c#",
        "lab_view": "labview",
    }
    return aliases.get(norm, norm)


def _task_dir(task_id: str) -> Path:
    return TASKS_ROOT / task_id


def _task_path(task_id: str, *parts: str) -> Path:
    return _task_dir(task_id).joinpath(*parts)


def _manifest_path(task_id: str) -> Path:
    return _task_path(task_id, "manifest.json")


def _skill_path(task_id: str) -> Path:
    return _task_path(task_id, "SKILL.md")


def _load_manifest(task_id: str) -> dict[str, Any]:
    path = _manifest_path(task_id)
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found.")
    return json.loads(path.read_text(encoding="utf-8"))


def _save_manifest(task_id: str, manifest: dict[str, Any]) -> None:
    manifest["updated_at"] = _now_iso()
    _manifest_path(task_id).write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def _registry_block(skills: list[dict[str, Any]]) -> str:
    payload = json.dumps({"skills": skills}, ensure_ascii=False, indent=2)
    return (
        f"{REGISTRY_START}\n"
        "```json\n"
        f"{payload}\n"
        "```\n"
        f"{REGISTRY_END}"
    )


def _render_skill_md(category: str, skills: list[dict[str, Any]]) -> str:
    # Prefer the full existing workflow file as template to preserve the
    # project's complete SOP content. If unavailable, fall back to the
    # bundled template string.
    if WORKFLOW_TEMPLATE_PATH.exists():
        raw = WORKFLOW_TEMPLATE_PATH.read_text(encoding="utf-8")
        # Remove YAML frontmatter from the base workflow file.
        body = re.sub(r"\A---\n.*?\n---\n", "", raw, flags=re.DOTALL).strip()
        body = body.replace(
            "about NI hardware devices accurately",
            f"about NI hardware device {category} accurately",
        )
        body = body.replace(
            "about NI hardware devices",
            f"about NI hardware device {category}",
        )
        body = body.rstrip() + "\n\n---\n\n## Doc Registry\n\nThe following registry is auto-generated and synchronized with task docs.\n\n" + _registry_block(skills) + "\n"
        return (
            "---\n"
            f"name: {category}_QA_Workflow\n"
            "version: \"1.0\"\n"
            "type: workflow\n"
            f"description: For answering user questions about NI hardware device {category} accurately, grounded in official documentation. Follow these steps strictly.\n"
            "---\n\n"
            f"{body}"
        )

    return DOC_WORKFLOW_TEMPLATE.format(
        category=category,
        registry_block=_registry_block(skills),
    )


def _sync_skill_and_manifest(task_id: str, manifest: dict[str, Any]) -> None:
    # SKILL.md is the primary registry artifact. We always regenerate it first.
    skills = [d["skill_entry"] for d in manifest.get("docs", [])]
    skill_md = _render_skill_md(manifest["category"], skills)
    _skill_path(task_id).write_text(skill_md, encoding="utf-8")
    _save_manifest(task_id, manifest)


def _ensure_task_structure(task_id: str) -> None:
    base = _task_dir(task_id)
    _task_path(task_id, "docs", "images").mkdir(parents=True, exist_ok=True)
    _task_path(task_id, "raw_uploads").mkdir(parents=True, exist_ok=True)
    _task_path(task_id, "tmp").mkdir(parents=True, exist_ok=True)
    if not _manifest_path(task_id).exists():
        raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found.")


def _next_unique_skill_name(task_id: str, proposed: str) -> str:
    docs_dir = _task_path(task_id, "docs")
    candidate = proposed
    i = 2
    while (docs_dir / f"{candidate}.md").exists():
        candidate = f"{proposed}_{i}"
        i += 1
    return candidate


def _build_skill_entry(
    *,
    task_id: str,
    category: str,
    device: str,
    skill_name: str,
    subtype: str,
    source_name: str,
    language: str = "",
    description: str = "",
    api_type: str = "",
    api_section: str = "",
) -> dict[str, Any]:
    if not description:
        description = f"{source_name} ({subtype}) processed documentation."
    entry: dict[str, Any] = {
        "name": skill_name,
        "type": "doc",
        "subtype": subtype,
        "device": device,
        "category": category,
        "description": description,
    }
    if language:
        entry["language"] = language
    if api_type:
        entry["api_type"] = api_type
    if api_section:
        entry["api_section"] = api_section
    return entry


def _parse_api_fields_from_filename(filename: str) -> tuple[str, str]:
    stem = filename.removesuffix(".md")
    if "_attributes_" in stem:
        _, section = stem.split("_attributes_", 1)
        return "attributes", section
    if "_functions_" in stem:
        _, section = stem.split("_functions_", 1)
        return "functions", section
    return "", ""


def _find_doc_or_404(manifest: dict[str, Any], doc_id: str) -> dict[str, Any]:
    for doc in manifest.get("docs", []):
        if doc["id"] == doc_id:
            return doc
    raise HTTPException(status_code=404, detail=f"Doc '{doc_id}' not found.")


def _sse(data: dict[str, Any]) -> str:
    return f"data: {json.dumps(data)}\n\n"


@router.post("/tasks")
async def create_task(req: CreateTaskRequest):
    category = _slugify(req.category)
    if not category:
        raise HTTPException(status_code=400, detail="Invalid category name.")

    TASKS_ROOT.mkdir(parents=True, exist_ok=True)
    task_id = f"task_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S')}_{uuid4().hex[:8]}"
    base = _task_dir(task_id)
    base.mkdir(parents=True, exist_ok=True)

    manifest = {
        "task_id": task_id,
        "category": category,
        "created_at": _now_iso(),
        "updated_at": _now_iso(),
        "status": "idle",
        "docs": [],
    }
    _ensure_task_structure_bootstrap(task_id)
    _manifest_path(task_id).write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    _skill_path(task_id).write_text(
        _render_skill_md(category, []),
        encoding="utf-8",
    )

    return {
        "task_id": task_id,
        "category": category,
        "created_at": manifest["created_at"],
        "updated_at": manifest["updated_at"],
        "status": manifest["status"],
        "docs_count": 0,
    }


def _ensure_task_structure_bootstrap(task_id: str) -> None:
    _task_path(task_id, "docs", "images").mkdir(parents=True, exist_ok=True)
    _task_path(task_id, "raw_uploads").mkdir(parents=True, exist_ok=True)
    _task_path(task_id, "tmp").mkdir(parents=True, exist_ok=True)


@router.get("/tasks")
async def list_tasks():
    TASKS_ROOT.mkdir(parents=True, exist_ok=True)
    summaries: list[dict[str, Any]] = []
    for task_dir in sorted(TASKS_ROOT.iterdir()):
        if not task_dir.is_dir():
            continue
        manifest_path = task_dir / "manifest.json"
        if not manifest_path.exists():
            continue
        try:
            manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            continue
        summaries.append(
            {
                "task_id": manifest["task_id"],
                "category": manifest["category"],
                "created_at": manifest["created_at"],
                "updated_at": manifest["updated_at"],
                "status": manifest.get("status", "idle"),
                "docs_count": len(manifest.get("docs", [])),
            }
        )
    return {"tasks": summaries}


@router.get("/tasks/{task_id}")
async def get_task(task_id: str):
    manifest = _load_manifest(task_id)
    skill_content = _skill_path(task_id).read_text(encoding="utf-8")
    return {
        "task": {
            "task_id": manifest["task_id"],
            "category": manifest["category"],
            "created_at": manifest["created_at"],
            "updated_at": manifest["updated_at"],
            "status": manifest.get("status", "idle"),
            "docs": manifest.get("docs", []),
        },
        "skill_md": skill_content,
    }


@router.delete("/tasks/{task_id}")
async def delete_task(task_id: str):
    task_dir = _task_dir(task_id)
    if not task_dir.exists():
        raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found.")
    shutil.rmtree(task_dir)
    return {"deleted": task_id}


@router.post("/tasks/{task_id}/process")
async def process_task_files(
    task_id: str,
    files: list[UploadFile] = File(...),
    docs_config: str = Form(...),
):
    """Process multiple files sequentially for a task.

    docs_config is a JSON array aligned by file order:
      [{"subtype":"user_manual","device":"pxie_4135","language":"","split_mode":"headers"}, ...]
    """
    _ensure_task_structure(task_id)
    manifest = _load_manifest(task_id)

    try:
        configs_raw = json.loads(docs_config)
    except json.JSONDecodeError as e:
        raise HTTPException(status_code=400, detail=f"docs_config is not valid JSON: {e}")

    if not isinstance(configs_raw, list):
        raise HTTPException(status_code=400, detail="docs_config must be a JSON array.")
    if len(configs_raw) != len(files):
        raise HTTPException(
            status_code=400,
            detail="docs_config length must match uploaded files length.",
        )

    for item in configs_raw:
        subtype = str(item.get("subtype", "")).strip()
        if subtype == "programming_api":
            lang = _normalize_api_language(str(item.get("language", "")))
            if not lang:
                raise HTTPException(
                    status_code=400,
                    detail="programming_api requires a non-empty language.",
                )

            split_mode = str(item.get("split_mode", "headers")).strip().lower() or "headers"
            if split_mode not in SPLIT_MODES:
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid split_mode '{split_mode}'. Use one of {sorted(SPLIT_MODES)}.",
                )
        else:
            if not subtype:
                raise HTTPException(status_code=400, detail="subtype is required.")
            device = _slugify(str(item.get("device", "")))
            if not device:
                raise HTTPException(
                    status_code=400,
                    detail=f"{subtype} requires a non-empty device.",
                )

    async def event_stream():
        manifest["status"] = "processing"
        _sync_skill_and_manifest(task_id, manifest)
        category = manifest["category"]
        total_files = len(files)

        try:
            for idx, up in enumerate(files, start=1):
                cfg = configs_raw[idx - 1]
                subtype = str(cfg.get("subtype", "")).strip()
                device_raw = str(cfg.get("device", "")).strip()
                language_raw = str(cfg.get("language", "")).strip()
                split_mode = str(cfg.get("split_mode", "headers")).strip().lower() or "headers"
                skip_llm = bool(cfg.get("skip_llm", False))

                if not subtype:
                    raise RuntimeError(f"File {up.filename}: subtype is required.")

                if subtype == "programming_api":
                    device_norm = category
                    lang_norm = _normalize_api_language(language_raw)
                    if not lang_norm:
                        raise RuntimeError(
                            f"File {up.filename}: programming_api requires a non-empty language."
                        )
                    if split_mode not in SPLIT_MODES:
                        raise RuntimeError(
                            f"File {up.filename}: split_mode must be one of {sorted(SPLIT_MODES)}."
                        )
                else:
                    device_norm = _slugify(device_raw)
                    if not device_norm:
                        raise RuntimeError(
                            f"File {up.filename}: {subtype} requires a non-empty device."
                        )
                    lang_norm = ""
                    split_mode = "headers"

                filename = up.filename or f"upload_{idx}"
                custom_name = str(cfg.get("doc_name", "")).strip()
                base_slug = _slugify(custom_name) if custom_name else (_slugify(Path(filename).stem) or f"doc_{idx}")
                ext = Path(filename).suffix.lower()
                if ext not in {".pdf", ".md"}:
                    raise RuntimeError(f"File {filename}: only .pdf and .md are supported.")

                file_work_dir = _task_path(task_id, "tmp", f"{idx}_{uuid4().hex[:8]}")
                file_work_dir.mkdir(parents=True, exist_ok=True)

                # Persist original upload under task storage.
                raw_path = _task_path(task_id, "raw_uploads", f"{idx:02d}_{filename}")
                raw_path.write_bytes(await up.read())

                yield _sse(
                    {
                        "type": "status",
                        "task_id": task_id,
                        "file_index": idx,
                        "file_total": total_files,
                        "filename": filename,
                        "step": "start",
                        "message": f"Processing file {idx}/{total_files}: {filename}",
                    }
                )

                # 1) Input normalization to markdown.
                if ext == ".pdf":
                    yield _sse(
                        {
                            "type": "status",
                            "task_id": task_id,
                            "file_index": idx,
                            "file_total": total_files,
                            "filename": filename,
                            "step": "converting",
                            "message": "Converting PDF with MinerU...",
                        }
                    )

                    progress_queue: asyncio.Queue[dict[str, Any]] = asyncio.Queue()
                    loop = asyncio.get_running_loop()

                    def _on_convert_progress(completed_chunks: int, total_chunks: int) -> None:
                        total = max(total_chunks, 1)
                        cur = min(max(completed_chunks, 0), total)
                        loop.call_soon_threadsafe(
                            progress_queue.put_nowait,
                            {
                                "type": "status",
                                "task_id": task_id,
                                "file_index": idx,
                                "file_total": total_files,
                                "filename": filename,
                                "step": "converting",
                                "message": f"Converting PDF chunk {min(cur + 1, total)}/{total}",
                                "completed_chunks": cur,
                                "total_chunks": total,
                            },
                        )

                    convert_task = asyncio.create_task(
                        asyncio.to_thread(
                            doc_processor.convert_pdf_to_md,
                            raw_path,
                            file_work_dir / "mineru_output",
                            _on_convert_progress,
                        )
                    )

                    while True:
                        if convert_task.done() and progress_queue.empty():
                            break
                        try:
                            yield _sse(await asyncio.wait_for(progress_queue.get(), timeout=0.4))
                        except asyncio.TimeoutError:
                            continue

                    md_path, images_dir = await convert_task
                    raw_md = md_path.read_text(encoding="utf-8")
                else:
                    images_dir = None
                    raw_md = raw_path.read_text(encoding="utf-8")

                if not raw_md.strip():
                    raise RuntimeError(f"File {filename}: produced empty markdown.")

                # 2) Process by subtype.
                if subtype != "programming_api":
                    yield _sse(
                        {
                            "type": "status",
                            "task_id": task_id,
                            "file_index": idx,
                            "file_total": total_files,
                            "filename": filename,
                            "step": "pre_cleaning",
                            "message": "Applying local pre-cleaning...",
                        }
                    )
                    pre_clean = doc_processor.clean_manual_md(raw_md)

                    yield _sse(
                        {
                            "type": "token_estimate",
                            "task_id": task_id,
                            "file_index": idx,
                            "file_total": total_files,
                            "filename": filename,
                            "chars": len(pre_clean),
                            "estimated_tokens": doc_processor.estimate_tokens(pre_clean),
                        }
                    )

                    if skip_llm:
                        cleaned = pre_clean
                        yield _sse(
                            {
                                "type": "status",
                                "task_id": task_id,
                                "file_index": idx,
                                "file_total": total_files,
                                "filename": filename,
                                "step": "llm_cleanup",
                                "message": "LLM optimization skipped.",
                            }
                        )
                    else:
                        yield _sse(
                            {
                                "type": "status",
                                "task_id": task_id,
                                "file_index": idx,
                                "file_total": total_files,
                                "filename": filename,
                                "step": "llm_cleanup",
                                "message": "Optimizing markdown with LLM...",
                            }
                        )
                        cleaned = await doc_processor.cleanup_md_with_llm(
                            pre_clean,
                            os.environ.get("DOC_PROCESS_API_URL", os.environ["LLM_API_URL"]),
                            os.environ.get("DOC_PROCESS_API_KEY", os.environ["LLM_API_KEY"]),
                            os.environ.get("DOC_PROCESS_MODEL", "google/gemini-3.1-pro-preview"),
                        )

                    image_target = _task_path(task_id, "docs", "images")
                    copied = doc_processor.copy_images(images_dir, cleaned, image_target)

                    skill_base = _next_unique_skill_name(task_id, f"{base_slug}_{subtype}")
                    out_path = _task_path(task_id, "docs", f"{skill_base}.md")
                    out_path.write_text(cleaned, encoding="utf-8")

                    refs = sorted(set(doc_processor._IMAGE_REF_RE.findall(cleaned)))
                    entry = _build_skill_entry(
                        task_id=task_id,
                        category=category,
                        device=device_norm,
                        skill_name=skill_base,
                        subtype=subtype,
                        source_name=filename,
                        language="",
                        description=f"{filename} ({subtype}) optimized documentation.",
                    )
                    manifest["docs"].append(
                        {
                            "id": uuid4().hex,
                            "filename": f"{skill_base}.md",
                            "source_filename": filename,
                            "path": f"docs/{skill_base}.md",
                            "subtype": subtype,
                            "language": "",
                            "split_mode": "",
                            "images": refs,
                            "copied_images": copied,
                            "skill_entry": entry,
                        }
                    )
                else:
                    # API document flow: pre-clean, split, save resulting docs.
                    yield _sse(
                        {
                            "type": "status",
                            "task_id": task_id,
                            "file_index": idx,
                            "file_total": total_files,
                            "filename": filename,
                            "step": "pre_cleaning",
                            "message": "Applying API pre-cleaning...",
                        }
                    )
                    cleaned_api = doc_processor.clean_api_md(raw_md)

                    yield _sse(
                        {
                            "type": "token_estimate",
                            "task_id": task_id,
                            "file_index": idx,
                            "file_total": total_files,
                            "filename": filename,
                            "chars": len(cleaned_api),
                            "estimated_tokens": doc_processor.estimate_tokens(cleaned_api),
                        }
                    )

                    if split_mode == "full":
                        yield _sse(
                            {
                                "type": "status",
                                "task_id": task_id,
                                "file_index": idx,
                                "file_total": total_files,
                                "filename": filename,
                                "step": "split_analysis",
                                "message": "Requesting full-content split suggestions from LLM...",
                            }
                        )
                        split_defs = await doc_processor.llm_split_api_doc(
                            cleaned_api,
                            os.environ.get("DOC_PROCESS_API_URL", os.environ["LLM_API_URL"]),
                            os.environ.get("DOC_PROCESS_API_KEY", os.environ["LLM_API_KEY"]),
                            os.environ.get("DOC_PROCESS_MODEL", "google/gemini-3.1-pro-preview"),
                            device_slug=category,
                            category=category,
                            language=lang_norm,
                        )
                    else:
                        yield _sse(
                            {
                                "type": "status",
                                "task_id": task_id,
                                "file_index": idx,
                                "file_total": total_files,
                                "filename": filename,
                                "step": "split_analysis",
                                "message": "Requesting header-based split suggestions from LLM...",
                            }
                        )
                        split_defs = await doc_processor.suggest_api_split(
                            cleaned_api,
                            os.environ.get("DOC_PROCESS_API_URL", os.environ["LLM_API_URL"]),
                            os.environ.get("DOC_PROCESS_API_KEY", os.environ["LLM_API_KEY"]),
                            os.environ.get("DOC_PROCESS_MODEL", "google/gemini-3.1-pro-preview"),
                            device_slug=category,
                            category=category,
                            language=lang_norm,
                        )

                    result_files = doc_processor.split_api_doc(cleaned_api, split_defs)
                    if not result_files:
                        raise RuntimeError(f"File {filename}: API split generated no output files.")

                    for out_name, out_content in result_files.items():
                        stem = out_name.removesuffix(".md")
                        unique_stem = _next_unique_skill_name(task_id, stem)
                        out_file = _task_path(task_id, "docs", f"{unique_stem}.md")
                        out_file.write_text(out_content, encoding="utf-8")

                        matching = next((s for s in split_defs if s.get("filename") == out_name), {})
                        api_type, api_section = _parse_api_fields_from_filename(out_name)

                        entry = _build_skill_entry(
                            task_id=task_id,
                            category=category,
                            device=device_norm,
                            skill_name=unique_stem,
                            subtype="programming_api",
                            source_name=filename,
                            language=lang_norm,
                            description=matching.get("description")
                            or matching.get("title")
                            or f"{filename} API split section.",
                            api_type=api_type,
                            api_section=api_section,
                        )
                        manifest["docs"].append(
                            {
                                "id": uuid4().hex,
                                "filename": f"{unique_stem}.md",
                                "source_filename": filename,
                                "path": f"docs/{unique_stem}.md",
                                "subtype": "programming_api",
                                "language": lang_norm,
                                "split_mode": split_mode,
                                "images": [],
                                "copied_images": 0,
                                "skill_entry": entry,
                            }
                        )

                _sync_skill_and_manifest(task_id, manifest)
                yield _sse(
                    {
                        "type": "file_done",
                        "task_id": task_id,
                        "file_index": idx,
                        "file_total": total_files,
                        "filename": filename,
                        "step": "done",
                        "message": f"Completed file {idx}/{total_files}: {filename}",
                    }
                )

            manifest["status"] = "done"
            _sync_skill_and_manifest(task_id, manifest)
            yield _sse({"type": "done", "task_id": task_id, "docs": manifest.get("docs", [])})

        except Exception as e:
            manifest["status"] = "error"
            _sync_skill_and_manifest(task_id, manifest)
            logger.exception("Task processing failed")
            yield _sse({"type": "error", "task_id": task_id, "message": str(e)})

    return StreamingResponse(event_stream(), media_type="text/event-stream")


@router.get("/tasks/{task_id}/docs")
async def list_task_docs(task_id: str):
    manifest = _load_manifest(task_id)
    return {"docs": manifest.get("docs", [])}


@router.get("/tasks/{task_id}/docs/{doc_id}")
async def get_task_doc(task_id: str, doc_id: str):
    manifest = _load_manifest(task_id)
    doc = _find_doc_or_404(manifest, doc_id)
    content_path = _task_path(task_id, doc["path"])
    if not content_path.exists():
        raise HTTPException(status_code=404, detail="Doc file not found.")
    return {
        "doc": doc,
        "content": content_path.read_text(encoding="utf-8"),
    }


@router.put("/tasks/{task_id}/docs/{doc_id}/content")
async def update_task_doc_content(task_id: str, doc_id: str, req: UpdateDocContentRequest):
    manifest = _load_manifest(task_id)
    doc = _find_doc_or_404(manifest, doc_id)
    content_path = _task_path(task_id, doc["path"])
    if not content_path.exists():
        raise HTTPException(status_code=404, detail="Doc file not found.")

    content_path.write_text(req.content, encoding="utf-8")
    doc["images"] = sorted(set(doc_processor._IMAGE_REF_RE.findall(req.content)))
    _sync_skill_and_manifest(task_id, manifest)

    return {"updated": True, "doc": doc}


@router.patch("/tasks/{task_id}/docs/{doc_id}/meta")
async def update_task_doc_meta(task_id: str, doc_id: str, req: UpdateDocMetaRequest):
    manifest = _load_manifest(task_id)
    doc = _find_doc_or_404(manifest, doc_id)
    skill_entry = doc["skill_entry"]
    category = manifest["category"]

    if req.subtype is not None:
        if not req.subtype.strip():
            raise HTTPException(status_code=400, detail="subtype cannot be empty.")
        doc["subtype"] = req.subtype
        skill_entry["subtype"] = req.subtype
        if req.subtype == "programming_api":
            skill_entry["device"] = category

    if req.device is not None:
        if doc["subtype"] == "programming_api":
            skill_entry["device"] = category
        else:
            device = _slugify(req.device)
            if not device:
                raise HTTPException(status_code=400, detail=f"{doc['subtype']} requires a non-empty device.")
            skill_entry["device"] = device

    if req.language is not None:
        lang = _normalize_api_language(req.language)
        if doc["subtype"] == "programming_api":
            if not lang:
                raise HTTPException(status_code=400, detail="programming_api requires a non-empty language.")
            doc["language"] = lang
            skill_entry["language"] = lang
        else:
            doc["language"] = ""
            skill_entry.pop("language", None)

    if req.description is not None:
        skill_entry["description"] = req.description

    _sync_skill_and_manifest(task_id, manifest)
    return {"updated": True, "doc": doc}


@router.delete("/tasks/{task_id}/docs/{doc_id}")
async def delete_task_doc(task_id: str, doc_id: str):
    manifest = _load_manifest(task_id)
    doc = _find_doc_or_404(manifest, doc_id)

    content_path = _task_path(task_id, doc["path"])
    if content_path.exists():
        content = content_path.read_text(encoding="utf-8")
        for img in set(doc_processor._IMAGE_REF_RE.findall(content)):
            img_path = _task_path(task_id, "docs", "images", img)
            if img_path.exists():
                img_path.unlink()
        content_path.unlink()

    manifest["docs"] = [d for d in manifest.get("docs", []) if d["id"] != doc_id]
    _sync_skill_and_manifest(task_id, manifest)

    return {"deleted": doc_id}


@router.get("/tasks/{task_id}/skill")
async def get_task_skill_md(task_id: str):
    path = _skill_path(task_id)
    if not path.exists():
        raise HTTPException(status_code=404, detail="SKILL.md not found.")
    return {"content": path.read_text(encoding="utf-8")}



@router.get("/tasks/{task_id}/download")
async def download_task(task_id: str):
    task_dir = _task_dir(task_id)
    if not task_dir.exists():
        raise HTTPException(status_code=404, detail=f"Task '{task_id}' not found.")

    exclude_dirs = {"raw_uploads", "tmp"}
    temp_zip_dir = Path(tempfile.mkdtemp(prefix="task_zip_"))
    zip_path = temp_zip_dir / f"{task_id}.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for file_path in sorted(task_dir.rglob("*")):
            rel = file_path.relative_to(task_dir)
            if rel.parts and rel.parts[0] in exclude_dirs:
                continue
            if file_path.is_file():
                zf.write(file_path, arcname=str(rel))

    return FileResponse(
        path=str(zip_path),
        filename=f"{task_id}.zip",
        media_type="application/zip",
    )


@router.get("/tasks/{task_id}/images/{image_name}")
async def get_task_image(task_id: str, image_name: str):
    if "/" in image_name or "\\" in image_name:
        raise HTTPException(status_code=400, detail="Invalid image name.")

    image_path = _task_path(task_id, "docs", "images", image_name)
    if not image_path.exists():
        raise HTTPException(status_code=404, detail="Image not found.")

    return FileResponse(path=image_path)
