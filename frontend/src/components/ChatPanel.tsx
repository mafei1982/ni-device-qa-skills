import { useEffect, useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { sendChat, type Message } from "../api";
import ChatMessage from "./ChatMessage";

interface Props {
  messages: Message[];
  onMessagesChange: (msgs: Message[]) => void;
  modelId?: string;
}

export default function ChatPanel({ messages, onMessagesChange, modelId }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    onMessagesChange(nextMessages);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
    setLoading(true);

    try {
      const result = await sendChat(nextMessages, modelId);
      onMessagesChange(result.messages);
    } catch (err: unknown) {
      const errMsg =
        err instanceof Error
          ? err.message
          : "Request failed. Is the backend running?";
      onMessagesChange([
        ...nextMessages,
        { role: "assistant", content: `Error: ${errMsg}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      <div className="px-5 py-4 text-sm font-semibold border-b border-gray-200 bg-white text-gray-800">
        Chat
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        {messages.length === 0 && (
          <div className="text-gray-400 text-sm text-center py-8">
            Ask a question about NI hardware devices.
          </div>
        )}
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Loader2 size={16} className="animate-spin" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-2 items-end">
          <textarea
            ref={textareaRef}
            rows={1}
            placeholder="Ask about NI devices… (Enter to send, Shift+Enter for newline)"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="flex-1 resize-none rounded-lg px-3 py-2 border border-gray-300 text-sm leading-snug max-h-40 overflow-y-auto outline-none focus:border-blue-500 transition-colors font-[inherit]"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            title="Send"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            {loading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
