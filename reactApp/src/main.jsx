// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";  // only if you still use global CSS, otherwise omit

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </React.StrictMode>
);