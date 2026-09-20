import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api/* to the Express + MongoDB backend (server/, port 5000).
    // The browser only ever talks to Vite, so the login cookie is same-origin
    // and no CORS setup is needed while developing.
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
