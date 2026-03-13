import axios from "axios";

const BASE_URL = `http://${window.location.hostname}:8000`;

export interface ToolCall {
  id: string;
  type: string;
  function: { name: string; arguments: string };
}

export interface Message {
  role: "user" | "assistant" | "tool";
  content: string | null;
  tool_calls?: ToolCall[];
  tool_call_id?: string;
}

export interface ChatResponse {
  response: string;
  messages: Message[];
}

export interface ModelInfo {
  id: string;
  name: string;
}

export interface ModelsResponse {
  models: ModelInfo[];
  default: string;
}

export interface Skill {
  name: string;
  type: string;
  description: string;
  subtype?: string;
  device?: string;
  category?: string;
  language?: string;
}

export interface SplitDefinition {
  filename: string;
  title: string;
  start_heading: string;
  description?: string;
}

export interface ProcessPdfEvent {
  type: "status" | "token_estimate" | "split_preview" | "done" | "error";
  step?: string;
  message?: string;
  percent?: number;
  chars?: number;
  estimated_tokens?: number;
  images_copied?: number;
  skills?: Skill[];
  source_skill?: string;
  splits?: SplitDefinition[];
}

export interface SkillsResponse {
  skills: Skill[];
}

export interface SkillContentResponse {
  name: string;
  content: string;
}

export async function getSkills(): Promise<SkillsResponse> {
  const res = await axios.get<SkillsResponse>(`${BASE_URL}/api/skills`);
  return res.data;
}

export async function getSkillContent(
  skillName: string
): Promise<SkillContentResponse> {
  const res = await axios.get<SkillContentResponse>(
    `${BASE_URL}/api/skills/${encodeURIComponent(skillName)}/content`
  );
  return res.data;
}

export async function uploadDocSkill(
  file: File,
  device: string,
  subtype: "user_manual" | "specifications" | "programming_api",
  category: string,
  language?: string,
): Promise<Skill> {
  const form = new FormData();
  form.append("file", file);
  form.append("device", device);
  form.append("subtype", subtype);
  form.append("category", category);
  if (language) form.append("language", language);
  const res = await axios.post<Skill>(`${BASE_URL}/api/skills/upload`, form);
  return res.data;
}

export async function updateSkillContent(
  skillName: string,
  content: string
): Promise<{ name: string; updated: boolean }> {
  const res = await axios.put<{ name: string; updated: boolean }>(
    `${BASE_URL}/api/skills/${encodeURIComponent(skillName)}/content`,
    { content }
  );
  return res.data;
}

export async function updateSkillDescription(
  skillName: string,
  description: string
): Promise<Skill> {
  const res = await axios.patch<Skill>(
    `${BASE_URL}/api/skills/${encodeURIComponent(skillName)}`,
    { description }
  );
  return res.data;
}

export async function deleteSkill(
  skillName: string
): Promise<{ deleted: string }> {
  const res = await axios.delete<{ deleted: string }>(
    `${BASE_URL}/api/skills/${encodeURIComponent(skillName)}`
  );
  return res.data;
}

export async function deleteSkillsBatch(
  names: string[]
): Promise<{ deleted: string[]; skipped: { name: string; reason: string }[] }> {
  const res = await axios.post<{
    deleted: string[];
    skipped: { name: string; reason: string }[];
  }>(`${BASE_URL}/api/skills/delete-batch`, { names });
  return res.data;
}

export async function sendChat(messages: Message[], model?: string): Promise<ChatResponse> {
  const res = await axios.post<ChatResponse>(`${BASE_URL}/api/chat`, {
    messages,
    model: model || undefined,
  });
  return res.data;
}

/**
 * Stream-based chat that delivers tokens incrementally via SSE.
 * Falls back to a thrown error if the stream closes without a "done" event.
 * Accepts an optional AbortSignal for cancellation (e.g. on component unmount).
 */
