import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**
 * main.jsx
 * Entry point — mounts the App (which contains all routes/pages).
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
