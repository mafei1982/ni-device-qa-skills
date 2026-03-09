import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Message } from "../api";
import type { Components } from "react-markdown";

const BACKEND_URL = `http://${window.location.hostname}:8000`;

/**
 * Custom renderer that rewrites relative `images/…` src values to
 * point at the backend static-files route.
 */
const markdownComponents: Components = {
  img: ({ src, alt, ...rest }) => {
    const resolved =
      src && !src.startsWith("http") && src.startsWith("images/")
        ? `${BACKEND_URL}/${src}`
        : src;
    return <img src={resolved} alt={alt ?? ""} className="max-w-full rounded" {...rest} />;
  },
};

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  // Hide tool result messages
  if (message.role === "tool") {
    return <div className="text-xs text-gray-400">Tool execution completed</div>;
  }

  // Show indicator when assistant is invoking tools (content is null)
  if (
    message.role === "assistant" &&
    Array.isArray(message.tool_calls) &&
    message.tool_calls.length > 0
  ) {
    return (
      <div className="max-w-[80%] self-start bg-gray-100 text-gray-900 rounded-[16px_16px_16px_4px] px-4 py-2">
        <div className="italic text-gray-500">Agent is using tools...</div>
      </div>
    );
  }

  const isUser = message.role === "user";
  const content = message.content || "";

  if (isUser) {
    return (
      <div className="self-end bg-blue-600 text-white rounded-[16px_16px_4px_16px] px-4 py-2 max-w-[80%]">
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    );
  }

  return (
    <div className="self-start bg-gray-100 text-gray-900 rounded-[16px_16px_16px_4px] px-4 py-2 max-w-[80%] prose prose-sm max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}
