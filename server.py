from dotenv import load_dotenv
load_dotenv()

import json
import logging
from pathlib import Path

from mcp.server.fastmcp import FastMCP

logger = logging.getLogger("ni_device_qa.server")
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
)

mcp = FastMCP("NI_Device_QA_Server")

SKILLS_DIR = Path(__file__).parent / "skills"
METADATA_PATH = SKILLS_DIR / "metadata.json"


@mcp.tool()
def load_skill_content(skill_name: str) -> str:
    """Load a skill's Markdown content by name from the skills registry.

    Args:
        skill_name: The name of the skill to load (must match a name in skills/metadata.json).

    Returns:
        The full Markdown content of the skill file, or an error message string.
    """
    try:
        with open(METADATA_PATH, encoding="utf-8") as f:
            registry = json.load(f)
    except FileNotFoundError:
        return f"Error: Metadata registry not found at '{METADATA_PATH}'."
    except json.JSONDecodeError as e:
        return f"Error: Failed to parse metadata.json — {e}"

    skill_entry = next(
        (s for s in registry.get("skills", []) if s["name"] == skill_name), None
    )
    if skill_entry is None:
        return f"Error: Skill '{skill_name}' not found in registry."

    # Doc-type skills are stored under "docs" directory regardless of subtype
    skill_type = skill_entry["type"]
    if skill_type == "doc":
        skill_path = SKILLS_DIR / "docs" / f"{skill_name}.md"
    else:
        skill_path = SKILLS_DIR / skill_type / f"{skill_name}.md"

    if not skill_path.exists():
        return f"Error: Skill file not found at '{skill_path}'."

    logger.info("Loading skill/doc: '%s' (type=%s) from %s", skill_name, skill_type, skill_path)
    return skill_path.read_text(encoding="utf-8")


if __name__ == "__main__":
    mcp.run()
