import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import OnlineUsers from "../components/users/OnlineUsers";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0B1220",
      }}
    >
      <Sidebar />

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
            💬 Chat Area
          </div>

          <OnlineUsers />
        </div>
      </div>
    </div>
  );
}