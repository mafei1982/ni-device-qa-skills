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
  stopStandaloneTask,
  updateStandaloneDocContent,
  updateStandaloneDocMeta,
  updateStandaloneSkillMd,
  type StandaloneDocRecord,
  type StandaloneProcessConfig,
  type StandaloneProcessEvent,
  type StandaloneTaskSummary,
} from "../api";
import Modal from "./Modal";

type UploadRow = {
  file: File;
  docName: string;
  docNameEdited: boolean;
  subtype: "user_manual" | "specifications" | "programming_api" | "custom";
  customSubtype: string;
  device: string;
  language: string;
  split_mode: "headers" | "full";
  skip_llm: boolean;
};

function slugify(value: string): string {
  return value.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toLowerCase();
}

function computeDocName(device: string, subtype: string, language: string): string {
  const dev = slugify(device);
  const sub = slugify(subtype);
  if (subtype === "programming_api" && language) {
    const lang = slugify(language);
    return [dev, sub, lang].filter(Boolean).join("_");
  }
  return [dev, sub].filter(Boolean).join("_");
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

type ProcessJobStatus = "pending" | "processing" | "done" | "error" | "stopped";

type ProcessJob = {
  id: string;
  taskId: string;
  category: string;
  files: File[];
  configs: StandaloneProcessConfig[];
  status: ProcessJobStatus;
  log: string[];
  abortController: AbortController | null;
};

function getJobCardClasses(status: ProcessJobStatus): string {
  switch (status) {
    case "pending": return "border-amber-300 bg-amber-50";
    case "processing": return "border-blue-300 bg-blue-50";
    case "done": return "border-green-300 bg-green-50";
    case "error": return "border-red-300 bg-red-50";
    case "stopped": return "border-gray-300 bg-gray-100";
  }
}

function getStatusBadgeClasses(status: ProcessJobStatus): string {
  switch (status) {
    case "pending": return "bg-amber-100 text-amber-800";
    case "processing": return "bg-blue-100 text-blue-800";
    case "done": return "bg-green-100 text-green-800";
    case "error": return "bg-red-100 text-red-800";
    case "stopped": return "bg-gray-200 text-gray-700";
  }
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
  const [jobQueue, setJobQueue] = useState<ProcessJob[]>([]);
  const runningJobRef = useRef<string | null>(null);
  const selectedTaskIdRef = useRef(selectedTaskId);
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

  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [skillEditContent, setSkillEditContent] = useState("");
  const [skillSaving, setSkillSaving] = useState(false);
  const [skillModalError, setSkillModalError] = useState<string | null>(null);

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const syncingRef = useRef<"editor" | "preview" | null>(null);

  const skillEditorRef = useRef<HTMLTextAreaElement>(null);
  const skillPreviewRef = useRef<HTMLDivElement>(null);
  const skillSyncingRef = useRef<"editor" | "preview" | null>(null);

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

  const handleSkillEditorScroll = useCallback(() => {
    if (skillSyncingRef.current === "preview") return;
    skillSyncingRef.current = "editor";
    const editor = skillEditorRef.current;
    const preview = skillPreviewRef.current;
    if (editor && preview) {
      const ratio = editor.scrollTop / (editor.scrollHeight - editor.clientHeight || 1);
      preview.scrollTop = ratio * (preview.scrollHeight - preview.clientHeight || 1);
    }
    requestAnimationFrame(() => { skillSyncingRef.current = null; });
  }, []);

  const handleSkillPreviewScroll = useCallback(() => {
    if (skillSyncingRef.current === "editor") return;
    skillSyncingRef.current = "preview";
    const editor = skillEditorRef.current;
    const preview = skillPreviewRef.current;
    if (editor && preview) {
      const ratio = preview.scrollTop / (preview.scrollHeight - preview.clientHeight || 1);
      editor.scrollTop = ratio * (editor.scrollHeight - editor.clientHeight || 1);
    }
    requestAnimationFrame(() => { skillSyncingRef.current = null; });
  }, []);

  const selectedTask = useMemo(
    () => tasks.find((t) => t.task_id === selectedTaskId) ?? null,
    [tasks, selectedTaskId],
  );

  const duplicateDocNames = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of rows) {
      const name = row.docName.trim().toLowerCase();
      if (name) counts.set(name, (counts.get(name) || 0) + 1);
    }
    const dupes = new Set<string>();
    for (const [name, count] of counts) {
      if (count > 1) dupes.add(name);
    }
    return dupes;
  }, [rows]);

  const hasDuplicateDocNames = duplicateDocNames.size > 0;

  const isSelectedTaskProcessing = useMemo(
    () => jobQueue.some((j) => j.taskId === selectedTaskId && (j.status === "processing" || j.status === "pending")),
    [jobQueue, selectedTaskId],
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

  useEffect(() => {
    selectedTaskIdRef.current = selectedTaskId;
  }, [selectedTaskId]);

  // Queue runner: start the next pending job when no job is running
  useEffect(() => {
    if (runningJobRef.current) return;
    const nextJob = jobQueue.find((j) => j.status === "pending");
    if (!nextJob) return;
    runningJobRef.current = nextJob.id;
    runJob(nextJob);
  }, [jobQueue]);

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
    const defaultDevice = selectedTask?.category || "";
    const defaultSubtype = "user_manual";
    const newRows: UploadRow[] = Array.from(files).map((file) => ({
      file,
      docName: computeDocName(defaultDevice, defaultSubtype, ""),
      docNameEdited: false,
      subtype: defaultSubtype,
      customSubtype: "",
      device: defaultDevice,
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
    setRows((prev) => prev.map((row, i) => {
      if (i !== index) return row;
      const updated = { ...row, ...patch };
      // Auto-recompute doc name if user hasn't manually edited it
      if (!updated.docNameEdited && !('docName' in patch)) {
        const effectiveSub = updated.subtype === "custom" ? updated.customSubtype.trim() : updated.subtype;
        updated.docName = computeDocName(updated.device, effectiveSub, updated.language);
      }
      return updated;
    }));
  }

  function handleAddToQueue() {
    if (!selectedTaskId || rows.length === 0) return;

    const validationErrors: string[] = [];
    for (const row of rows) {
      if (row.subtype === "custom" && !row.customSubtype.trim()) {
        validationErrors.push(`${row.file.name} requires a custom type name.`);
      }
      const effectiveSubtype = row.subtype === "custom" ? row.customSubtype.trim() : row.subtype;
      if (effectiveSubtype !== "programming_api" && !row.device.trim()) {
        validationErrors.push(`${row.file.name} requires a device for ${effectiveSubtype}.`);
      }
      if (effectiveSubtype === "programming_api" && !row.language) {
        validationErrors.push(`${row.file.name} requires API language.`);
      }
    }
    if (validationErrors.length > 0) {
      const jobId = `job_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      setJobQueue((prev) => [
        ...prev,
        {
          id: jobId,
          taskId: selectedTaskId,
          category: selectedTask?.category || "",
          files: [],
          configs: [],
          status: "error",
          log: validationErrors.map((e) => `Error: ${e}`),
          abortController: null,
        },
      ]);
      return;
    }

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

    const jobId = `job_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    setJobQueue((prev) => [
      ...prev,
      {
        id: jobId,
        taskId: selectedTaskId,
        category: selectedTask?.category || "",
        files,
        configs: cfg,
        status: "pending",
        log: [`Queued ${files.length} file(s) for task ${selectedTaskId}.`],
        abortController: null,
      },
    ]);
    setRows([]);
  }

  async function runJob(job: ProcessJob) {
    const controller = new AbortController();

    setJobQueue((prev) =>
      prev.map((j) =>
        j.id === job.id
          ? { ...j, status: "processing" as const, abortController: controller }
          : j,
      ),
    );

    try {
      await processStandaloneTaskFiles(
        job.taskId,
        job.files,
        job.configs,
        (event: StandaloneProcessEvent) => {
          setJobQueue((prev) =>
            prev.map((j) => {
              if (j.id !== job.id) return j;
              let logLine = "";
              if (event.type === "status") {
                logLine = `[${event.file_index ?? "?"}/${event.file_total ?? "?"}] ${event.filename ?? ""} - ${event.message ?? event.step ?? ""}`;
              } else if (event.type === "token_estimate") {
                logLine = `[${event.file_index ?? "?"}] token estimate: ${event.estimated_tokens ?? 0} (${event.chars ?? 0} chars)`;
              } else if (event.type === "file_done") {
                logLine = `${event.filename ?? "file"} completed.`;
              } else if (event.type === "error") {
                logLine = `Error: ${event.message ?? "processing failed"}`;
              } else if (event.type === "done") {
                logLine = "Batch processing completed.";
              }
              const newStatus =
                event.type === "done"
                  ? ("done" as const)
                  : event.type === "error"
                    ? ("error" as const)
                    : j.status;
              return {
                ...j,
                status: newStatus,
                log: logLine ? [...j.log, logLine] : j.log,
              };
            }),
          );
        },
        controller.signal,
      );

      // Ensure status is "done" if SSE ended without explicit done event
      setJobQueue((prev) =>
        prev.map((j) =>
          j.id === job.id && j.status === "processing"
            ? { ...j, status: "done" as const }
            : j,
        ),
      );
    } catch (err) {
      if (controller.signal.aborted) {
        setJobQueue((prev) =>
          prev.map((j) =>
            j.id === job.id
              ? {
                  ...j,
                  status: "stopped" as const,
                  log: [...j.log, "Processing stopped by user."],
                  abortController: null,
                }
              : j,
          ),
        );
        try {
          await stopStandaloneTask(job.taskId);
        } catch {
          // best-effort backend status reset
        }
      } else {
        setJobQueue((prev) =>
          prev.map((j) =>
            j.id === job.id
              ? {
                  ...j,
                  status: "error" as const,
                  log: [
                    ...j.log,
                    err instanceof Error ? err.message : "Processing failed.",
                  ],
                }
              : j,
          ),
        );
      }
    } finally {
      runningJobRef.current = null;
      await refreshTasks();
      if (selectedTaskIdRef.current === job.taskId) {
        await refreshTaskDetail(job.taskId);
      }
    }
  }

  function handleStopJob(jobId: string) {
    setJobQueue((prev) =>
      prev.map((j) => {
        if (j.id !== jobId) return j;
        if (j.status === "pending") {
          return {
            ...j,
            status: "stopped" as const,
            log: [...j.log, "Cancelled before processing."],
          };
        }
        if (j.status === "processing" && j.abortController) {
          j.abortController.abort();
        }
        return j;
      }),
    );
  }

  function handleRemoveJob(jobId: string) {
    setJobQueue((prev) => prev.filter((j) => j.id !== jobId));
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
    <div className="flex h-full min-h-0 bg-[#F7F8FA]">
      <aside className="w-64 border-r border-gray-200 bg-white p-3 overflow-y-auto">
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
            className="w-full rounded bg-ni-600 px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
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
              className={`rounded border p-2 ${selectedTaskId === task.task_id ? "border-ni-500 bg-ni-50" : "border-gray-200 bg-white"}`}
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
                    className="inline-flex items-center gap-2 rounded bg-ni-600 px-3 py-1.5 text-xs font-medium text-white disabled:opacity-60"
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
                disabled={isSelectedTaskProcessing}
                className="mt-3 inline-flex items-center gap-1.5 rounded border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60"
              >
                + Add Files
              </button>
              {isSelectedTaskProcessing && (
                <p className="mt-1 text-[11px] text-amber-600">Upload disabled while task is processing.</p>
              )}

              {rows.length > 0 && (
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-xs">
                    <thead className="bg-gray-700 text-gray-100">
                      <tr>
                        <th className="border border-gray-600 px-2 py-1 text-left">File</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Doc Name</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Type</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Device</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Language</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">API Split</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">LLM</th>
                        <th className="border border-gray-600 px-2 py-1 text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, i) => (
                        <tr key={`${row.file.name}-${i}`}>
                          <td className="border border-gray-200 px-2 py-1 max-w-[140px] truncate" title={row.file.name}>{row.file.name}</td>
                          <td className="border border-gray-200 px-2 py-1">
                            <input
                              className={`w-full rounded border px-2 py-1 disabled:bg-gray-100 disabled:text-gray-500 ${
                                duplicateDocNames.has(row.docName.trim().toLowerCase())
                                  ? "border-red-500 bg-red-50"
                                  : "border-gray-300"
                              }`}
                              value={row.docName}
                              onChange={(e) => updateRow(i, { docName: e.target.value, docNameEdited: true })}
                              placeholder="doc_name"
                            />
                            {duplicateDocNames.has(row.docName.trim().toLowerCase()) && (
                              <p className="text-[10px] text-red-600 mt-0.5">Duplicate name</p>
                            )}
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
                            >
                              <option value="user_manual">user_manual</option>
                              <option value="specifications">specifications</option>
                              <option value="programming_api">programming_api</option>
                              <option value="custom">custom...</option>
                            </select>
                            {row.subtype === "custom" && (
                              <input
                                className="mt-1 w-full rounded border border-gray-300 px-2 py-1"
                                value={row.customSubtype}
                                onChange={(e) => updateRow(i, { customSubtype: e.target.value })}
                                placeholder="custom type name"
                              />
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            {(row.subtype === "custom" ? row.customSubtype.trim() : row.subtype) !== "programming_api" ? (
                              <input
                                className="w-full rounded border border-gray-300 px-2 py-1"
                                value={row.device}
                                onChange={(e) => updateRow(i, { device: e.target.value })}
                                placeholder="e.g. pxie_4135"
                              />
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            {(row.subtype === "custom" ? row.customSubtype.trim() : row.subtype) === "programming_api" ? (
                              <input
                                className="w-full rounded border border-gray-300 px-2 py-1"
                                value={row.language}
                                onChange={(e) =>
                                  updateRow(i, { language: e.target.value })
                                }
                                placeholder="e.g. c, python, c#"
                              />
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            {(row.subtype === "custom" ? row.customSubtype.trim() : row.subtype) === "programming_api" ? (
                              <div className="flex items-center gap-1">
                                <select
                                  className="rounded border border-gray-300 px-2 py-1"
                                  value={row.split_mode}
                                  onChange={(e) =>
                                    updateRow(i, { split_mode: e.target.value as UploadRow["split_mode"] })
                                  }
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
                                className="h-3.5 w-3.5 rounded border-gray-300"
                              />
                              <span className="text-[10px] text-gray-600">{row.skip_llm ? "Off" : "On"}</span>
                            </label>
                          </td>
                          <td className="border border-gray-200 px-2 py-1">
                            <button
                              onClick={() => removeRow(i)}
                              className="text-red-500 hover:text-red-700 text-xs"
                              title="Remove file"
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
                  onClick={handleAddToQueue}
                  disabled={rows.length === 0 || taskLoading || hasDuplicateDocNames || isSelectedTaskProcessing}
                  className="inline-flex items-center gap-2 rounded bg-ni-600 px-3 py-2 text-xs font-medium text-white disabled:opacity-60"
                >
                  {jobQueue.some((j) => j.status === "processing" || j.status === "pending")
                    ? "Add to Queue"
                    : "Start Processing"}
                </button>
                {hasDuplicateDocNames && (
                  <span className="self-center text-xs text-red-600">Duplicate doc names found. Each name must be unique.</span>
                )}
                <button
                  onClick={() => setRows([])}
                  disabled={rows.length === 0}
                  className="rounded border border-gray-300 px-3 py-2 text-xs text-gray-700 disabled:opacity-60"
                >
                  Clear Selection
                </button>
              </div>
            </section>

            {jobQueue.filter((j) => j.taskId === selectedTaskId).length > 0 && (
              <section className="rounded border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">Processing Queue</h3>
                  {jobQueue.some((j) => j.taskId === selectedTaskId && (j.status === "done" || j.status === "error" || j.status === "stopped")) && (
                    <button
                      onClick={() =>
                        setJobQueue((prev) =>
                          prev.filter((j) => j.taskId !== selectedTaskId || j.status === "pending" || j.status === "processing"),
                        )
                      }
                      className="text-[11px] text-gray-500 hover:text-gray-700"
                    >
                      Clear finished
                    </button>
                  )}
                </div>
                <div className="mt-2 space-y-2">
                  {jobQueue.filter((j) => j.taskId === selectedTaskId).map((job) => (
                    <div
                      key={job.id}
                      className={`rounded border p-3 ${getJobCardClasses(job.status)}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {job.status === "processing" && (
                            <svg className="h-3.5 w-3.5 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                          )}
                          <span className="text-xs font-semibold text-gray-900">
                            {job.category}
                          </span>
                          <span className="text-[11px] text-gray-600">
                            {job.files.length} file(s)
                          </span>
                          <span
                            className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-medium ${getStatusBadgeClasses(job.status)}`}
                          >
                            {job.status}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {(job.status === "pending" || job.status === "processing") && (
                            <button
                              onClick={() => handleStopJob(job.id)}
                              className="rounded border border-red-300 bg-white px-2 py-1 text-[11px] font-medium text-red-700 hover:bg-red-50"
                            >
                              Stop
                            </button>
                          )}
                          {(job.status === "done" || job.status === "error" || job.status === "stopped") && (
                            <button
                              onClick={() => handleRemoveJob(job.id)}
                              className="rounded border border-gray-300 bg-white px-2 py-1 text-[11px] text-gray-600 hover:bg-gray-50"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                      {job.log.length > 0 && (job.status === "processing" || job.status === "error") && (
                        <div className="mt-2 max-h-32 overflow-y-auto rounded border border-gray-200 bg-white/60 p-1.5 font-mono text-[11px] text-gray-700">
                          {job.log.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded border border-gray-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-900">Processed Docs</h3>
              {isSelectedTaskProcessing && (
                <p className="mt-1 text-[11px] text-amber-600">Task is processing — docs are read-only.</p>
              )}
              {taskLoading ? (
                <p className="mt-2 text-xs text-gray-500">Loading docs...</p>
              ) : taskDocs.length === 0 ? (
                <p className="mt-2 text-xs text-gray-500">No docs in this task yet.</p>
              ) : (
                <div className="mt-2 overflow-x-auto">
                  <table className="min-w-full border border-gray-200 text-xs">
                    <thead className="bg-gray-700 text-gray-100">
                      <tr>
                        <th className="border border-gray-600 px-2 py-1 text-left">Filename</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Subtype</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Device</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Language</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Description</th>
                        <th className="border border-gray-600 px-2 py-1 text-left">Actions</th>
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
                              disabled={isSelectedTaskProcessing}
                              className="rounded border border-ni-300 px-2 py-1 text-ni-700 disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              {isSelectedTaskProcessing ? "View" : "View / Edit"}
                            </button>
                            <button
                              onClick={() => handleDeleteDoc(doc)}
                              disabled={isSelectedTaskProcessing}
                              className="rounded border border-red-300 px-2 py-1 text-red-700 disabled:opacity-40 disabled:cursor-not-allowed"
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
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Generated SKILL.md</h3>
                <button
                  onClick={() => {
                    setSkillEditContent(taskSkillMd);
                    setSkillModalError(null);
                    setSkillModalOpen(true);
                  }}
                  disabled={!taskSkillMd}
                  className="rounded border border-ni-300 px-3 py-1.5 text-xs font-medium text-ni-700 disabled:opacity-60"
                >
                  View / Edit
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                {taskSkillMd ? `${taskSkillMd.length} characters` : "No SKILL.md generated yet."}
              </p>
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
                  className="rounded bg-ni-600 px-3 py-2 text-xs font-medium text-white disabled:opacity-60"
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

      {skillModalOpen && (
        <Modal title="Edit SKILL.md" onClose={() => setSkillModalOpen(false)} wide>
          <div className="space-y-3">
            {skillModalError && <p className="text-sm text-red-600">{skillModalError}</p>}

            <div className="flex gap-3 min-h-0" style={{ height: "60vh" }}>
              <div className="flex-1 flex flex-col min-w-0">
                <p className="text-xs font-semibold text-gray-700 mb-1">Editor</p>
                <textarea
                  ref={skillEditorRef}
                  className="flex-1 w-full rounded border border-gray-300 p-2 font-mono text-xs resize-none"
                  value={skillEditContent}
                  onChange={(e) => setSkillEditContent(e.target.value)}
                  onScroll={handleSkillEditorScroll}
                />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <p className="text-xs font-semibold text-gray-700 mb-1">Preview</p>
                <div
                  ref={skillPreviewRef}
                  className="flex-1 overflow-y-auto rounded border border-gray-200 bg-gray-50 p-3 prose prose-sm max-w-none"
                  onScroll={handleSkillPreviewScroll}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {skillEditContent}
                  </ReactMarkdown>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={async () => {
                  setSkillSaving(true);
                  setSkillModalError(null);
                  try {
                    await updateStandaloneSkillMd(selectedTaskId, skillEditContent);
                    setTaskSkillMd(skillEditContent);
                    setSkillModalOpen(false);
                  } catch (err) {
                    setSkillModalError(err instanceof Error ? err.message : "Failed to save SKILL.md.");
                  } finally {
                    setSkillSaving(false);
                  }
                }}
                disabled={skillSaving}
                className="rounded bg-ni-600 px-3 py-2 text-xs font-medium text-white disabled:opacity-60"
              >
                {skillSaving ? "Saving..." : "Save"}
              </button>
              <button
                onClick={() => setSkillModalOpen(false)}
                className="rounded border border-gray-300 px-3 py-2 text-xs text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
