import type { Message } from "./api";

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  module_filepath: string | null;
  updatedAt: number;
}

const STORAGE_KEY = "ni-qa-sessions";

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createSession(): ChatSession {
  return {
    id: generateId(),
    title: "New Chat",
    messages: [],
    module_filepath: null,
    updatedAt: Date.now(),
  };
}

export function loadSessions(): ChatSession[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ChatSession[];
  } catch {
    return [];
  }
}

export function saveSessions(sessions: ChatSession[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}
