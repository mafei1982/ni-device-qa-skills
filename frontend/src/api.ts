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
  subtype: "user_manual" | "specifications",
  category: string
): Promise<Skill> {
  const form = new FormData();
  form.append("file", file);
  form.append("device", device);
  form.append("subtype", subtype);
  form.append("category", category);
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

export async function getModels(): Promise<ModelsResponse> {
  const res = await axios.get<ModelsResponse>(`${BASE_URL}/api/models`);
  return res.data;
}
