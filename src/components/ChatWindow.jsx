import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../context/AuthContext";

const socket = io(
  "https://chat-algerie-backend.onrender.com"
);

export default function ChatWindow() {

  const { user } = useAuth();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);


  const room_id = 1;


  useEffect(() => {

    if (!user) return;


    socket.emit(
      "user_online",
      user.id
    );


    socket.emit(
      "join_room",
      room_id
    );


    socket.on(
      "receive_message",
      (msg)=>{

        setMessages((prev)=>[
          ...prev,
          msg
        ]);

      }
    );


    return ()=>{

      socket.off(
        "receive_message"
      );

    };


  }, [user]);



  function sendMessage(){


    if(!message.trim()) return;


    socket.emit(
      "send_room_message",
      {

        user_id:user.id,

        room_id,

        content:message

      }
    );


    setMessage("");

  }



  return (

    <div
      style={{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        background:"#111827",
        borderRadius:"15px",
        padding:"20px",
        color:"white"
      }}
    >


      <h2>
        Chat Algerie 🇩🇿
      </h2>



      <div
        style={{
          flex:1,
          overflowY:"auto"
        }}
      >

        {messages.map((msg,index)=>(

          <div
            key={index}
            style={{
              background:"#1f2937",
              marginBottom:"10px",
              padding:"10px",
              borderRadius:"10px"
            }}
          >

            {msg.content}

          </div>

        ))}


      </div>



      <div
        style={{
          display:"flex",
          gap:"10px"
        }}
      >

        <input

          value={message}

          onChange={
            (e)=>setMessage(e.target.value)
          }

          onKeyDown={
            (e)=>{
              if(e.key==="Enter")
                sendMessage();
            }
          }

          placeholder="اكتب رسالتك..."

          style={{
            flex:1,
            padding:"12px",
            borderRadius:"10px",
            border:"none"
          }}

        />


        <button
          onClick={sendMessage}
          style={{
            background:"#00A651",
            color:"white",
            border:"none",
            padding:"10px 20px",
            borderRadius:"10px"
          }}
        >

          إرسال

        </button>


      </div>


    </div>

  );

}