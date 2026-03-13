import ArchitectureDiagram from "./ArchitectureDiagram";
import SkillsRegistry from "./SkillsRegistry";

export default function IntroPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F7F8FA]">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">
          Project Overview
        </h1>
        <ArchitectureDiagram />
        <SkillsRegistry />
      </div>
    </div>
  );
}
