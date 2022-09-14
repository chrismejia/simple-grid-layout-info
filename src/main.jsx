import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/01-Intro";
import Container from "./pages/02-Container";
import Grid from "./pages/03-Grid";

import "./styles/index.css";
import "./styles/sections/01-intro.css";
import "./styles/sections/02-container.css";
import "./styles/sections/03-grid.css";
import "./styles/sections/04-subgrid.css";
import "./styles/sections/05-layouts.css";
import "./styles/sections/06-challenges.css";
import "./styles/challenges.css";
import "./styles/container.css";
import "./styles/examples.css";
import "./styles/helpers.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Intro />} />
        <Route path={"/container"} element={<Container />} />
        <Route path={"/grid"} element={<Grid />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
