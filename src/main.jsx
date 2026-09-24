import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { clearLegacyStorage } from "./api.js";

// Purani localStorage wali login/password keys hata do (ab account server par hai).
clearLegacyStorage();

/**
 * main.jsx
 * Entry point — mounts the App (which contains all routes/pages).
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
