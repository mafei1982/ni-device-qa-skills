import { useEffect, useRef, useState } from "react";
import {
  Loader2,
  BookOpen,
  Upload,
  Trash2,
  Plus,
  X,
  AlertTriangle,
  Check,
  FileText,
} from "lucide-react";
import {
  getSkills,
  getSkillContent,
  uploadDocSkill,
  deleteSkill,
  processPdfSkill,
  processMdSkill,
  splitApiDoc,
  type Skill,
  type ProcessPdfEvent,
  type SplitDefinition,
} from "../api";
import Modal from "./Modal";

const typeBadgeColors: Record<string, string> = {
  workflow: "bg-purple-100 text-purple-700",
  user_manual: "bg-blue-100 text-blue-700",
  specifications: "bg-teal-100 text-teal-700",
  programming_api: "bg-amber-100 text-amber-700",
};

function badgeLabel(skill: Skill): string {
  if (skill.type === "doc" && skill.subtype) return skill.subtype;
  return skill.type;
}

function badgeColor(skill: Skill): string {
  const key = skill.type === "doc" && skill.subtype ? skill.subtype : skill.type;
  return typeBadgeColors[key] ?? "bg-gray-100 text-gray-600";
}

type ProcessingStep =
  | "idle"
  | "converting"
  | "images"
  | "token_warning"
  | "cleaning"
  | "saving"
  | "saving_raw"
  | "analyzing"
  | "split_preview"
  | "splitting"
  | "done"
  | "error";

const STEP_LABELS: Record<string, string> = {
  converting: "Converting PDF with MinerU…",
  images: "Copying extracted images…",
  cleaning: "Cleaning markdown with LLM…",
  saving: "Saving and registering…",
  saving_raw: "Saving converted API doc…",
  analyzing: "Analyzing API doc structure…",
  splitting: "Splitting API doc…",
  done: "Done!",
};

