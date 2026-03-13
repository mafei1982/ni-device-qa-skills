import { useEffect, useRef, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { getModels, type ModelInfo } from "../api";

interface Props {
  value: string;
  onChange: (modelId: string) => void;
}

export default function ModelSelector({ value, onChange }: Props) {
  const [models, setModels] = useState<ModelInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch models on mount
  useEffect(() => {
    getModels()
      .then((data) => {
        setModels(data.models);
        if (!value && data.default) {
          onChange(data.default);
        }
        setError(null);
      })
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load models.")
      )
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = query
    ? models.filter(
        (m) =>
          m.id.toLowerCase().includes(query.toLowerCase()) ||
          m.name.toLowerCase().includes(query.toLowerCase())
      )
    : models;

  const displayValue =
    models.find((m) => m.id === value)?.name ?? value ?? "";

  function handleSelect(id: string) {
    onChange(id);
    setQuery("");
    setOpen(false);
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-gray-500 text-xs py-2">
        <Loader2 size={14} className="animate-spin" />
        Loading models…
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-xs text-red-500 py-2">{error}</div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Model
      </label>
      <div
        className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1.5 bg-white cursor-pointer hover:border-ni-500 transition-colors"
        onClick={() => {
          setOpen(!open);
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        {open ? (
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search models…"
            className="flex-1 text-sm outline-none bg-transparent min-w-0"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className="flex-1 text-sm text-gray-800 truncate">
            {displayValue || "Select model…"}
          </span>
        )}
        <ChevronDown
          size={14}
          className={`text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <ul className="absolute z-50 mt-1 w-full max-h-64 overflow-y-auto bg-white border border-gray-200 rounded shadow-md">
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-xs text-gray-400">No models found</li>
          )}
          {filtered.map((m) => (
            <li
              key={m.id}
              onClick={() => handleSelect(m.id)}
              className={`px-3 py-1.5 text-sm cursor-pointer hover:bg-ni-50 transition-colors ${
                m.id === value
                  ? "bg-ni-50 text-ni-700 font-medium"
                  : "text-gray-700"
              }`}
            >
              <span className="block truncate">{m.name}</span>
              <span className="block text-xs text-gray-400 truncate">
                {m.id}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
