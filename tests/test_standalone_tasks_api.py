from __future__ import annotations

import json
from pathlib import Path

from fastapi import FastAPI
from fastapi.testclient import TestClient

import standalone_tasks_api as sta


def _build_client(tmp_path: Path) -> TestClient:
    sta.TASKS_ROOT = tmp_path / "tasks"
    app = FastAPI()
    app.include_router(sta.router)
    return TestClient(app)


def _seed_doc_task(task_id: str, category: str) -> dict:
    sta._ensure_task_structure_bootstrap(task_id)
    manifest = {
        "task_id": task_id,
        "category": category,
        "created_at": sta._now_iso(),
        "updated_at": sta._now_iso(),
        "status": "done",
        "docs": [],
    }

    doc_name = "seed_user_manual"
    doc_content = "# Seed\n\n![](images/a.png)\n"
    (sta._task_path(task_id, "docs", f"{doc_name}.md")).write_text(
        doc_content,
        encoding="utf-8",
    )
    (sta._task_path(task_id, "docs", "images", "a.png")).write_bytes(b"img")

    entry = {
        "name": doc_name,
        "type": "doc",
        "subtype": "user_manual",
        "device": category,
        "category": category,
        "description": "Seed doc",
    }
    manifest["docs"].append(
        {
            "id": "doc_1",
            "filename": f"{doc_name}.md",
            "source_filename": "seed.md",
            "path": f"docs/{doc_name}.md",
            "subtype": "user_manual",
            "language": "",
            "split_mode": "",
            "images": ["a.png"],
            "copied_images": 1,
            "skill_entry": entry,
        }
    )

    sta._sync_skill_and_manifest(task_id, manifest)
    return manifest


def test_create_task_creates_structure_and_skill_md(tmp_path: Path):
    client = _build_client(tmp_path)

    res = client.post("/api/standalone/tasks", json={"category": "DCPower"})
    assert res.status_code == 200
    data = res.json()

    task_id = data["task_id"]
    task_dir = sta._task_dir(task_id)

    assert task_dir.exists()
    assert (task_dir / "docs").exists()
    assert (task_dir / "docs" / "images").exists()
    assert (task_dir / "manifest.json").exists()
    assert (task_dir / "SKILL.md").exists()

    skill_md = (task_dir / "SKILL.md").read_text(encoding="utf-8")
    assert "name: dcpower_QA_Workflow" in skill_md
    assert sta.REGISTRY_START in skill_md
    assert sta.REGISTRY_END in skill_md


def test_update_doc_content_syncs_image_refs_into_manifest_and_skill_registry(tmp_path: Path):
    client = _build_client(tmp_path)
    task_id = "task_seed"
    category = "dcpower"

    _seed_doc_task(task_id, category)

    new_content = "# Updated\n\n![](images/new_one.png)\n"
    res = client.put(
        f"/api/standalone/tasks/{task_id}/docs/doc_1/content",
        json={"content": new_content},
    )
    assert res.status_code == 200

    manifest = json.loads(sta._manifest_path(task_id).read_text(encoding="utf-8"))
    doc = manifest["docs"][0]
    assert doc["images"] == ["new_one.png"]

    skill_md = sta._skill_path(task_id).read_text(encoding="utf-8")
    assert "seed_user_manual" in skill_md
    assert sta.REGISTRY_START in skill_md


def test_delete_doc_removes_doc_images_and_registry_entry(tmp_path: Path):
    client = _build_client(tmp_path)
    task_id = "task_seed"
    category = "dcpower"

    _seed_doc_task(task_id, category)

    doc_path = sta._task_path(task_id, "docs", "seed_user_manual.md")
    image_path = sta._task_path(task_id, "docs", "images", "a.png")
    assert doc_path.exists()
    assert image_path.exists()

    res = client.delete(f"/api/standalone/tasks/{task_id}/docs/doc_1")
    assert res.status_code == 200

    assert not doc_path.exists()
    assert not image_path.exists()

    manifest = json.loads(sta._manifest_path(task_id).read_text(encoding="utf-8"))
    assert manifest["docs"] == []

    skill_md = sta._skill_path(task_id).read_text(encoding="utf-8")
    assert "seed_user_manual" not in skill_md
    assert sta.REGISTRY_START in skill_md


def test_update_doc_meta_updates_device_for_user_manual(tmp_path: Path):
    client = _build_client(tmp_path)
    task_id = "task_seed"
    category = "dcpower"

    _seed_doc_task(task_id, category)

    res = client.patch(
        f"/api/standalone/tasks/{task_id}/docs/doc_1/meta",
        json={"device": "PXIe-4135"},
    )
    assert res.status_code == 200

    manifest = json.loads(sta._manifest_path(task_id).read_text(encoding="utf-8"))
    doc = manifest["docs"][0]
    assert doc["skill_entry"]["device"] == "pxie_4135"

    skill_md = sta._skill_path(task_id).read_text(encoding="utf-8")
    assert '"device": "pxie_4135"' in skill_md
