import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B1220",
        color: "white",
      }}
    >
      <Outlet />
    </div>
  );
}