import { useEffect, useState } from "react";
import { Circle } from "lucide-react";
import api from "../../services/api";

export default function OnlineUsers() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    loadUsers();

    const timer = setInterval(loadUsers, 5000);

    return () => clearInterval(timer);

  }, []);

  async function loadUsers() {

    try {

      const res = await api.get("/users");

      setUsers(res.data);

    } catch (err) {

      console.log(err);

    }

  }

  return (

    <div
      style={{
        width: 280,
        background: "#111827",
        borderLeft: "1px solid #1f2937",
        padding: 20,
        color: "white",
      }}
    >

      <h3>🟢 Online Users</h3>

      {users.map((user) => (

        <div
          key={user.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #222",
          }}
        >

          <div>

            <strong>{user.name}</strong>

            <br />

            <small>{user.city}</small>

          </div>

          <Circle
            size={12}
            fill={user.online ? "#00A651" : "#777"}
            color={user.online ? "#00A651" : "#777"}
          />

        </div>

      ))}

    </div>

  );

}