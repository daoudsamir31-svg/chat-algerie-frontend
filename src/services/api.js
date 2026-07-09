import axios from "axios";

const api = axios.create({
  baseURL: "https://chat-algerie-backend.onrender.com/api",
});

export default api;