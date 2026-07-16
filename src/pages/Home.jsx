import { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import OnlineUsers from "../components/users/OnlineUsers";

export default function Home() {

  const [active, setActive] = useState("Accueil");

  function renderContent() {

    switch (active) {

      case "Accueil":
        return <h1>🏠 Accueil</h1>;

      case "Messages":
        return <h1>💬 Messages</h1>;

      case "Rooms":
        return <h1>🌍 Rooms</h1>;

      case "Friends":
        return <h1>👥 Friends</h1>;

      case "Calls":
        return <h1>📞 Calls</h1>;

      case "VIP":
        return <h1>👑 VIP</h1>;

      case "Settings":
        return <h1>⚙️ Settings</h1>;

      default:
        return <h1>Chat Algerie</h1>;
    }

  }

  return (

    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0B1220",
      }}
    >

      <Sidebar
        active={active}
        setActive={setActive}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Navbar />

        <div
          style={{
            flex: 1,
            display: "flex",
          }}
        >

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 35,
            }}
          >
            {renderContent()}
          </div>

          <OnlineUsers />

        </div>

      </div>

    </div>

  );

}