export default function SkillsRegistry() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Content modal state
  const [modalSkill, setModalSkill] = useState<Skill | null>(null);
  const [modalContent, setModalContent] = useState("");
  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);

  // Upload form state
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [uploadDevice, setUploadDevice] = useState("");
  const [uploadSubtype, setUploadSubtype] = useState<
    "user_manual" | "specifications" | "programming_api"
  >("user_manual");
  const [uploadCategory, setUploadCategory] = useState("");
  const [uploadLanguage, setUploadLanguage] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // PDF processing state
  const [processingStep, setProcessingStep] = useState<ProcessingStep>("idle");
  const [processingMessage, setProcessingMessage] = useState("");
  const [tokenEstimate, setTokenEstimate] = useState<{
    chars: number;
    tokens: number;
    images: number;
  } | null>(null);
  const [splitPreview, setSplitPreview] = useState<{
    sourceSkill: string;
    splits: SplitDefinition[];
  } | null>(null);

  // Delete state
  const [deleting, setDeleting] = useState<string | null>(null);

  const isPdf = uploadFile?.name.toLowerCase().endsWith(".pdf") ?? false;
  const isMd = uploadFile?.name.toLowerCase().endsWith(".md") ?? false;
  const showCleanSplitOption = isMd && uploadSubtype === "programming_api";
  const [wantsCleanSplit, setWantsCleanSplit] = useState(false);

  function fetchSkills() {
    setLoading(true);
    getSkills()
      .then((data) => {
        setSkills(data.skills);
        setError(null);
      })
      .catch((err) =>
        setError(
          err instanceof Error ? err.message : "Failed to load skills."
        )
      )
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchSkills();
  }, []);

  async function handleViewContent(skill: Skill) {
    setModalSkill(skill);
    setModalContent("");
    setModalError(null);
    setModalLoading(true);
    try {
      const data = await getSkillContent(skill.name);
      setModalContent(data.content);
    } catch (err) {
      setModalError(
        err instanceof Error ? err.message : "Failed to load skill content."
      );
    } finally {
      setModalLoading(false);
    }
  }

  function handleCloseModal() {
    setModalSkill(null);
    setModalContent("");
    setModalError(null);
  }

  function resetProcessingState() {
    setProcessingStep("idle");
    setProcessingMessage("");
    setTokenEstimate(null);
    setSplitPreview(null);
    setWantsCleanSplit(false);
  }

  async function handleUpload() {
    if (!uploadFile || !uploadDevice.trim()) return;

    // If it's a PDF, use the processing pipeline
    if (isPdf) {
      await handleProcessPdf();
      return;
    }

    // MD clean+split flow for programming_api
    if (showCleanSplitOption && wantsCleanSplit) {
      await handleProcessMd();
      return;
    }

    // Otherwise, existing MD upload flow
    setUploading(true);
    setUploadError(null);
    try {
      await uploadDocSkill(
        uploadFile,
        uploadDevice.trim(),
        uploadSubtype,
        uploadCategory.trim(),
        uploadSubtype === "programming_api" ? uploadLanguage.trim() : undefined,
      );
      setShowUploadForm(false);
      setUploadDevice("");
      setUploadCategory("");
      setUploadLanguage("");
      setUploadFile(null);
      if (fileRef.current) fileRef.current.value = "";
      fetchSkills();
    } catch (err) {
      setUploadError(
        err instanceof Error ? err.message : "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleProcessPdf() {
    if (!uploadFile || !uploadDevice.trim()) return;
    setUploading(true);
    setUploadError(null);
    resetProcessingState();
    setProcessingStep("converting");

    try {
      await processPdfSkill(
        uploadFile,
        uploadDevice.trim(),
        uploadSubtype,
        uploadCategory.trim(),
        uploadSubtype === "programming_api" ? uploadLanguage.trim() : undefined,
        (event: ProcessPdfEvent) => {
          switch (event.type) {
            case "status":
              setProcessingStep((event.step as ProcessingStep) || "converting");
              setProcessingMessage(event.message || "");
              break;
            case "token_estimate":
              setTokenEstimate({
                chars: event.chars || 0,
                tokens: event.estimated_tokens || 0,
                images: event.images_copied || 0,
              });
              break;
            case "split_preview":
              setProcessingStep("split_preview");
              setSplitPreview({
                sourceSkill: event.source_skill || "",
                splits: event.splits || [],
              });
              setUploading(false);
              break;
            case "done":
              setProcessingStep("done");
              setUploading(false);
              setTimeout(() => {
                setShowUploadForm(false);
                resetProcessingState();
                setUploadDevice("");
                setUploadCategory("");
                setUploadLanguage("");
                setUploadFile(null);
                if (fileRef.current) fileRef.current.value = "";
                fetchSkills();
              }, 1500);
              break;
            case "error":
              setProcessingStep("error");
              setUploadError(event.message || "Processing failed.");
              setUploading(false);
              break;
          }
        },
      );
    } catch (err) {
      setProcessingStep("error");
      setUploadError(
        err instanceof Error ? err.message : "Processing failed."
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleProcessMd() {
    if (!uploadFile || !uploadDevice.trim()) return;
    setUploading(true);
    setUploadError(null);
    resetProcessingState();
    setProcessingStep("cleaning");

    try {
      await processMdSkill(
        uploadFile,
        uploadDevice.trim(),
        "programming_api",
        uploadCategory.trim(),
        uploadLanguage.trim() || undefined,
        (event: ProcessPdfEvent) => {
          switch (event.type) {
            case "status":
              setProcessingStep((event.step as ProcessingStep) || "cleaning");
              setProcessingMessage(event.message || "");
              break;
            case "token_estimate":
              setTokenEstimate({
                chars: event.chars || 0,
                tokens: event.estimated_tokens || 0,
                images: event.images_copied || 0,
              });
              break;
            case "split_preview":
              setProcessingStep("split_preview");
              setSplitPreview({
                sourceSkill: event.source_skill || "",
                splits: event.splits || [],
              });
              setUploading(false);
              break;
            case "done":
              setProcessingStep("done");
              setUploading(false);
              setTimeout(() => {
                setShowUploadForm(false);
                resetProcessingState();
                setUploadDevice("");
                setUploadCategory("");
                setUploadLanguage("");
                setUploadFile(null);
                setWantsCleanSplit(false);
                if (fileRef.current) fileRef.current.value = "";
                fetchSkills();
              }, 1500);
              break;
            case "error":
              setProcessingStep("error");
              setUploadError(event.message || "Processing failed.");
              setUploading(false);
              break;
          }
        },
      );
    } catch (err) {
      setProcessingStep("error");
      setUploadError(
        err instanceof Error ? err.message : "Processing failed."
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleConfirmSplit() {
    if (!splitPreview) return;
    setProcessingStep("splitting");
    setUploading(true);
    try {
      await splitApiDoc(
        splitPreview.sourceSkill,
        splitPreview.splits,
        uploadDevice.trim(),
        uploadCategory.trim(),
        uploadLanguage.trim(),
      );
      setProcessingStep("done");
      setTimeout(() => {
        setShowUploadForm(false);
        resetProcessingState();
        setUploadDevice("");
        setUploadCategory("");
        setUploadLanguage("");
        setUploadFile(null);
        if (fileRef.current) fileRef.current.value = "";
        fetchSkills();
      }, 1500);
    } catch (err) {
      setProcessingStep("error");
      setUploadError(
        err instanceof Error ? err.message : "Split failed."
      );
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(skill: Skill) {
    if (
      !window.confirm(
        `Delete doc skill "${skill.name}"? This will remove the file and registry entry.`
      )
    )
      return;
    setDeleting(skill.name);
    try {
      await deleteSkill(skill.name);
      fetchSkills();
    } catch (err) {
      alert(
        err instanceof Error ? err.message : "Delete failed."
      );
    } finally {
      setDeleting(null);
    }
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-800">
          Skills Registry
        </h2>
        <button
          onClick={() => {
            setShowUploadForm(!showUploadForm);
            if (showUploadForm) resetProcessingState();
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
        >
          {showUploadForm ? (
            <>
              <X size={13} /> Cancel
            </>
          ) : (
            <>
              <Plus size={13} /> Upload Doc
            </>
          )}
        </button>
      </div>

      {/* Upload Form */}
      {showUploadForm && (
        <div className="mb-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Device Name
              </label>
              <input
                type="text"
                placeholder="e.g. PXIe-4135"
                value={uploadDevice}
                onChange={(e) => setUploadDevice(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Document Type
              </label>
              <select
                value={uploadSubtype}
                onChange={(e) =>
                  setUploadSubtype(
                    e.target.value as "user_manual" | "specifications" | "programming_api"
                  )
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors bg-white"
              >
                <option value="user_manual">User Manual</option>
                <option value="specifications">Specifications</option>
                <option value="programming_api">Programming API</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Category (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. dcpower"
                value={uploadCategory}
                onChange={(e) => setUploadCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
              />
              <p className="text-xs text-gray-400 mt-1">
                Device category groups related devices (e.g. all SMUs belong to "dcpower")
              </p>
            </div>
            {uploadSubtype === "programming_api" && (
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Programming Language
                </label>
                <input
                  type="text"
                  placeholder='e.g. C, Python, LabVIEW'
                  value={uploadLanguage}
                  onChange={(e) => setUploadLanguage(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Document File
              </label>
              <input
                ref={fileRef}
                type="file"
                accept=".md,.pdf"
                onChange={(e) => {
                  setUploadFile(e.target.files?.[0] ?? null);
                  resetProcessingState();
                }}
                className="w-full text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {isPdf && (
                <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                  <FileText size={12} />
                  PDF detected — will be processed with MinerU + LLM cleanup
                </p>
              )}
              {showCleanSplitOption && (
                <label className="flex items-center gap-2 mt-2 text-xs text-blue-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wantsCleanSplit}
                    onChange={(e) => setWantsCleanSplit(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Clean &amp; Split API doc (convert HTML tables, remove TOC index lines, then split with LLM)
                </label>
              )}
            </div>

            {/* Token cost warning */}
            {(isPdf || (showCleanSplitOption && wantsCleanSplit)) && tokenEstimate && processingStep !== "done" && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800">
                  <p className="font-medium mb-1">Token Cost Estimate</p>
                  <p>
                    Document size: <strong>{(tokenEstimate.chars / 1024).toFixed(1)} KB</strong>
                    {" · "}
                    Est. tokens: <strong>~{tokenEstimate.tokens.toLocaleString()}</strong>
                    {tokenEstimate.images > 0 && (
                      <>
                        {" · "}
                        Images: <strong>{tokenEstimate.images}</strong>
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-amber-600">
                    The entire document will be sent to the LLM for cleanup.
                  </p>
                </div>
              </div>
            )}

            {/* Processing progress */}
            {processingStep !== "idle" && processingStep !== "split_preview" && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm">
                  {processingStep === "done" ? (
                    <Check size={16} className="text-green-500" />
                  ) : processingStep === "error" ? (
                    <AlertTriangle size={16} className="text-red-500" />
                  ) : (
                    <Loader2 size={16} className="animate-spin text-blue-500" />
                  )}
                  <span className={
                    processingStep === "done"
                      ? "text-green-700 font-medium"
                      : processingStep === "error"
                        ? "text-red-700"
                        : "text-gray-700"
                  }>
                    {processingMessage || STEP_LABELS[processingStep] || "Processing…"}
                  </span>
                </div>
              </div>
            )}

            {/* Split preview modal */}
            {processingStep === "split_preview" && splitPreview && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">
                  Suggested API Doc Split
                </h4>
                <p className="text-xs text-blue-600 mb-3">
                  The LLM suggests splitting into {splitPreview.splits.length} files:
                </p>
                <div className="max-h-48 overflow-y-auto space-y-1.5 mb-3">
                  {splitPreview.splits.map((split, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-md px-3 py-2 border border-blue-100 text-xs"
                    >
                      <span className="font-mono text-blue-700">{split.filename}</span>
                      <span className="text-gray-500 ml-2">— {split.title}</span>
                      <div className="text-gray-400 mt-0.5">
                        Starts at: {split.start_heading}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleConfirmSplit}
                    disabled={uploading}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
                  >
                    {uploading ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <Check size={14} />
                    )}
                    Confirm Split
                  </button>
                  <button
                    onClick={() => {
                      resetProcessingState();
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {uploadError && (
              <div className="text-xs text-red-600">{uploadError}</div>
            )}

            {processingStep === "idle" && (
              <button
                onClick={handleUpload}
                disabled={uploading || !uploadFile || !uploadDevice.trim()}
                className="inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
              >
                {uploading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Upload size={14} />
                )}
                {isPdf
                  ? uploading
                    ? "Processing…"
                    : "Process & Upload"
                  : showCleanSplitOption && wantsCleanSplit
                    ? uploading
                      ? "Processing…"
                      : "Clean & Split"
                    : uploading
                      ? "Uploading…"
                      : "Upload"}
              </button>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Loader2 size={16} className="animate-spin" />
          Loading skills…
        </div>
      )}

      {error && (
        <div className="text-sm text-red-600 bg-red-50 rounded-lg p-3 border border-red-200">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-gray-800 font-mono">
                    {skill.name}
                  </span>
                  {skill.device && (
                    <span className="text-xs text-gray-500">
                      {skill.device}
                      {skill.category && skill.category !== skill.device && (
                        <span className="text-gray-400"> · {skill.category}</span>
                      )}
                      {skill.language && (
                        <span className="text-gray-400"> · {skill.language}</span>
                      )}
                    </span>
                  )}
                </div>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${badgeColor(
                    skill
                  )}`}
                >
                  {badgeLabel(skill)}
                </span>
              </div>
              <p className="text-sm text-gray-600 flex-1">
                {skill.description}
              </p>
              <div className="flex items-center gap-3 mt-1">
                <button
                  onClick={() => handleViewContent(skill)}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <BookOpen size={13} />
                  View Content
                </button>
                {skill.type === "doc" && (
                  <button
                    onClick={() => handleDelete(skill)}
                    disabled={deleting === skill.name}
                    className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 font-medium transition-colors disabled:opacity-50"
                  >
                    {deleting === skill.name ? (
                      <Loader2 size={13} className="animate-spin" />
                    ) : (
                      <Trash2 size={13} />
                    )}
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {modalSkill && (
        <Modal title={`Skill: ${modalSkill.name}`} onClose={handleCloseModal}>
          {modalLoading && (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Loader2 size={16} className="animate-spin" />
              Loading…
            </div>
          )}
          {modalError && (
            <div className="text-sm text-red-600">{modalError}</div>
          )}
          {!modalLoading && !modalError && (
            <pre className="whitespace-pre-wrap break-words font-mono text-xs text-gray-800 leading-relaxed bg-gray-50 rounded-lg p-4 border border-gray-200">
              {modalContent}
            </pre>
          )}
        </Modal>
      )}
    </section>
  );
}
