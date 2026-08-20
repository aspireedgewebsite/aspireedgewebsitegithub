// Base URL of the backend API.
// In local dev, leave VITE_API_URL unset — Vite's proxy (vite.config.js) forwards
// /api requests to http://localhost:5000 automatically.
// In production (Vercel/Netlify), set VITE_API_URL to your live backend URL
// (e.g. https://aspireedge-api.onrender.com) with no trailing slash.
export const API_URL = import.meta.env.VITE_API_URL || "";

export function apiFetch(path, options) {
  return fetch(`${API_URL}${path}`, options);
}