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

export async function deleteSkill(
  skillName: string
): Promise<{ deleted: string }> {
  const res = await axios.delete<{ deleted: string }>(
    `${BASE_URL}/api/skills/${encodeURIComponent(skillName)}`
  );
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

export async function getModels(): Promise<ModelsResponse> {
  const res = await axios.get<ModelsResponse>(`${BASE_URL}/api/models`);
  return res.data;
}
