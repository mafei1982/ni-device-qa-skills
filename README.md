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

## Doc Clean Process

Before adding new documentation to the skills system, start from the official NI PDF, convert it into Markdown, and then clean the Markdown into an LLM-friendly format.

### Step 1: Download the PDF from the NI Official Docs Site

Always start from the PDF hosted on the official NI documentation site instead of copying HTML content from the browser.

Recommended workflow:

1. Open the manual or specifications page on the NI docs site.
2. Download the original PDF.
3. Save it with a stable device-oriented name such as `pxie-4162-user-manual.pdf` or `pxie-4162-specifications.pdf`.
4. Keep the PDF in a temporary working folder while processing it.

Using the PDF as the source of truth gives better structure recovery and more reliable image extraction.

### Step 2: Convert the PDF to Markdown with MinerU

Use **MinerU** to convert the downloaded PDF into Markdown before any manual cleanup.

Install MinerU in a Python environment:

```bash
uv pip install -U "mineru[all]"
```

Convert a PDF to Markdown:

```bash
mineru -p path/to/pxie-4162-user-manual.pdf -o path/to/mineru-output
```

If GPU-backed parsing is not available, use the CPU-friendly backend:

```bash
mineru -p path/to/pxie-4162-user-manual.pdf -o path/to/mineru-output -b pipeline
```

What to do with the MinerU output:

1. Take the generated Markdown file as the raw source for cleanup.
2. Copy the extracted images into `skills/docs/images/`.
3. Keep image paths in the Markdown as relative references like `![](images/figure_01.png)`.
4. Move the cleaned Markdown doc into `skills/docs/` when it is ready to be registered as a skill.

On Windows, a typical manual flow is:

```powershell
mineru -p .\raw-docs\pxie-4162-user-manual.pdf -o .\tmp\mineru\pxie-4162-user-manual
```

After conversion, review the generated Markdown and image assets before sending the Markdown to an LLM for cleanup.

### Step 3: Clean Specifications and User Manuals

Send the MinerU-generated Markdown for specifications/manuals to **Gemini 3.1 Pro** (or use Gemini Pro mode) with the following prompt to convert it into LLM-friendly Markdown:

---

#### 1. Establish a Clear Heading Hierarchy

Currently, almost every section header in the document uses an H1 tag (`#`). This flattens the document structure, making it difficult for an LLM to distinguish between a main chapter and a minor sub-step.

* **Action:** Reserve H1 (`#`) strictly for the document title. Use H2 (`##`) for major sections (e.g., `## PXIe-4162 Overview`, `## Device Capabilities`) and H3 (`###`) for subsections (e.g., `### Unpacking the Kit`, `### Installing the Software`).

#### 2. Convert HTML Tables to Markdown Tables

The document currently uses raw HTML for tables, such as `<table><tr><td>Variant</td><td>Driver Name</td>...`. While LLMs can read HTML, Markdown tables are much more token-efficient and easier for the model to parse.

* **Action:** Convert HTML tables to standard Markdown format.
* **Example:**

```markdown
| Variant | Driver Name | Earliest Version Support |
|---|---|---|
| PXIe-4162 (100 pA) | NI-DCPower | 17.6.1 |
| PXIe-4162 (10 pA) | NI-DCPower | 21.8 |
```

#### 3. Remove Unnecessary Math Formatting for Simple Units

The document wraps basic units and numbers in overly complex formatting, such as `$1 0 0 \mathsf { k } \mathsf { S } / \mathsf { s }$` and `$\pm 2 4 \nu$`. LLMs process plain text much more efficiently for standard numbers.

* **Action:** Strip the math formatting from simple units. Convert `$1 0 0 \mathsf { k } \mathsf { S } / \mathsf { s }$` to **100 kS/s** and `$\pm 2 4 \nu$` to **±24 V**. Reserve math formatting strictly for actual equations, like the voltage drop calculation: $V = I \times R$.

#### 4. Clean Up OCR Text Artifacts

The document contains several conversion artifacts and duplicated text fragments in the headers, such as `# PXIe-4162 Installation and Configur tion and Configuration` and `# Selecting an Ac ting Accessory for Your Applic our Application`.

* **Action:** Do a manual review or find-and-replace to fix these broken headers so the LLM doesn't get confused by the typos.

#### 5. Consolidate Image Links with Context

You requested to keep the image references. Currently, they are formatted exactly as they should be: `![](images/...)`.

* **Action:** Simply ensure that the image links sit directly below their descriptive text or figure titles (e.g., `Figure 1. PXIe-4162 Quadrant Diagram`) without excessive blank lines separating them, so the LLM associates the image reference with the correct figure. Remove the image ref if it is just an icon.

---

### Step 4: Split and Register API Docs

Ask **Opus 4.6** in Copilot to write a Python script that:

1. Splits the API doc based on API category (e.g., functions by group, attributes by type)
2. Updates the workflow skill to reference the new split docs
3. Updates `metadata.json` automatically with the new skill entries

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
