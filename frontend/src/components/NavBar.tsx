import { NavLink } from "react-router-dom";

export default function NavBar() {
  const base =
    "px-4 py-2 text-sm font-medium rounded-md transition-colors";
  const active = `${base} bg-blue-600 text-white`;
  const inactive = `${base} text-gray-600 hover:text-gray-900 hover:bg-gray-100`;

  return (
    <nav className="flex items-center gap-2 px-4 py-2 bg-white border-b border-gray-200 flex-shrink-0">
      <span className="text-sm font-semibold text-gray-800 mr-4">
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
    </nav>
  );
}
