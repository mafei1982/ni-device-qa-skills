import { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  wide?: boolean;
}

export default function Modal({ title, onClose, children, wide }: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded shadow-lg w-full ${wide ? "max-w-6xl" : "max-w-2xl"} max-h-[85vh] flex flex-col mx-4 border border-gray-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-gray-50 flex-shrink-0">
          <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}
