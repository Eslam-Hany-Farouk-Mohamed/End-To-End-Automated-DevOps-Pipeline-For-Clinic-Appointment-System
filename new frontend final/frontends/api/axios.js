// frontend/src/api/axios.js
import axios from "axios";

// Base will be the API root – we include /api/v1 here
let root =
  (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim()) ||
  "http://16.170.235.0:32000";

// Remove trailing slashes
root = root.replace(/\/+$/, "");

// Ensure exactly one /api/v1 at the end
if (!/\/api\/v1$/.test(root)) {
  root = root + "/api/v1";
}

console.log("Frontend API base URL:", root);

const api = axios.create({
  baseURL: root,        // http://16.170.235.0:32000/api/v1
  withCredentials: true // send cookies when needed
});

export default api;
