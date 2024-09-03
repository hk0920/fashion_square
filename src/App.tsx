import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudyList from "./layouts/StudyList";
import FashionSquarePage from "./pages/fashionsquare";

function App() {
  return (
    <BrowserRouter>
      <div id="wrap">
        <Routes>
          <Route path="/" element={<StudyList />}></Route>
          <Route path="/fashion-square" element={<FashionSquarePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
