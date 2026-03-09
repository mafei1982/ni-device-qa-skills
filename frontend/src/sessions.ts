import type { Message } from "./api";

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  module_filepath: string | null;
  updatedAt: number;
}

const STORAGE_KEY = "ni-qa-sessions";

/** Max characters to keep per tool-role message when persisting. */
const MAX_TOOL_CONTENT_LENGTH = 200;

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

/**
 * Trim large tool-result messages so they don't bloat localStorage.
 * The full content is never needed after the LLM has already consumed it.
 */
function trimForStorage(sessions: ChatSession[]): ChatSession[] {
  return sessions.map((s) => ({
    ...s,
    messages: s.messages.map((m) => {
      if (
        m.role === "tool" &&
        typeof m.content === "string" &&
        m.content.length > MAX_TOOL_CONTENT_LENGTH
      ) {
        return {
          ...m,
          content: m.content.slice(0, MAX_TOOL_CONTENT_LENGTH) + "…[trimmed]",
        };
      }
      return m;
    }),
  }));
}

export function saveSessions(sessions: ChatSession[]): void {
  const trimmed = trimForStorage(sessions);

  // Try saving; if quota is exceeded, progressively drop the oldest sessions.
  let toSave = trimmed;
  while (toSave.length > 0) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
      return;
    } catch {
      // Remove the oldest session (last after sort-by-updatedAt) and retry.
      const sorted = [...toSave].sort((a, b) => b.updatedAt - a.updatedAt);
      sorted.pop();
      toSave = sorted;
    }
  }

  // Everything removed — clear the key entirely.
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // nothing we can do
  }
}
