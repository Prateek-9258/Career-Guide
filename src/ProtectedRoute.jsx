// Sirf logged-in user ko andar jaane deta hai.
// Cookie nahi / expire / logout ke baad -> login page par bhej deta hai.
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "./api.js";

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let cancelled = false;

    api
      .get("/auth/me")
      .then(() => !cancelled && setStatus("ok"))
      .catch(() => !cancelled && setStatus("no"));

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "checking") return null; // yahan loader bhi laga sakte ho
  if (status === "no") return <Navigate to="/" replace />; // apna login route
  return children;
}