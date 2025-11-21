// src/api/axios.js
import axios from "axios";

// Take VITE_API_URL if set, otherwise default to http://localhost:5000
let root =
  (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim()) ||
  "http://localhost:5000";

// Remove trailing slashes
root = root.replace(/\/+$/, "");

// Ensure we have EXACTLY one /api/v1 suffix
if (!/\/api\/v1$/.test(root)) {
  root = root + "/api/v1";
}

console.log("Dashboard API base URL:", root);

const api = axios.create({
  baseURL: root,          // e.g. http://localhost:5000/api/v1
  withCredentials: true,
});

export default api;
