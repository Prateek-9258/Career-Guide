/**
 * api.js
 * Backend (Express + MongoDB, folder: /backend) se baat karne ka chhota helper.
 *
 * - Development me Vite "/api/*" ko backend (port 5000) par forward karta hai
 *   (vite.config.js), isliye login cookie same-origin rehti hai.
 * - Frontend aur backend alag domain par host karne ho to build ke time
 *   VITE_API_URL set karo (example: https://my-api.onrender.com).
 */

const BASE = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");

/** Error jisme server ka message, HTTP status aur field-wise errors hote hain. */
export class ApiError extends Error {
  constructor(status, message, errors = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

async function request(method, path, body) {
  let response;

  try {
    response = await fetch(`${BASE}/api${path}`, {
      method,
      credentials: BASE ? "include" : "same-origin",
      headers: body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new ApiError(0, "Cannot reach the server. Please try again in a moment.");
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    // empty or non-JSON reply (for example when the backend is not running)
  }

  if (!response.ok) {
    const fallback =
      response.status >= 500
        ? "Server is not responding. Please try again later."
        : "Something went wrong. Please try again.";

    throw new ApiError(response.status, data?.message || fallback, data?.errors || {});
  }

  return data;
}

export const api = {
  get: (path) => request("GET", path),
  post: (path, body = {}) => request("POST", path, body),
  put: (path, body = {}) => request("PUT", path, body),
  delete: (path) => request("DELETE", path),
};

// Purane version me ye cheezein browser ke localStorage me thi (password plain
// text me bhi). Ab account server par hai, isliye ye purani keys hata di jaati hain.
const LEGACY_KEYS = [
  "cv_users",
  "cv_user",
  "careerVisionPassword",
  "cv_login",
  "cv_name",
  "isLoggedIn",
  "loggedInUser",
];

export function clearLegacyStorage() {
  try {
    LEGACY_KEYS.forEach((key) => localStorage.removeItem(key));
  } catch {
    // storage blocked hone par bhi app chalna chahiye
  }
}
