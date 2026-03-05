import json
import os
import re
from pathlib import Path
from typing import Optional

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from openai import AsyncOpenAI
from pydantic import BaseModel

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
):
    """Upload a new doc skill (user_manual or specifications).

    Saves the Markdown file and appends an entry to metadata.json.
    """
    if subtype not in ("user_manual", "specifications"):
        raise HTTPException(
            status_code=400,
            detail="subtype must be 'user_manual' or 'specifications'.",
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

    new_entry: dict[str, str] = {
        "name": skill_name,
        "type": "doc",
        "subtype": subtype,
        "device": device_slug,
        "description": f"{device} {'User Manual' if subtype == 'user_manual' else 'Specifications'} — official documentation.",
    }
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

    client = AsyncOpenAI(base_url=LLM_API_URL, api_key=LLM_API_KEY)
    server_params = StdioServerParameters(command="uv", args=["run", "server.py"])

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
                chosen_model = request.model or LLM_MODEL_NAME
                resp = await client.chat.completions.create(
                    model=chosen_model,
                    messages=messages,
                    tools=openai_tools,
                )
                msg = resp.choices[0].message

                if msg.tool_calls:
                    messages.append(msg.model_dump(exclude_unset=True))
                    for tc in msg.tool_calls:
                        args = json.loads(tc.function.arguments or "{}")
                        result = await session.call_tool(tc.function.name, args)
                        tool_output = "\n".join(
                            item.text
                            for item in result.content
                            if hasattr(item, "text")
                        )
                        messages.append(
                            {
                                "role": "tool",
                                "tool_call_id": tc.id,
                                "content": tool_output,
                            }
                        )
                    continue

                final = msg.content or ""
                messages.append({"role": "assistant", "content": final})
                # Strip the prepended system message before returning so the
                # frontend never re-sends it on subsequent calls.
                return {"response": final, "messages": messages[1:]}
