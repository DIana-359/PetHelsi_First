import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import style from "./App.module.css";

export default function App() {
  return (
    <div className={style.appContainer}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
