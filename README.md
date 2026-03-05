# NI Device Q&A Agent

An AI-powered question-answering system for NI (National Instruments) hardware devices. It combines an LLM with domain-specific "skills" delivered via the MCP (Model Context Protocol) to answer device questions grounded in official documentation.

## Architecture

```
User Question → FastAPI Backend → LLM ↔ MCP Server → Doc Skills → Cited Answer
```

**Core philosophy:** *"Don't build complex agents. Build rich skills."*

- A lightweight LLM orchestrator + richly structured, version-controlled Markdown skill documents
- Two-level indexing: system prompt contains only a lightweight skills registry; full Markdown content is loaded on-demand via tool calls
- Skills and document retrieval exposed as MCP tools

## Skill Types

| Type | Purpose | Example |
|------|---------|---------|
| **workflow** | Agent's SOP — defines how to classify questions and retrieve answers | `device_qa_workflow` |
| **doc** | Device documentation — user manuals and specifications | `pxie_4135_user_manual`, `pxie_4135_specifications` |

Doc skills have a `subtype` field (`user_manual` or `specifications`) and a `device` field for grouping.

## Quick Start

### Backend

```bash
# Create .env file with LLM configuration
cp .env.example .env

# Install dependencies
uv sync

# Run the API server
uv run uvicorn api:app --reload --port 8000

# Or run the CLI agent
uv run agent.py
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Dynamic Doc Management

Doc skills can be uploaded and deleted at runtime via the API or frontend UI:

- **Upload**: `POST /api/skills/upload` with a Markdown file + device name + subtype
- **Delete**: `DELETE /api/skills/{name}` (only doc-type skills can be deleted)

The frontend provides an intuitive UI for managing doc skills in the sidebar.

## Project Structure

```
agent.py          # CLI agent for testing
api.py            # FastAPI web backend
server.py         # MCP tool server
skills/
  metadata.json   # Skills registry
  workflow/       # Workflow SOP skills
  docs/           # Device documentation skills
frontend/         # React + TypeScript + Tailwind CSS
tests/            # Test prompts
docs/             # Design documentation
```
