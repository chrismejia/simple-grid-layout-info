import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IntroExamples from "./pages/01-Intro_Examples";

import "./styles/index.css";
import "./styles/challenges.css";
import "./styles/container.css";
import "./styles/sections.css";
import "./styles/examples.css";
import "./styles/helpers.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IntroExamples />} />
        {/* <Route path={"/square-knot"} element={<PageSquareKnot />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
