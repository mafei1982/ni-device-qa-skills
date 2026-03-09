import json
import logging
import os
import re
from pathlib import Path
from typing import Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from fastapi.staticfiles import StaticFiles
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from openai import AsyncOpenAI
from pydantic import BaseModel

logger = logging.getLogger("ni_device_qa")
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
)

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

LLM_API_URL = os.environ["LLM_API_URL"]
LLM_MODEL_NAME = os.environ["LLM_MODEL_NAME"]
LLM_API_KEY = os.environ["LLM_API_KEY"]

METADATA_PATH = Path(__file__).parent / "skills" / "metadata.json"
SKILLS_DIR = Path(__file__).parent / "skills"
IMAGES_DIR = SKILLS_DIR / "docs" / "images"

# Ensure the images directory exists
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# Serve skill doc images at /images/{filename}
app.mount("/images", StaticFiles(directory=str(IMAGES_DIR)), name="images")


class ChatRequest(BaseModel):
    messages: list[dict]
    model: Optional[str] = None


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------


@app.get("/api/models")
async def get_models():
    """Fetch available models from the OpenRouter API."""
    async with httpx.AsyncClient(timeout=30) as http:
        resp = await http.get(
            f"{LLM_API_URL}/models",
            headers={"Authorization": f"Bearer {LLM_API_KEY}"},
        )
        resp.raise_for_status()
    data = resp.json()
    models = [
        {"id": m["id"], "name": m.get("name", m["id"])}
        for m in data.get("data", [])
    ]
    models.sort(key=lambda m: m["name"])
    return {"models": models, "default": LLM_MODEL_NAME}


# ---------------------------------------------------------------------------
# Skills CRUD
# ---------------------------------------------------------------------------


@app.get("/api/skills")
async def get_skills():
    with open(METADATA_PATH, encoding="utf-8") as f:
        return json.load(f)


@app.get("/api/skills/{skill_name}/content")
async def get_skill_content(skill_name: str):
    with open(METADATA_PATH, encoding="utf-8") as f:
        registry = json.load(f)
    skill_entry = next(
        (s for s in registry.get("skills", []) if s["name"] == skill_name), None
    )
    if skill_entry is None:
        raise HTTPException(status_code=404, detail=f"Skill '{skill_name}' not found.")

    skill_type = skill_entry["type"]
    if skill_type == "doc":
        skill_path = SKILLS_DIR / "docs" / f"{skill_name}.md"
    else:
        skill_path = SKILLS_DIR / skill_type / f"{skill_name}.md"

    if not skill_path.exists():
        raise HTTPException(status_code=404, detail="Skill file not found.")
    return {"name": skill_name, "content": skill_path.read_text(encoding="utf-8")}


@app.post("/api/skills/upload")
async def upload_doc_skill(
    file: UploadFile = File(...),
    device: str = Form(...),
    subtype: str = Form(...),
    category: str = Form(""),
    language: str = Form(""),
):
    """Upload a new doc skill (user_manual, specifications, or programming_api).

    Saves the Markdown file and appends an entry to metadata.json.
    """
    if subtype not in ("user_manual", "specifications", "programming_api"):
        raise HTTPException(
            status_code=400,
            detail="subtype must be 'user_manual', 'specifications', or 'programming_api'.",
        )

    # Generate a safe skill name from device + subtype
    # Normalize: lowercase, replace non-alphanumeric with underscore
    device_slug = re.sub(r"[^a-z0-9]+", "_", device.lower()).strip("_")
    skill_name = f"{device_slug}_{subtype}"

    # Save the file
    docs_dir = SKILLS_DIR / "docs"
    docs_dir.mkdir(parents=True, exist_ok=True)
    file_path = docs_dir / f"{skill_name}.md"

    content = await file.read()
    file_path.write_bytes(content)

    # Update metadata.json
    with open(METADATA_PATH, encoding="utf-8") as f:
        registry = json.load(f)

    # Remove existing entry with the same name if any
    registry["skills"] = [
        s for s in registry["skills"] if s["name"] != skill_name
    ]

    _subtype_labels = {
        "user_manual": "User Manual",
        "specifications": "Specifications",
        "programming_api": "Programming API Reference",
    }

    desc = f"{device} {_subtype_labels[subtype]}"
    if subtype == "programming_api" and language.strip():
        desc += f" ({language.strip()})"
    desc += " — official documentation."

    new_entry: dict[str, str] = {
        "name": skill_name,
        "type": "doc",
        "subtype": subtype,
        "device": device_slug,
        "description": desc,
    }
    if subtype == "programming_api" and language.strip():
        new_entry["language"] = language.strip()
    if category.strip():
        new_entry["category"] = re.sub(
            r"[^a-z0-9]+", "_", category.strip().lower()
        ).strip("_")

    registry["skills"].append(new_entry)

    with open(METADATA_PATH, "w", encoding="utf-8") as f:
        json.dump(registry, f, ensure_ascii=False, indent=2)
        f.write("\n")

    return new_entry


