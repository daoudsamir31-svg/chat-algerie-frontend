import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleRegister() {

        try {

            await api.post("/auth/signup", {

                name,
                email,
                password

            });

            navigate("/login");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration failed"
            );

        }

    }

    return (

        <div style={{ padding: "40px", maxWidth: "400px" }}>

            <h1>Chat Algerie</h1>

            <h2>Register</h2>

            <input
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={handleRegister}>
                Register
            </button>

            <br /><br />

            <Link to="/login">
                Login
            </Link>

            <br /><br />

            <p style={{color:"red"}}>
                {error}
            </p>

        </div>

    );

}