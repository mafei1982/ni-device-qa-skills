import { useCallback, useEffect, useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { sendChatStream, type Message } from "../api";
import ChatMessage from "./ChatMessage";

/** Minimum interval (ms) between React state flushes for streaming tokens. */
const TOKEN_FLUSH_INTERVAL = 50;

interface Props {
  messages: Message[];
  onMessagesChange: (msgs: Message[]) => void;
  modelId?: string;
}

export default function ChatPanel({ messages, onMessagesChange, modelId }: Props) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [statusText, setStatusText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Ref that tracks whether the component is still mounted.
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  // Abort controller ref so we can cancel the stream on unmount.
  const abortRef = useRef<AbortController | null>(null);
  useEffect(() => {
    return () => { abortRef.current?.abort(); };
  }, []);

  // Throttled scroll: prevents excessive scrollIntoView calls
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduleScroll = useCallback(() => {
    if (scrollTimerRef.current) return;
    scrollTimerRef.current = setTimeout(() => {
      scrollTimerRef.current = null;
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  }, []);

  // Auto-scroll to bottom when messages change or streaming content updates
  useEffect(() => {
    scheduleScroll();
  }, [messages, streamingContent, scheduleScroll]);

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
    setStreamingContent("");
    setStatusText("");

    // Create an AbortController so we can cancel on unmount
    const controller = new AbortController();
    abortRef.current = controller;

    // Token buffer – accumulates tokens and flushes to state on a timer
    // so we don't trigger a React re-render on every single token.
    let tokenBuffer = "";
    let flushTimer: ReturnType<typeof setTimeout> | null = null;

    const flushTokens = () => {
      flushTimer = null;
      if (!mountedRef.current) return;
      const pending = tokenBuffer;
      tokenBuffer = "";
      if (pending) {
        setStreamingContent((prev) => prev + pending);
      }
    };

    const onToken = (token: string) => {
      tokenBuffer += token;
      if (!flushTimer) {
        flushTimer = setTimeout(flushTokens, TOKEN_FLUSH_INTERVAL);
      }
    };

    try {
      const result = await sendChatStream(
        nextMessages,
        modelId,
        onToken,
        (status) => { if (mountedRef.current) setStatusText(status); },
        controller.signal,
      );
      // Flush any remaining buffered tokens before finalising
      if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
      if (!mountedRef.current) return;
      onMessagesChange(result.messages);
    } catch (err: unknown) {
      if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
      if (!mountedRef.current) return;
      // Ignore abort errors (component unmounted)
      if (err instanceof DOMException && err.name === "AbortError") return;
      const errMsg =
        err instanceof Error
          ? err.message
          : "Request failed. Is the backend running?";
      onMessagesChange([
        ...nextMessages,
        { role: "assistant", content: `Error: ${errMsg}` },
      ]);
    } finally {
      if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
      abortRef.current = null;
      if (mountedRef.current) {
        setLoading(false);
        setStreamingContent("");
        setStatusText("");
      }
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
        {loading && streamingContent && (
          <ChatMessage message={{ role: "assistant", content: streamingContent }} />
        )}
        {loading && !streamingContent && (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Loader2 size={16} className="animate-spin" />
            {statusText && <span>{statusText}</span>}
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
