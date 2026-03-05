const steps = [
  { label: "User Question", sub: "Chat message" },
  { label: "FastAPI / Agent", sub: "LLM + tool calls" },
  { label: "MCP Server", sub: "server.py tools" },
  { label: "Doc Skills", sub: "Markdown docs" },
  { label: "Cited Answer", sub: "Grounded response" },
];

function Arrow() {
  return (
    <div className="flex items-center justify-center flex-shrink-0 text-gray-400 px-1">
      <span className="hidden md:block text-xl font-light">&rarr;</span>
      <span className="block md:hidden text-xl font-light">&darr;</span>
    </div>
  );
}

export default function ArchitectureDiagram() {
  return (
    <section className="mb-10">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        System Architecture
      </h2>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 bg-gray-50 rounded-xl p-4 border border-gray-200 overflow-x-auto">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex flex-col md:flex-row md:items-center"
          >
            <div className="flex flex-col items-center justify-center bg-white border border-gray-300 rounded-lg px-4 py-3 shadow-sm min-w-[130px] text-center">
              <span className="text-sm font-semibold text-gray-800">
                {step.label}
              </span>
              <span className="text-xs text-gray-500 mt-0.5">{step.sub}</span>
            </div>
            {i < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        The agent receives a user question, queries tools via MCP, loads
        relevant device documentation as context, and produces an accurate,
        cited answer.
      </p>
    </section>
  );
}
