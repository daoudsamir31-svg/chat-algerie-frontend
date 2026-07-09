import { io } from "socket.io-client";

const socket = io("https://chat-algerie-backend.onrender.com");
export default socket;