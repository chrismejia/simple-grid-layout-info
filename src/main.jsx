import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/01-Intro";
import Container from "./pages/02-Container";

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
        <Route path={"/"} element={<Intro />} />
        <Route path={"/container"} element={<Container />} />
        {/* <Route path={"/square-knot"} element={<PageSquareKnot />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