@app.delete("/api/skills/{skill_name}")
async def delete_skill(skill_name: str):
    """Delete a doc skill from the registry and filesystem."""
    with open(METADATA_PATH, encoding="utf-8") as f:
        registry = json.load(f)

    skill_entry = next(
        (s for s in registry["skills"] if s["name"] == skill_name), None
    )
    if skill_entry is None:
        raise HTTPException(status_code=404, detail=f"Skill '{skill_name}' not found.")
    if skill_entry["type"] != "doc":
        raise HTTPException(
            status_code=400,
            detail="Only doc-type skills can be deleted.",
        )

    # Remove from registry
    registry["skills"] = [
        s for s in registry["skills"] if s["name"] != skill_name
    ]
    with open(METADATA_PATH, "w", encoding="utf-8") as f:
        json.dump(registry, f, ensure_ascii=False, indent=2)
        f.write("\n")

    # Remove file
    file_path = SKILLS_DIR / "docs" / f"{skill_name}.md"
    if file_path.exists():
        file_path.unlink()

    return {"deleted": skill_name}


# ---------------------------------------------------------------------------
# Chat
# ---------------------------------------------------------------------------


@app.post("/api/chat")
async def chat(request: ChatRequest):
    with open(METADATA_PATH, encoding="utf-8") as f:
        metadata_json = f.read()

    system_prompt = (
        "You are an NI Hardware Device Expert.\n\n"
        "Here is your skill registry:\n"
        f"{metadata_json}\n\n"
        "Your VERY FIRST action must be to call the `load_skill_content` tool "
        'with skill_name="device_qa_workflow" to understand your mandatory '
        "workflow before doing anything else."
    )

    messages = [{"role": "system", "content": system_prompt}] + request.messages
    chosen_model = request.model or LLM_MODEL_NAME
    oai_client = AsyncOpenAI(base_url=LLM_API_URL, api_key=LLM_API_KEY)
    server_params = StdioServerParameters(command="uv", args=["run", "server.py"])

    async def event_stream():
        nonlocal messages
        async with stdio_client(server_params) as (read, write):
            async with ClientSession(read, write) as session:
                await session.initialize()

                tools_result = await session.list_tools()
                openai_tools = [
                    {
                        "type": "function",
                        "function": {
                            "name": t.name,
                            "description": t.description,
                            "parameters": t.inputSchema,
                        },
                    }
                    for t in tools_result.tools
                ]

                while True:
                    stream = await oai_client.chat.completions.create(
                        model=chosen_model,
                        messages=messages,
                        tools=openai_tools,
                        stream=True,
                    )

                    tool_calls_accum: dict[int, dict] = {}
                    content_accum = ""

                    async for chunk in stream:
                        if not chunk.choices:
                            continue
                        choice = chunk.choices[0]
                        delta = choice.delta

                        # Accumulate tool call fragments
                        if delta and delta.tool_calls:
                            for tc in delta.tool_calls:
                                idx = tc.index
                                if idx not in tool_calls_accum:
                                    tool_calls_accum[idx] = {
                                        "id": "",
                                        "function_name": "",
                                        "function_args": "",
                                    }
                                if tc.id:
                                    tool_calls_accum[idx]["id"] = tc.id
                                if tc.function and tc.function.name:
                                    tool_calls_accum[idx]["function_name"] += tc.function.name
                                if tc.function and tc.function.arguments:
                                    tool_calls_accum[idx]["function_args"] += tc.function.arguments

                        # Stream text tokens to client
                        if delta and delta.content:
                            content_accum += delta.content
                            yield f"data: {json.dumps({'type': 'token', 'content': delta.content})}\n\n"

                    # --- Tool calls: execute and loop back ---
                    if tool_calls_accum:
                        tool_calls_list = [
                            {
                                "id": tc["id"],
                                "type": "function",
                                "function": {
                                    "name": tc["function_name"],
                                    "arguments": tc["function_args"],
                                },
                            }
                            for tc in tool_calls_accum.values()
                        ]
                        messages.append(
                            {
                                "role": "assistant",
                                "content": None,
                                "tool_calls": tool_calls_list,
                            }
                        )

                        for tc_data in tool_calls_accum.values():
                            name = tc_data["function_name"]
                            args = json.loads(tc_data["function_args"] or "{}")

                            logger.info("Tool call: %s(%s)", name, json.dumps(args))
                            if name == "load_skill_content":
                                skill_name = args.get("skill_name", "unknown")
                                logger.info(
                                    ">>> Loading skill/doc: %s", skill_name
                                )
                                yield f"data: {json.dumps({'type': 'status', 'content': f'Loading skill: {skill_name}'})}\n\n"

                            result = await session.call_tool(name, args)
                            tool_output = "\n".join(
                                item.text
                                for item in result.content
                                if hasattr(item, "text")
                            )
                            messages.append(
                                {
                                    "role": "tool",
                                    "tool_call_id": tc_data["id"],
                                    "content": tool_output,
                                }
                            )

                        continue  # loop back for more LLM calls

                    # --- Final text response: send done event ---
                    messages.append({"role": "assistant", "content": content_accum})
                    # Strip the prepended system message before returning so the
                    # frontend never re-sends it on subsequent calls.
                    yield f"data: {json.dumps({'type': 'done', 'messages': messages[1:]})}\n\n"
                    break

    return StreamingResponse(event_stream(), media_type="text/event-stream")
