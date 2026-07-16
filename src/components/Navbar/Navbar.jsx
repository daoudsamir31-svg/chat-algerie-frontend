import { Bell, Search, UserCircle, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

  const { user, logout } = useAuth();

  return (
    <div
      style={{
        height: "70px",
        background: "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
        borderBottom: "1px solid #1f2937",
      }}
    >

      {/* Logo */}
      <h2
        style={{
          color: "#00A651",
          margin: 0,
        }}
      >
        🇩🇿 Chat Algerie X
      </h2>


      {/* Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#1f2937",
          padding: "10px 15px",
          borderRadius: "30px",
          width: "350px",
        }}
      >

        <Search color="white" size={18} />

        <input
          placeholder="Rechercher..."
          style={{
            marginLeft: 10,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "white",
            width: "100%",
          }}
        />

      </div>


      {/* User area */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          color: "white",
        }}
      >

        <Bell size={22} />


        <UserCircle size={36} />


        <div>

          <strong>
            {user?.name || "Utilisateur"}
          </strong>

          <br />

          <small
            style={{
              color:"#00A651"
            }}
          >
            🟢 En ligne
          </small>

        </div>


        <button
          onClick={logout}
          style={{
            display:"flex",
            alignItems:"center",
            gap:"5px",
            background:"#dc2626",
            color:"white",
            border:"none",
            padding:"8px 12px",
            borderRadius:"8px",
            cursor:"pointer"
          }}
        >

          <LogOut size={16} />

          Logout

        </button>


      </div>

    </div>
  );
}