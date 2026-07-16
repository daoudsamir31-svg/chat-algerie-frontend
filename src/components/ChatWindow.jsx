import { useState } from "react";

export default function ChatWindow() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "مرحبا بكم في Chat Algerie 🇩🇿",
      user: "Admin"
    }
  ]);


  function sendMessage() {

    if (!message.trim()) return;


    setMessages([
      ...messages,
      {
        text: message,
        user: "Moi"
      }
    ]);


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
      }}
    >


      <h2>
        Chat Algerie 🇩🇿
      </h2>


      {/* Messages */}

      <div
        style={{
          flex:1,
          overflowY:"auto",
          marginBottom:"15px",
        }}
      >

        {messages.map((msg,index)=>(

          <div
            key={index}
            style={{
              marginBottom:"10px",
              background:"#1f2937",
              padding:"10px",
              borderRadius:"10px",
            }}
          >

            <strong>
              {msg.user}
            </strong>

            <br />

            {msg.text}

          </div>

        ))}


      </div>


      {/* Input */}

      <div
        style={{
          display:"flex",
          gap:"10px",
        }}
      >

        <input

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          placeholder="اكتب رسالتك..."

          style={{
            flex:1,
            padding:"12px",
            borderRadius:"10px",
            border:"none",
            outline:"none",
          }}

          onKeyDown={(e)=>{

            if(e.key==="Enter")
              sendMessage();

          }}

        />


        <button

          onClick={sendMessage}

          style={{
            background:"#00A651",
            color:"white",
            border:"none",
            padding:"0 20px",
            borderRadius:"10px",
            cursor:"pointer",
          }}

        >

          إرسال

        </button>


      </div>


    </div>

  );

}