import { Bell, Search, UserCircle, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

  const { token } = useAuth();

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

      <h2 style={{ color:"#00A651", margin:0 }}>
        🇩🇿 Chat Algerie X
      </h2>


      <div
        style={{
          display:"flex",
          alignItems:"center",
          background:"#1f2937",
          padding:"10px 15px",
          borderRadius:"30px",
          width:"350px"
        }}
      >
        <Search color="white" size={18}/>

        <input
          placeholder="Rechercher..."
          style={{
            marginLeft:10,
            border:"none",
            outline:"none",
            background:"transparent",
            color:"white",
            width:"100%"
          }}
        />

      </div>


      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"20px",
          color:"white"
        }}
      >

        {token ? (

          <>
            <Bell />

            <UserCircle size={36}/>

            <div>
              <strong>Samir</strong>
              <br/>
              <small style={{color:"#00A651"}}>
                🟢 En ligne
              </small>
            </div>
          </>

        ) : (

          <>
            <Link 
              to="/login"
              style={{color:"white",textDecoration:"none"}}
            >
              <LogIn size={20}/> Login
            </Link>


            <Link
              to="/register"
              style={{color:"#00A651",textDecoration:"none"}}
            >
              <UserPlus size={20}/> Register
            </Link>

          </>

        )}

      </div>

    </div>
  );
}