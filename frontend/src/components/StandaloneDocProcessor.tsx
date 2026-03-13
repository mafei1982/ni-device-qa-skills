import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  createStandaloneTask,
  deleteStandaloneDoc,
  deleteStandaloneTask,
  getStandaloneDoc,
  getStandaloneDownloadUrl,
  getStandaloneTask,
  getStandaloneTaskImageUrl,
  listStandaloneTasks,
  processStandaloneTaskFiles,
  updateStandaloneDocContent,
  updateStandaloneDocMeta,
  type StandaloneDocRecord,
  type StandaloneProcessConfig,
  type StandaloneProcessEvent,
  type StandaloneTaskSummary,
} from "../api";
import Modal from "./Modal";

type UploadRow = {
  file: File;
  docName: string;
  subtype: "user_manual" | "specifications" | "programming_api" | "custom";
  customSubtype: string;
  device: string;
  language: string;
  split_mode: "headers" | "full";
  skip_llm: boolean;
};

function defaultDocName(filename: string): string {
  return filename.replace(/\.[^.]+$/, "").replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toLowerCase();
}

function normalizeMdImage(taskId: string, src: string): string {
  const clean = src.replace(/\\/g, "/").trim();
  if (!clean) return clean;
  if (/^(https?:)?\/\//i.test(clean) || clean.startsWith("data:")) {
    return clean;
  }
  if (clean.startsWith("images/")) {
    return getStandaloneTaskImageUrl(taskId, clean.slice("images/".length));
  }
  if (clean.startsWith("./images/")) {
    return getStandaloneTaskImageUrl(taskId, clean.slice("./images/".length));
  }
  return clean;
}

