import { NavLink } from "react-router-dom";

export default function NavBar() {
  const base =
    "px-3 py-1.5 text-sm font-medium rounded transition-colors";
  const active = `${base} bg-ni-600 text-white`;
  const inactive = `${base} text-gray-300 hover:text-white hover:bg-gray-700`;

  return (
    <nav className="flex items-center gap-1 px-4 py-2 bg-gray-900 border-b-2 border-ni-600 flex-shrink-0">
      <span className="text-sm font-bold text-white tracking-wide mr-4">
        NI Device Q&A
      </span>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        Workspace
      </NavLink>
      <NavLink
        to="/intro"
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        Introduction
      </NavLink>
      <NavLink
        to="/doc-processor"
        className={({ isActive }) => (isActive ? active : inactive)}
      >
        Doc Processor
      </NavLink>
    </nav>
  );
}
