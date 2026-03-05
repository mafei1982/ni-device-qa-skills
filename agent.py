from dotenv import load_dotenv

load_dotenv()

import asyncio
import json
import os
from pathlib import Path

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from openai import AsyncOpenAI

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

LLM_API_URL = os.environ["LLM_API_URL"]
LLM_MODEL_NAME = os.environ["LLM_MODEL_NAME"]
LLM_API_KEY = os.environ["LLM_API_KEY"]

client = AsyncOpenAI(base_url=LLM_API_URL, api_key=LLM_API_KEY)

BASE_DIR = Path(__file__).parent
METADATA_PATH = BASE_DIR / "skills" / "metadata.json"


# ---------------------------------------------------------------------------
# Agentic tool-calling loop
# ---------------------------------------------------------------------------


async def agent_loop(
    session: ClientSession,
    messages: list[dict],
    openai_tools: list[dict],
) -> None:
    while True:
        response = await client.chat.completions.create(
            model=LLM_MODEL_NAME,
            messages=messages,
            tools=openai_tools,
        )

        message = response.choices[0].message

        # --- Tool call branch: execute silently, loop back without user input ---
        if message.tool_calls:
            messages.append(message.model_dump(exclude_unset=True))

            for tool_call in message.tool_calls:
                name = tool_call.function.name
                arguments = json.loads(tool_call.function.arguments or "{}")

                print(f"\n[tool call] {name}({arguments})")
                result = await session.call_tool(name, arguments)

                tool_output = "\n".join(
                    item.text for item in result.content if hasattr(item, "text")
                )

                messages.append(
                    {
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": tool_output,
                    }
                )

            continue  # loop back to call LLM again with tool results

        # --- Text response branch: print, then wait for user reply ---
        print("\n" + "=" * 60)
        print(message.content or "")
        print("=" * 60)
        messages.append({"role": "assistant", "content": message.content or ""})

        print(
            "\nYou (Paste your multi-line input, then type '/send' on a "
            "new line and press Enter to submit):"
        )
        lines = []
        while True:
            line = input()
            if line.strip() == "/send":
                break
            lines.append(line)
        user_input = "\n".join(lines)

        if user_input.strip().lower() in ("quit", "exit"):
            print("Exiting. Goodbye!")
            break

        messages.append({"role": "user", "content": user_input})


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


async def main() -> None:
    # Read skill registry for the system prompt
    metadata = json.loads(METADATA_PATH.read_text(encoding="utf-8"))
    metadata_json = json.dumps(metadata, ensure_ascii=False, indent=2)

    system_prompt = (
        "You are an NI Hardware Device Expert.\n\n"
        "Here is your skill registry:\n"
        f"{metadata_json}\n\n"
        "Your VERY FIRST action must be to call the `load_skill_content` tool "
        'with skill_name="device_qa_workflow" to understand your mandatory '
        "workflow before doing anything else."
    )

    messages: list[dict] = [
        {"role": "system", "content": system_prompt},
    ]

    print("NI Device Q&A Agent — Type your question about NI hardware devices.")
    print("Type 'quit' or 'exit' to stop.\n")

    print("You (Paste your multi-line input, then type '/send' on a new line and press Enter to submit):")
    lines = []
    while True:
        line = input()
        if line.strip() == "/send":
            break
        lines.append(line)
    user_input = "\n".join(lines)

    if user_input.strip().lower() in ("quit", "exit"):
        print("Exiting. Goodbye!")
        return

    messages.append({"role": "user", "content": user_input})

    # Spawn MCP server as a subprocess and connect
    server_params = StdioServerParameters(command="uv", args=["run", "server.py"])

    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # Discover tools and map to OpenAI schema
            list_tools_result = await session.list_tools()
            openai_tools = [
                {
                    "type": "function",
                    "function": {
                        "name": tool.name,
                        "description": tool.description,
                        "parameters": tool.inputSchema,
                    },
                }
                for tool in list_tools_result.tools
            ]

            print(
                f"Connected to MCP server. "
                f"Discovered {len(openai_tools)} tool(s): "
                + ", ".join(t["function"]["name"] for t in openai_tools)
            )

            await agent_loop(session, messages, openai_tools)


if __name__ == "__main__":
    asyncio.run(main())
