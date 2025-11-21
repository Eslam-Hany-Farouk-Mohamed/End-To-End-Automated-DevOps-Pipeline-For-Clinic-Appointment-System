// frontend/src/api/axios.js
import axios from "axios";

// Base is ONLY the server root. No /api/v1 here.
const root = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(
  /\/+$/,
  ""
);

console.log("Frontend API base URL:", root);

const api = axios.create({
  baseURL: root,        // e.g. http://localhost:5000
  withCredentials: true // send cookies when needed
});

export default api;
