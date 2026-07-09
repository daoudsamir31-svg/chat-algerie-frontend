import { Bell, Search, UserCircle } from "lucide-react";

export default function Navbar() {
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
      <h2 style={{ color: "#00A651", margin: 0 }}>
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

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          color: "white",
        }}
      >
        <Bell />

        <UserCircle size={36} />

        <div>
          <strong>Samir</strong>
          <br />
          <small style={{ color: "#00A651" }}>
            🟢 En ligne
          </small>
        </div>
      </div>
    </div>
  );
}