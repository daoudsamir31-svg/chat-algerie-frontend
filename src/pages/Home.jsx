import { useState } from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import OnlineUsers from "../components/users/OnlineUsers";
import ChatWindow from "../components/ChatWindow";


export default function Home() {

  const [active, setActive] = useState("Accueil");


  return (

    <div
      style={{
        display:"flex",
        height:"100vh",
        background:"#0B1220",
      }}
    >

      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
      />


      <div
        style={{
          flex:1,
          display:"flex",
          flexDirection:"column",
        }}
      >

        {/* Navbar */}
        <Navbar />


        <div
          style={{
            flex:1,
            display:"flex",
          }}
        >


          {/* Chat Area */}
          <div
            style={{
              flex:1,
              padding:"20px",
            }}
          >

            <ChatWindow />

          </div>


          {/* Online users */}
          <OnlineUsers />


        </div>


      </div>


    </div>

  );
}