export default function StandaloneDocProcessor() {
  const [tasks, setTasks] = useState<StandaloneTaskSummary[]>([]);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");

  const [category, setCategory] = useState("");
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const [taskDocs, setTaskDocs] = useState<StandaloneDocRecord[]>([]);
  const [taskSkillMd, setTaskSkillMd] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskLoading, setTaskLoading] = useState(false);
  const [taskError, setTaskError] = useState<string | null>(null);

  const [rows, setRows] = useState<UploadRow[]>([]);
  const [processLoading, setProcessLoading] = useState(false);
  const [processLog, setProcessLog] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeDoc, setActiveDoc] = useState<StandaloneDocRecord | null>(null);
  const [activeContent, setActiveContent] = useState("");
  const [activeDescription, setActiveDescription] = useState("");
  const [activeSubtype, setActiveSubtype] = useState<string>("user_manual");
  const [activeDevice, setActiveDevice] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("");
  const [docModalLoading, setDocModalLoading] = useState(false);
  const [docModalError, setDocModalError] = useState<string | null>(null);
  const [docSaving, setDocSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const syncingRef = useRef<"editor" | "preview" | null>(null);

  const handleEditorScroll = useCallback(() => {
    if (syncingRef.current === "preview") return;
    syncingRef.current = "editor";
    const editor = editorRef.current;
    const preview = previewRef.current;
    if (editor && preview) {
      const ratio = editor.scrollTop / (editor.scrollHeight - editor.clientHeight || 1);
      preview.scrollTop = ratio * (preview.scrollHeight - preview.clientHeight || 1);
    }
    requestAnimationFrame(() => { syncingRef.current = null; });
  }, []);

  const handlePreviewScroll = useCallback(() => {
    if (syncingRef.current === "editor") return;
    syncingRef.current = "preview";
    const editor = editorRef.current;
    const preview = previewRef.current;
    if (editor && preview) {
      const ratio = preview.scrollTop / (preview.scrollHeight - preview.clientHeight || 1);
      editor.scrollTop = ratio * (editor.scrollHeight - editor.clientHeight || 1);
    }
    requestAnimationFrame(() => { syncingRef.current = null; });
  }, []);

  const selectedTask = useMemo(
    () => tasks.find((t) => t.task_id === selectedTaskId) ?? null,
    [tasks, selectedTaskId],
  );

  async function refreshTasks() {
    setTasksLoading(true);
    try {
      const data = await listStandaloneTasks();
      setTasks(data.tasks);
      if (!selectedTaskId && data.tasks.length > 0) {
        setSelectedTaskId(data.tasks[0].task_id);
      }
    } finally {
      setTasksLoading(false);
    }
  }

  async function refreshTaskDetail(taskId: string) {
    setTaskLoading(true);
    setTaskError(null);
    try {
      const data = await getStandaloneTask(taskId);
      setTaskDocs(data.task.docs);
      setTaskSkillMd(data.skill_md);
      setTaskStatus(data.task.status);
    } catch (err) {
      setTaskError(err instanceof Error ? err.message : "Failed to load task details.");
    } finally {
      setTaskLoading(false);
    }
  }

  useEffect(() => {
    refreshTasks();
  }, []);

  useEffect(() => {
    if (!selectedTaskId) return;
    refreshTaskDetail(selectedTaskId);
  }, [selectedTaskId]);

  async function handleCreateTask() {
    if (!category.trim()) return;
    setCreateLoading(true);
    setCreateError(null);
    try {
      const created = await createStandaloneTask(category.trim());
      setCategory("");
      await refreshTasks();
      setSelectedTaskId(created.task_id);
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Failed to create task.");
    } finally {
      setCreateLoading(false);
    }
  }

  async function handleDeleteTask(taskId: string) {
    if (!window.confirm(`Delete task '${taskId}' and all its docs?`)) return;
    await deleteStandaloneTask(taskId);
    if (selectedTaskId === taskId) {
      setSelectedTaskId("");
      setTaskDocs([]);
      setTaskSkillMd("");
      setTaskStatus("");
    }
    await refreshTasks();
  }

  function handleFileSelect(files: FileList | null) {
    if (!files || files.length === 0) return;
    const newRows: UploadRow[] = Array.from(files).map((file) => ({
      file,
      docName: defaultDocName(file.name),
      subtype: "user_manual",
      customSubtype: "",
      device: selectedTask?.category || "",
      language: "",
      split_mode: "headers",
      skip_llm: false,
    }));
    setRows((prev) => [...prev, ...newRows]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeRow(index: number) {
    setRows((prev) => prev.filter((_, i) => i !== index));
  }

  function updateRow(index: number, patch: Partial<UploadRow>) {
    setRows((prev) => prev.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  }

  async function handleProcessBatch() {
    if (!selectedTaskId || rows.length === 0) return;

    for (const row of rows) {
      if (row.subtype === "custom" && !row.customSubtype.trim()) {
        setProcessLog((prev) => [...prev, `Error: ${row.file.name} requires a custom type name.`]);
        return;
      }
      const effectiveSubtype = row.subtype === "custom" ? row.customSubtype.trim() : row.subtype;
      if (effectiveSubtype !== "programming_api" && !row.device.trim()) {
        setProcessLog((prev) => [...prev, `Error: ${row.file.name} requires a device for ${effectiveSubtype}.`]);
        return;
      }
      if (effectiveSubtype === "programming_api" && !row.language) {
        setProcessLog((prev) => [...prev, `Error: ${row.file.name} requires API language.`]);
        return;
      }
    }

    setProcessLoading(true);
    setProcessLog([]);
    setTaskStatus("processing");

    const files = rows.map((r) => r.file);
    const cfg: StandaloneProcessConfig[] = rows.map((r) => {
      const effectiveSubtype = r.subtype === "custom" ? r.customSubtype.trim() : r.subtype;
      return {
        subtype: effectiveSubtype,
        device: effectiveSubtype === "programming_api" ? undefined : r.device,
        language: r.language,
        split_mode: effectiveSubtype === "programming_api" ? r.split_mode : "headers",
        doc_name: r.docName,
        skip_llm: r.skip_llm,
      };
    });

    try {
      await processStandaloneTaskFiles(
        selectedTaskId,
        files,
        cfg,
        (event: StandaloneProcessEvent) => {
          if (event.type === "status") {
            setProcessLog((prev) => [
              ...prev,
              `[${event.file_index ?? "?"}/${event.file_total ?? "?"}] ${event.filename ?? ""} - ${event.message ?? event.step ?? ""}`,
            ]);
          }
          if (event.type === "token_estimate") {
            setProcessLog((prev) => [
              ...prev,
              `[${event.file_index ?? "?"}] token estimate: ${event.estimated_tokens ?? 0} (${event.chars ?? 0} chars)`,
            ]);
          }
          if (event.type === "file_done") {
            setProcessLog((prev) => [...prev, `${event.filename ?? "file"} completed.`]);
          }
          if (event.type === "error") {
            setProcessLog((prev) => [...prev, `Error: ${event.message ?? "processing failed"}`]);
            setTaskStatus("error");
          }
          if (event.type === "done") {
            setProcessLog((prev) => [...prev, "Batch processing completed."]);
            setTaskStatus("done");
          }
        },
      );
      setRows([]);
      await refreshTasks();
      await refreshTaskDetail(selectedTaskId);
    } catch (err) {
      setProcessLog((prev) => [
        ...prev,
        err instanceof Error ? err.message : "Batch process failed.",
      ]);
    } finally {
      setProcessLoading(false);
    }
  }

  async function openDoc(doc: StandaloneDocRecord) {
    setDocModalLoading(true);
    setDocModalError(null);
    setActiveDoc(doc);
    try {
      const data = await getStandaloneDoc(selectedTaskId, doc.id);
      setActiveContent(data.content);
      setActiveDescription(data.doc.skill_entry.description);
      setActiveSubtype(data.doc.subtype);
      setActiveDevice(data.doc.skill_entry.device || selectedTask?.category || "");
      setActiveLanguage(data.doc.language || "");
    } catch (err) {
      setDocModalError(err instanceof Error ? err.message : "Failed to open doc.");
    } finally {
      setDocModalLoading(false);
    }
  }

  function closeDocModal() {
    setActiveDoc(null);
    setActiveContent("");
    setActiveDescription("");
    setActiveSubtype("user_manual");
    setActiveDevice("");
    setActiveLanguage("");
    setDocModalError(null);
    setDocModalLoading(false);
  }

  async function saveDocChanges() {
    if (!activeDoc || !selectedTaskId) return;
    setDocSaving(true);
    setDocModalError(null);
    try {
      await updateStandaloneDocContent(selectedTaskId, activeDoc.id, activeContent);
      await updateStandaloneDocMeta(selectedTaskId, activeDoc.id, {
        description: activeDescription,
        subtype: activeSubtype,
        device: activeSubtype === "programming_api" ? undefined : activeDevice,
        language: activeSubtype === "programming_api" ? activeLanguage : "",
      });
      await refreshTaskDetail(selectedTaskId);
      closeDocModal();
    } catch (err) {
      setDocModalError(err instanceof Error ? err.message : "Failed to save doc.");
    } finally {
      setDocSaving(false);
    }
  }

  async function handleDeleteDoc(doc: StandaloneDocRecord) {
    if (!window.confirm(`Delete '${doc.filename}' and all images referenced by this doc?`)) return;
    await deleteStandaloneDoc(selectedTaskId, doc.id);
    await refreshTaskDetail(selectedTaskId);
  }

  return (
    <div className="flex h-full min-h-0 bg-gray-50">
      <aside className="w-72 border-r border-gray-200 bg-white p-4 overflow-y-auto">
        <h2 className="text-sm font-semibold text-gray-900">Standalone Tasks</h2>
        <p className="mt-1 text-xs text-gray-500">Persistent category-level processing tasks.</p>

        <div className="mt-4 space-y-2">
          <input
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category (e.g. dcpower)"
          />
          <button
            onClick={handleCreateTask}
            disabled={createLoading || !category.trim()}
            className="w-full rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {createLoading ? "Creating..." : "Create Task"}
          </button>
          {createError && <p className="text-xs text-red-600">{createError}</p>}
        </div>

        <div className="mt-5 space-y-2">
          <button
            onClick={refreshTasks}
            className="w-full rounded border border-gray-300 px-3 py-1.5 text-xs text-gray-700"
          >
            {tasksLoading ? "Refreshing..." : "Refresh Tasks"}
          </button>

          {tasks.length === 0 && <p className="text-xs text-gray-500">No tasks yet.</p>}

          {tasks.map((task) => (
            <div
              key={task.task_id}
              className={`rounded border p-2 ${selectedTaskId === task.task_id ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}
            >
              <button
                onClick={() => setSelectedTaskId(task.task_id)}
                className="w-full text-left"
              >
                <p className="text-xs font-semibold text-gray-900">{task.category}</p>
                <p className="text-[11px] text-gray-600">{task.task_id}</p>
                <p className="text-[11px] text-gray-500">docs: {task.docs_count} | {task.status}</p>
              </button>
              <button
                onClick={() => handleDeleteTask(task.task_id)}
                className="mt-2 w-full rounded border border-red-300 px-2 py-1 text-[11px] text-red-700"
              >
                Delete Task
              </button>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {!selectedTask && (
          <div className="rounded border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-600">
            Select a task to start processing documents.
          </div>
        )}

        {selectedTask && (
          <>
            <section className="rounded border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Task: {selectedTask.task_id}</h3>
                {taskStatus === "done" ? (
                  <button
                    disabled={downloading}
                    className="inline-flex items-center gap-2 rounded bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60"
                    onClick={async () => {
                      setDownloading(true);
                      try {
                        const resp = await fetch(getStandaloneDownloadUrl(selectedTask.task_id));
                        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                        const blob = await resp.blob();
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `${selectedTask.task_id}.zip`;
                        a.click();
                        URL.revokeObjectURL(url);
                      } catch {
                        // allow retry on failure
                      } finally {
                        setDownloading(false);
                      }
                    }}
                  >
                    {downloading && (
                      <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {downloading ? "Downloading..." : "Download Result ZIP"}
                  </button>
                ) : (
                  <span
                    className="rounded bg-gray-400 px-3 py-1.5 text-xs font-medium text-white cursor-not-allowed"
                    title="Processing must complete before downloading"
                  >
                    Download Result ZIP
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Category: <span className="font-semibold">{selectedTask.category}</span> | Status: {taskStatus || selectedTask.status}
              </p>
              {taskError && <p className="mt-2 text-xs text-red-600">{taskError}</p>}
            </section>

            <section className="rounded border border-gray-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-900">Upload and Process</h3>
              <p className="mt-1 text-xs text-gray-600">
                Upload multiple PDF/MD files in one batch. Files are processed sequentially one by one.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.md"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={processLoading}
                className="mt-3 inline-flex items-center gap-1.5 rounded border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60"
              >
                + Add Files
              </button>

              {rows.length > 0 && (
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-xs">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="border border-gray-200 px-2 py-1 text-left">File</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Doc Name</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Type</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Device</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Language</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">API Split</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">LLM</th>
                        <th className="border border-gray-200 px-2 py-1 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, i) => (
                        <tr key={`${row.file.name}-${i}`}>
                          <td className="border border-gray-200 px-2 py-1 max-w-[140px] truncate" title={row.file.name}>{row.file.name}</td>
                          <td className="border border-gray-200 px-2 py-1">
                            <input
                              className="w-full rounded border border-gray-300 px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500"
                              value={row.docName}
                              onChange={(e) => updateRow(i, { docName: e.target.value })}
                              placeholder="doc_name"
                              disabled={processLoading}
                            />
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            <select
                              className="rounded border border-gray-300 px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500"
                              value={row.subtype}
                              onChange={(e) => {
                                const val = e.target.value as UploadRow["subtype"];
                                updateRow(i, {
                                  subtype: val,
                                  language: val === "programming_api" ? row.language || "c" : "",
                                  customSubtype: val === "custom" ? row.customSubtype : "",
                                });
                              }}
                              disabled={processLoading}
                            >
                              <option value="user_manual">user_manual</option>
                              <option value="specifications">specifications</option>
                              <option value="programming_api">programming_api</option>
                              <option value="custom">custom...</option>
                            </select>
                            {row.subtype === "custom" && (
                              <input
                                className="mt-1 w-full rounded border border-gray-300 px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500"
                                value={row.customSubtype}
                                onChange={(e) => updateRow(i, { customSubtype: e.target.value })}
                                placeholder="custom type name"
                                disabled={processLoading}
                              />
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            {(row.subtype === "custom" ? row.customSubtype.trim() : row.subtype) !== "programming_api" ? (
                              <input
                                className="w-full rounded border border-gray-300 px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500"
                                value={row.device}
                                onChange={(e) => updateRow(i, { device: e.target.value })}
                                placeholder="e.g. pxie_4135"
                                disabled={processLoading}
                              />
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            {(row.subtype === "custom" ? row.customSubtype.trim() : row.subtype) === "programming_api" ? (
                              <input
                                className="w-full rounded border border-gray-300 px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500"
                                value={row.language}
                                onChange={(e) =>
                                  updateRow(i, { language: e.target.value })
                                }
                                placeholder="e.g. c, python, c#"
                                disabled={processLoading}
                              />
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            {(row.subtype === "custom" ? row.customSubtype.trim() : row.subtype) === "programming_api" ? (
                              <div className="flex items-center gap-1">
                                <select
                                  className="rounded border border-gray-300 px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500"
                                  value={row.split_mode}
                                  onChange={(e) =>
                                    updateRow(i, { split_mode: e.target.value as UploadRow["split_mode"] })
                                  }
                                  disabled={processLoading}
                                >
                                  <option value="headers">headers</option>
                                  <option value="full">full</option>
                                </select>
                                {row.split_mode === "full" && (
                                  <span className="text-amber-600 text-[10px] font-medium" title="Full-content split sends the entire document to the LLM. This consumes significantly more tokens and costs more.">⚠ High token cost</span>
                                )}
                              </div>
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            <label className="flex items-center gap-1 cursor-pointer" title="Enable LLM optimization">
                              <input
                                type="checkbox"
                                checked={!row.skip_llm}
                                onChange={(e) => updateRow(i, { skip_llm: !e.target.checked })}
                                disabled={processLoading}
                                className="h-3.5 w-3.5 rounded border-gray-300 disabled:opacity-50"
                              />
                              <span className="text-[10px] text-gray-600">{row.skip_llm ? "Off" : "On"}</span>
                            </label>
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            <button
                              onClick={() => removeRow(i)}
                              className="text-red-500 hover:text-red-700 text-xs disabled:opacity-40"
                              title="Remove file"
                              disabled={processLoading}
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="mt-3 flex gap-2">
                <button
                  onClick={handleProcessBatch}
                  disabled={processLoading || rows.length === 0 || taskLoading}
                  className="inline-flex items-center gap-2 rounded bg-blue-600 px-3 py-2 text-xs font-medium text-white disabled:opacity-60"
                >
                  {processLoading && (
                    <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                  {processLoading ? "Processing..." : "Start Processing"}
                </button>
                <button
                  onClick={() => setRows([])}
                  disabled={processLoading || rows.length === 0}
                  className="rounded border border-gray-300 px-3 py-2 text-xs text-gray-700 disabled:opacity-60"
                >
                  Clear Selection
                </button>
              </div>

              {processLog.length > 0 && (
                <div className="mt-3 max-h-44 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-2 font-mono text-[11px] text-gray-700">
                  {processLog.map((line, i) => (
                    <div key={`${line}-${i}`}>{line}</div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded border border-gray-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-900">Processed Docs</h3>
              {taskLoading ? (
                <p className="mt-2 text-xs text-gray-500">Loading docs...</p>
              ) : taskDocs.length === 0 ? (
                <p className="mt-2 text-xs text-gray-500">No docs in this task yet.</p>
              ) : (
                <div className="mt-2 overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-xs">
                    <thead className="bg-gray-100 text-gray-700">
                      <tr>
                        <th className="border border-gray-200 px-2 py-1 text-left">Filename</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Subtype</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Device</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Language</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Description</th>
                        <th className="border border-gray-200 px-2 py-1 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {taskDocs.map((doc) => (
                        <tr key={doc.id}>
                          <td className="border border-gray-200 px-2 py-1">{doc.filename}</td>
                          <td className="border border-gray-200 px-2 py-1">{doc.subtype}</td>
                          <td className="border border-gray-200 px-2 py-1">{doc.skill_entry.device || "-"}</td>
                          <td className="border border-gray-200 px-2 py-1">{doc.language || "-"}</td>
                          <td className="border border-gray-200 px-2 py-1">{doc.skill_entry.description}</td>
                          <td className="border border-gray-200 px-2 py-1 space-x-2">
                            <button
                              onClick={() => openDoc(doc)}
                              className="rounded border border-blue-300 px-2 py-1 text-blue-700"
                            >
                              View / Edit
                            </button>
                            <button
                              onClick={() => handleDeleteDoc(doc)}
                              className="rounded border border-red-300 px-2 py-1 text-red-700"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            <section className="rounded border border-gray-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-900">Generated SKILL.md</h3>
              <textarea
                className="mt-2 h-56 w-full rounded border border-gray-300 p-2 font-mono text-xs"
                readOnly
                value={taskSkillMd}
              />
            </section>
          </>
        )}
      </main>

      {activeDoc && (
        <Modal title={`Edit ${activeDoc.filename}`} onClose={closeDocModal} wide>
          {docModalLoading ? (
            <p className="text-sm text-gray-600">Loading document...</p>
          ) : (
            <div className="space-y-3">
              {docModalError && <p className="text-sm text-red-600">{docModalError}</p>}

              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <label className="text-xs text-gray-700">
                  Subtype
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-xs"
                    value={activeSubtype}
                    onChange={(e) => setActiveSubtype(e.target.value)}
                    placeholder="e.g. user_manual, specifications, programming_api"
                  />
                </label>

                <label className="text-xs text-gray-700">
                  Device
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-xs"
                    value={activeDevice}
                    onChange={(e) => setActiveDevice(e.target.value)}
                    disabled={activeSubtype === "programming_api"}
                    placeholder="e.g. pxie_4135"
                  />
                </label>

                <label className="text-xs text-gray-700">
                  Language
                  <input
                    className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-xs"
                    value={activeLanguage}
                    onChange={(e) => setActiveLanguage(e.target.value)}
                    disabled={activeSubtype !== "programming_api"}
                    placeholder="e.g. c, python, c#"
                  />
                </label>
              </div>

              <label className="block text-xs text-gray-700">
                Description
                <input
                  className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-xs"
                  value={activeDescription}
                  onChange={(e) => setActiveDescription(e.target.value)}
                />
              </label>

              <div className="flex gap-3 min-h-0" style={{ height: "50vh" }}>
                <div className="flex-1 flex flex-col min-w-0">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Editor</p>
                  <textarea
                    ref={editorRef}
                    className="flex-1 w-full rounded border border-gray-300 p-2 font-mono text-xs resize-none"
                    value={activeContent}
                    onChange={(e) => setActiveContent(e.target.value)}
                    onScroll={handleEditorScroll}
                  />
                </div>
                <div className="flex-1 flex flex-col min-w-0">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Preview</p>
                  <div
                    ref={previewRef}
                    className="flex-1 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-3 prose prose-sm max-w-none"
                    onScroll={handlePreviewScroll}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        img: ({ src = "", alt = "" }) => (
                          <img src={normalizeMdImage(selectedTaskId, src)} alt={alt} />
                        ),
                      }}
                    >
                      {activeContent}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={saveDocChanges}
                  disabled={docSaving}
                  className="rounded bg-blue-600 px-3 py-2 text-xs font-medium text-white disabled:opacity-60"
                >
                  {docSaving ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={closeDocModal}
                  className="rounded border border-gray-300 px-3 py-2 text-xs text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
