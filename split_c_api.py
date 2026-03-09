#!/usr/bin/env python3
"""
Split the monolithic NI-DCPower C API programming reference into
topic-specific markdown files so the LLM only loads what is relevant.

The script reads the minified source file and splits it at top-level
heading boundaries (lines that start with "# ").  Each output section
is defined by a list of heading prefixes that should be included.

Usage:
    python split_c_api.py
"""

from __future__ import annotations

import re
from pathlib import Path

# ── Paths ────────────────────────────────────────────────────────────────
SOURCE = Path(__file__).parent / "skills" / "docs" / "dcpower_c_api_programming_api.md"
OUT_DIR = Path(__file__).parent / "skills" / "docs"

# ── Section definitions ─────────────────────────────────────────────────
# Each entry: (output_filename, preamble_title, list of top-level heading
# prefixes that belong to this section).
#
# "Heading prefixes" are matched against the text that follows "# " at
# the start of a line.  A section collects *all* lines from the first
# matching heading until the next top-level heading that does NOT match.
#
# Order matters — sections are scanned in order and the *first* match
# wins, so put more specific prefixes before generic ones.

SECTIONS: list[tuple[str, str, list[str]]] = [
    (
        "dcpower_c_api_attributes_general.md",
        "NI-DCPower C API — General Attributes & Events",
        [
            "nidcpower.h",
            "Attributes",
            "Advanced",
            "Device Specific",
            "Events",
            # Sub-headings that live inside Events
            "Measure Comple",
            "Pulse Complete",
            "Source Comple",
            "Sequence Engine",
            "Sequence Iteration",
            "Ready for Pulse",
        ],
    ),
    (
        "dcpower_c_api_lcr.md",
        "NI-DCPower C API — LCR & Impedance",
        [
            "LCR",
            "Compensation",
        ],
    ),
    (
        "dcpower_c_api_measure.md",
        "NI-DCPower C API — Measure",
        [
            "Measure",
        ],
    ),
    (
        "dcpower_c_api_source.md",
        "NI-DCPower C API — Source & Triggers (Attributes)",
        [
            "Source",
            "Constant Power",
            "DC Voltage",
            "DC Current",
            "Pulse Current",
            "Pulse Voltage",
            "Triggers",
            "Measure Trigger",
            "Pulse Trigger",
            "Sequenc",          # "Sequenc Sequence Advance Trigger"
            "Sequence Advance",
            "Shutdown Trigger",
            "Source Trigger",
            "Start Trigger",
            "Support",          # "Supported Attributes by Device"
        ],
    ),
    (
        "dcpower_c_api_functions.md",
        "NI-DCPower C API — Functions Reference",
        [
            "Functions",
            "Calibration",
            "LCR Compensation",
            "Control",
            "Initialize",
            "Query",
            "Set/Get",
            "Set Attribute",
            "Utility",
            "IVI",
            "Locking",
            "Triggers and Events",
            "nidcpowerObsolete",
            "Unsupported",
            "Obsoleted",
        ],
    ),
]

# ── Helpers ──────────────────────────────────────────────────────────────

TOP_HEADING_RE = re.compile(r"^# (.+)")


def _heading_matches(heading_text: str, prefixes: list[str]) -> bool:
    """Return True if *heading_text* starts with any of the given prefixes."""
    for p in prefixes:
        if heading_text.startswith(p):
            return True
    return False


def _find_section_for_heading(heading_text: str, assigned: set[int]) -> int | None:
    """Return the index of the first section whose prefixes match *heading_text*,
    skipping sections already fully closed (not used here but future-proof)."""
    for idx, (_fn, _title, prefixes) in enumerate(SECTIONS):
        if _heading_matches(heading_text, prefixes):
            return idx
    return None


# ── Main logic ───────────────────────────────────────────────────────────

def split() -> None:
    lines = SOURCE.read_text(encoding="utf-8").splitlines(keepends=True)
    print(f"Read {len(lines)} lines from {SOURCE.name}")

    # Buckets — one list of lines per section
    buckets: list[list[str]] = [[] for _ in SECTIONS]
    current_bucket: int | None = None

    for line in lines:
        m = TOP_HEADING_RE.match(line)
        if m:
            heading_text = m.group(1).strip()
            sec_idx = _find_section_for_heading(heading_text, set())
            if sec_idx is not None:
                current_bucket = sec_idx

        if current_bucket is not None:
            buckets[current_bucket].append(line)

    # Write each section
    for idx, (filename, title, _prefixes) in enumerate(SECTIONS):
        if not buckets[idx]:
            print(f"  ⚠  {filename}: EMPTY — no matching headings found")
            continue

        out = OUT_DIR / filename
        content = f"# {title}\n\n" + "".join(buckets[idx])
        out.write_text(content, encoding="utf-8")
        line_count = content.count("\n")
        print(f"  ✓  {filename}: {line_count} lines")

    print("\nDone.")


if __name__ == "__main__":
    split()