export async function sendChatStream(
  messages: Message[],
  model: string | undefined,
  onToken: (token: string) => void,
  onStatus?: (status: string) => void,
  signal?: AbortSignal,
): Promise<ChatResponse> {
  const res = await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, model: model || undefined }),
    signal,
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let result: ChatResponse | null = null;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // SSE events are separated by double newlines
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";

      for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;

        try {
          const data = JSON.parse(trimmed.substring(6));
          if (data.type === "token") {
            onToken(data.content);
          } else if (data.type === "status" && onStatus) {
            onStatus(data.content);
          } else if (data.type === "done") {
            result = { response: "", messages: data.messages };
          }
        } catch {
          // skip malformed events
        }
      }
    }
  } finally {
    reader.releaseLock();
  }

  if (!result) {
    throw new Error("Stream ended without completion event");
  }

  return result;
}

/**
 * Process a PDF upload: MinerU conversion + LLM cleanup + registration.
 * Returns progress events via SSE.
 */
export async function processPdfSkill(
  file: File,
  device: string,
  subtype: "user_manual" | "specifications" | "programming_api",
  category: string,
  language: string | undefined,
  onEvent: (event: ProcessPdfEvent) => void,
  signal?: AbortSignal,
  llmSplit?: boolean,
): Promise<void> {
  const form = new FormData();
  form.append("file", file);
  form.append("device", device);
  form.append("subtype", subtype);
  form.append("category", category);
  if (language) form.append("language", language);
  if (llmSplit) form.append("llm_split", "true");

  const res = await fetch(`${BASE_URL}/api/skills/process-pdf`, {
    method: "POST",
    body: form,
    signal,
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";

      for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        try {
          const data: ProcessPdfEvent = JSON.parse(trimmed.substring(6));
          onEvent(data);
        } catch {
          // skip malformed
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Process an MD API doc upload: clean (HTML tables, TOC, images) + split analysis.
 * Returns progress events via SSE (same shape as processPdfSkill).
 */
export async function processMdSkill(
  file: File,
  device: string,
  subtype: "programming_api",
  category: string,
  language: string | undefined,
  onEvent: (event: ProcessPdfEvent) => void,
  signal?: AbortSignal,
  llmSplit?: boolean,
): Promise<void> {
  const form = new FormData();
  form.append("file", file);
  form.append("device", device);
  form.append("subtype", subtype);
  form.append("category", category);
  if (language) form.append("language", language);
  if (llmSplit) form.append("llm_split", "true");

  const res = await fetch(`${BASE_URL}/api/skills/process-md`, {
    method: "POST",
    body: form,
    signal,
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";

      for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        try {
          const data: ProcessPdfEvent = JSON.parse(trimmed.substring(6));
          onEvent(data);
        } catch {
          // skip malformed
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

/**
 * Execute a confirmed API doc split.
 */
export async function splitApiDoc(
  sourceSkill: string,
  splits: SplitDefinition[],
  device: string,
  category: string,
  language: string,
): Promise<{ created: Skill[] }> {
  const res = await axios.post<{ created: Skill[] }>(
    `${BASE_URL}/api/skills/split-api`,
    { source_skill: sourceSkill, splits, device, category, language },
  );
  return res.data;
}

export async function getModels(): Promise<ModelsResponse> {
  const res = await axios.get<ModelsResponse>(`${BASE_URL}/api/models`);
  return res.data;
}

export interface StandaloneTaskSummary {
  task_id: string;
  category: string;
  created_at: string;
  updated_at: string;
  status: string;
  docs_count: number;
}

export interface StandaloneDocRecord {
  id: string;
  filename: string;
  source_filename: string;
  path: string;
  subtype: "user_manual" | "specifications" | "programming_api";
  language: string;
  split_mode: string;
  images: string[];
  copied_images: number;
  skill_entry: Skill;
}

export interface StandaloneTaskDetail {
  task_id: string;
  category: string;
  created_at: string;
  updated_at: string;
  status: string;
  docs: StandaloneDocRecord[];
}

export interface StandaloneProcessConfig {
  subtype: "user_manual" | "specifications" | "programming_api";
  device?: string;
  language?: string;
  split_mode?: "headers" | "full";
  doc_name?: string;
}

export interface StandaloneProcessEvent {
  type: "status" | "token_estimate" | "file_done" | "done" | "error";
  task_id?: string;
  file_index?: number;
  file_total?: number;
  filename?: string;
  step?: string;
  message?: string;
  chars?: number;
  estimated_tokens?: number;
  docs?: StandaloneDocRecord[];
}

export async function createStandaloneTask(
  category: string,
): Promise<StandaloneTaskSummary> {
  const res = await axios.post<StandaloneTaskSummary>(
    `${BASE_URL}/api/standalone/tasks`,
    { category },
  );
  return res.data;
}

export async function listStandaloneTasks(): Promise<{ tasks: StandaloneTaskSummary[] }> {
  const res = await axios.get<{ tasks: StandaloneTaskSummary[] }>(
    `${BASE_URL}/api/standalone/tasks`,
  );
  return res.data;
}

export async function getStandaloneTask(
  taskId: string,
): Promise<{ task: StandaloneTaskDetail; skill_md: string }> {
  const res = await axios.get<{ task: StandaloneTaskDetail; skill_md: string }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}`,
  );
  return res.data;
}

export async function deleteStandaloneTask(
  taskId: string,
): Promise<{ deleted: string }> {
  const res = await axios.delete<{ deleted: string }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}`,
  );
  return res.data;
}

export async function processStandaloneTaskFiles(
  taskId: string,
  files: File[],
  configs: StandaloneProcessConfig[],
  onEvent: (event: StandaloneProcessEvent) => void,
  signal?: AbortSignal,
): Promise<void> {
  const form = new FormData();
  for (const file of files) {
    form.append("files", file);
  }
  form.append("docs_config", JSON.stringify(configs));

  const res = await fetch(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/process`,
    {
      method: "POST",
      body: form,
      signal,
    },
  );

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const reader = res.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";

      for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        try {
          const event: StandaloneProcessEvent = JSON.parse(trimmed.substring(6));
          onEvent(event);
        } catch {
          // ignore malformed SSE chunk
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}

export async function getStandaloneDoc(
  taskId: string,
  docId: string,
): Promise<{ doc: StandaloneDocRecord; content: string }> {
  const res = await axios.get<{ doc: StandaloneDocRecord; content: string }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/docs/${encodeURIComponent(docId)}`,
  );
  return res.data;
}

export async function updateStandaloneDocContent(
  taskId: string,
  docId: string,
  content: string,
): Promise<{ updated: boolean; doc: StandaloneDocRecord }> {
  const res = await axios.put<{ updated: boolean; doc: StandaloneDocRecord }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/docs/${encodeURIComponent(docId)}/content`,
    { content },
  );
  return res.data;
}

export async function updateStandaloneDocMeta(
  taskId: string,
  docId: string,
  payload: {
    description?: string;
    subtype?: "user_manual" | "specifications" | "programming_api";
    device?: string;
    language?: string;
  },
): Promise<{ updated: boolean; doc: StandaloneDocRecord }> {
  const res = await axios.patch<{ updated: boolean; doc: StandaloneDocRecord }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/docs/${encodeURIComponent(docId)}/meta`,
    payload,
  );
  return res.data;
}

export async function deleteStandaloneDoc(
  taskId: string,
  docId: string,
): Promise<{ deleted: string }> {
  const res = await axios.delete<{ deleted: string }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/docs/${encodeURIComponent(docId)}`,
  );
  return res.data;
}

export async function getStandaloneSkillMd(
  taskId: string,
): Promise<{ content: string }> {
  const res = await axios.get<{ content: string }>(
    `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/skill`,
  );
  return res.data;
}

export function getStandaloneTaskImageUrl(taskId: string, imageName: string): string {
  return `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/images/${encodeURIComponent(imageName)}`;
}

export function getStandaloneDownloadUrl(taskId: string): string {
  return `${BASE_URL}/api/standalone/tasks/${encodeURIComponent(taskId)}/download`;
}
