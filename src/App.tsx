import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-800">
      <div className="container mx-auto py-10">
        <Routes>
          <Route path="/" element={<Navigate to={"johan-ramos"} />}></Route>
          <Route path="/johan-ramos" element={<Menu />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
