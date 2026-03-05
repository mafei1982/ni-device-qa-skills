import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Workspace from "./components/Workspace";
import IntroPage from "./components/IntroPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-gray-50 text-gray-900">
        <NavBar />
        <Routes>
          <Route path="/" element={<Workspace />} />
          <Route path="/intro" element={<IntroPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
