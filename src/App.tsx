import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StudyList from "./layouts/StudyList";
import FashionSquarePage from "./pages/fashionsquare";
import { GlobalStyle } from "./styles/LayoutStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div id="wrap">
          <Routes>
            <Route index path="/" element={<StudyList />} />
            <Route
              index
              path="/fashion-square"
              element={<FashionSquarePage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
