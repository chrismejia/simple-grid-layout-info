import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./pages/01-Intro";
import Container from "./pages/02-Container";
import Grid from "./pages/03-Grid";
import Templating from "./pages/04-Templating";
import Layouts from "./pages/05-Layouts";
import Challenges from "./pages/06-Challenges";
import Answers from "./pages/0X-Answers";

import "./styles/index.css";
import "./styles/sections/01-intro.css";
import "./styles/sections/02-container.css";
import "./styles/sections/03-grid.css";
import "./styles/sections/04-templating.css";
import "./styles/sections/05-layouts.css";
import "./styles/sections/06-challenges.css";
import "./styles/challenges.css";
import "./styles/container.css";
import "./styles/examples.css";
import "./styles/helpers.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Intro />} />
        <Route path={"/container"} element={<Container />} />
        <Route path={"/grid"} element={<Grid />} />
        <Route path={"/templating"} element={<Templating />} />
        <Route path={"/layouts"} element={<Layouts />} />
        <Route path={"/challenges"} element={<Challenges />} />
        <Route path={"/challenge-answers"} element={<Answers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
