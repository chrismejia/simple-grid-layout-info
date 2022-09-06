import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import PageSquareKnot from "./pages/challenges/05-SquareKnot";

import "./styles/index.css";
import "./styles/container.css";
import "./styles/examples.css";
import "./styles/helpers.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/square-knot"} element={<PageSquareKnot />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
