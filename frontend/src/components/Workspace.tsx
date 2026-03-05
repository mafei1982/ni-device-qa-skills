import { useCallback, useEffect, useState } from "react";
import type { Message } from "../api";
import {
  createSession,
  loadSessions,
  saveSessions,
  type ChatSession,
} from "../sessions";
import ChatPanel from "./ChatPanel";
import ModelSelector from "./ModelSelector";
import SessionList from "./SessionList";
import SkillsRegistry from "./SkillsRegistry";

export default function Workspace() {
  // ---- Sessions state ----
  const [sessions, setSessions] = useState<ChatSession[]>(() => {
    const loaded = loadSessions();
    return loaded.length > 0 ? loaded : [createSession()];
  });

  const [activeSessionId, setActiveSessionId] = useState<string>(
    () => sessions[0].id
  );

  const [modelId, setModelId] = useState("");

  // Persist sessions whenever they change
  useEffect(() => {
    saveSessions(sessions);
  }, [sessions]);

  // Active session helper
  const activeSession = sessions.find((s) => s.id === activeSessionId)!;

  // ---- Session actions ----
  const handleNewSession = useCallback(() => {
    const s = createSession();
    setSessions((prev) => [s, ...prev]);
    setActiveSessionId(s.id);
  }, []);

  const handleSelectSession = useCallback((id: string) => {
    setActiveSessionId(id);
  }, []);

  const handleMessagesChange = useCallback(
    (msgs: Message[]) => {
      setSessions((prev) =>
        prev.map((s) => {
          if (s.id !== activeSessionId) return s;
          // Auto-title from the first user message
          const firstUser = msgs.find((m) => m.role === "user");
          const title =
            firstUser && firstUser.content
              ? firstUser.content.slice(0, 60)
              : s.title;
          return { ...s, messages: msgs, title, updatedAt: Date.now() };
        })
      );
    },
    [activeSessionId]
  );

  const handleRenameSession = useCallback((id: string, newTitle: string) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, title: newTitle, updatedAt: Date.now() } : s
      )
    );
  }, []);

  const handleDeleteSession = useCallback(
    (id: string) => {
      const remaining = sessions.filter((s) => s.id !== id);

      if (remaining.length === 0) {
        // Last session deleted — create a fresh one
        const fresh = createSession();
        setSessions([fresh]);
        setActiveSessionId(fresh.id);
        return;
      }

      setSessions(remaining);

      // If we deleted the active session, fall back to the most recent
      if (id === activeSessionId) {
        const sorted = [...remaining].sort(
          (a, b) => b.updatedAt - a.updatedAt
        );
        setActiveSessionId(sorted[0].id);
      }
    },
    [sessions, activeSessionId]
  );

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT: Sidebar */}
      <div className="w-96 flex-shrink-0 border-r border-gray-200 bg-white flex flex-col overflow-y-auto p-4">
        {/* Model selector */}
        <ModelSelector value={modelId} onChange={setModelId} />

        {/* Session list */}
        <SessionList
          sessions={sessions}
          activeSessionId={activeSessionId}
          onSelectSession={handleSelectSession}
          onNewSession={handleNewSession}
          onRenameSession={handleRenameSession}
          onDeleteSession={handleDeleteSession}
        />

        {/* Divider */}
        <hr className="my-4 border-gray-200" />

        {/* Skills Registry */}
        <SkillsRegistry />
      </div>

      {/* RIGHT: Chat area */}
      <div className="flex-1 flex flex-col min-w-0 bg-gray-50">
        <ChatPanel
          messages={activeSession.messages}
          onMessagesChange={handleMessagesChange}
          modelId={modelId || undefined}
        />
      </div>
    </div>
  );
}
