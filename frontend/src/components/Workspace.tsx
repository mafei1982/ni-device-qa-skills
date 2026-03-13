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
  const [showSkillsRegistry, setShowSkillsRegistry] = useState(true);

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
    <div className="flex flex-1 flex-col lg:flex-row overflow-hidden bg-gray-50">
      {/* LEFT: Sidebar */}
      <div className="w-full lg:w-80 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white flex flex-col overflow-y-auto p-4">
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

      </div>

      {/* CENTER: Chat area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {!showSkillsRegistry && (
          <button
            onClick={() => setShowSkillsRegistry(true)}
            className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Show Skills
          </button>
        )}
        <ChatPanel
          messages={activeSession.messages}
          onMessagesChange={handleMessagesChange}
          modelId={modelId || undefined}
        />
      </div>

      {/* RIGHT: Skills registry */}
      {showSkillsRegistry && (
        <aside className="w-full lg:w-[28rem] lg:max-w-[42vw] lg:min-w-[22rem] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-gray-200 bg-white flex flex-col min-h-0">
          <div className="flex justify-end px-4 pt-3">
            <button
              onClick={() => setShowSkillsRegistry(false)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Hide Skills
            </button>
          </div>
          <div className="flex-1 min-h-0 p-4 pt-2">
            <SkillsRegistry />
          </div>
        </aside>
      )}
    </div>
  );
}
