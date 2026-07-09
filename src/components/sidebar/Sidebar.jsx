import {
  House,
  MessageCircle,
  Users,
  Globe,
  Phone,
  Crown,
  Settings,
} from "lucide-react";

const menu = [
  { icon: House, title: "Accueil" },
  { icon: MessageCircle, title: "Messages" },
  { icon: Globe, title: "Rooms" },
  { icon: Users, title: "Friends" },
  { icon: Phone, title: "Calls" },
  { icon: Crown, title: "VIP" },
  { icon: Settings, title: "Settings" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 280,
        background: "#111827",
        color: "#fff",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <h2
        style={{
          color: "#00A651",
          marginBottom: 20,
        }}
      >
        🇩🇿 Chat Algerie X
      </h2>

      {menu.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: 12,
              borderRadius: 12,
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <Icon size={20} />
            <span>{item.title}</span>
          </div>
        );
      })}
    </aside>
  );
}