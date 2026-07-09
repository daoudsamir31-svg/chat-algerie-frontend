import { useEffect, useState } from "react";
import api from "../services/api";

export default function Sidebar() {

    const [users, setUsers] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        loadUsers();
        loadRooms();
    }, []);

    async function loadUsers() {
        try {
            const res = await api.get("/users");
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function loadRooms() {
        try {
            const res = await api.get("/chat/rooms");
            setRooms(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div
            style={{
                width: 280,
                borderRight: "1px solid #ddd",
                padding: 20,
                overflowY: "auto"
            }}
        >
            <h2>🟢 Online Users</h2>

            {users.map(user => (
                <div
                    key={user.id}
                    style={{
                        padding: 10,
                        marginBottom: 5,
                        background: "#f3f3f3",
                        borderRadius: 8
                    }}
                >
                    <strong>{user.name}</strong>

                    <br />

                    {user.online ? "🟢 Online" : "⚫ Offline"}
                </div>
            ))}

            <hr />

            <h2>💬 Rooms</h2>

            {rooms.map(room => (
                <div
                    key={room.id}
                    style={{
                        padding: 10,
                        marginBottom: 5,
                        background: "#eef",
                        borderRadius: 8
                    }}
                >
                    {room.name}
                </div>
            ))}
        </div>
    );
}