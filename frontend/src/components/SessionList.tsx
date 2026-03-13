import { useState, useRef, useEffect } from "react";
import { MessageSquarePlus, MessageSquare, Pencil, Trash2, Check, X } from "lucide-react";
import type { ChatSession } from "../sessions";

interface Props {
  sessions: ChatSession[];
  activeSessionId: string;
  onSelectSession: (id: string) => void;
  onNewSession: () => void;
  onRenameSession: (id: string, newTitle: string) => void;
  onDeleteSession: (id: string) => void;
}

function formatTime(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const diff = now.getTime() - d.getTime();

  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 604_800_000) return `${Math.floor(diff / 86_400_000)}d ago`;

  return d.toLocaleDateString();
}

function SessionItem({
  session,
  isActive,
  onSelect,
  onRename,
  onDelete,
}: {
  session: ChatSession;
  isActive: boolean;
  onSelect: () => void;
  onRename: (newTitle: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(session.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  function commitRename() {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== session.title) {
      onRename(trimmed);
    }
    setEditing(false);
  }

  function cancelRename() {
    setDraft(session.title);
    setEditing(false);
  }

  function handleDelete(e: React.MouseEvent) {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this session?")) {
      onDelete();
    }
  }

  return (
    <li className="group">
      <div
        onClick={() => !editing && onSelect()}
        className={`w-full text-left px-2.5 py-1.5 rounded text-sm transition-colors flex items-start gap-2 cursor-pointer ${
          isActive
            ? "bg-ni-50 text-ni-700 border border-ni-200"
            : "hover:bg-gray-100 text-gray-700 border border-transparent"
        }`}
      >
        <MessageSquare
          size={14}
          className={`mt-0.5 flex-shrink-0 ${isActive ? "text-ni-500" : "text-gray-400"}`}
        />
        <div className="flex-1 min-w-0">
          {editing ? (
            <div className="flex items-center gap-1">
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitRename();
                  if (e.key === "Escape") cancelRename();
                }}
                onBlur={commitRename}
                onClick={(e) => e.stopPropagation()}
                className="flex-1 min-w-0 px-1 py-0.5 text-sm rounded border border-ni-300 outline-none focus:ring-1 focus:ring-ni-400 bg-white text-gray-900"
              />
              <button
                onClick={(e) => { e.stopPropagation(); commitRename(); }}
                title="Save"
                className="p-0.5 rounded hover:bg-green-100 text-green-600"
              >
                <Check size={13} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); cancelRename(); }}
                title="Cancel"
                className="p-0.5 rounded hover:bg-red-100 text-red-500"
              >
                <X size={13} />
              </button>
            </div>
          ) : (
            <span className="block truncate font-medium">{session.title}</span>
          )}
          <span className="block text-xs text-gray-400 mt-0.5">
            {formatTime(session.updatedAt)}
            {session.messages.length > 0 &&
              ` · ${session.messages.filter((m) => m.role === "user").length} msg`}
          </span>
        </div>

        {/* Action buttons – visible on hover, hidden while editing */}
        {!editing && (
          <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDraft(session.title);
                setEditing(true);
              }}
              title="Rename"
              className="p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-700"
            >
              <Pencil size={13} />
            </button>
            <button
              onClick={handleDelete}
              title="Delete"
              className="p-1 rounded hover:bg-red-100 text-gray-400 hover:text-red-600"
            >
              <Trash2 size={13} />
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default function SessionList({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewSession,
  onRenameSession,
  onDeleteSession,
}: Props) {
  // Show most recent first
  const sorted = [...sessions].sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Recent Sessions
        </h3>
        <button
          onClick={onNewSession}
          title="New Chat"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-ni-600 text-white text-xs font-medium hover:bg-ni-700 transition-colors"
        >
          <MessageSquarePlus size={13} />
          New Chat
        </button>
      </div>

      {sorted.length === 0 && (
        <p className="text-xs text-gray-400 italic">No sessions yet.</p>
      )}

      <ul className="flex flex-col gap-1">
        {sorted.map((s) => (
          <SessionItem
            key={s.id}
            session={s}
            isActive={s.id === activeSessionId}
            onSelect={() => onSelectSession(s.id)}
            onRename={(newTitle) => onRenameSession(s.id, newTitle)}
            onDelete={() => onDeleteSession(s.id)}
          />
        ))}
      </ul>
    </section>
  );
}
