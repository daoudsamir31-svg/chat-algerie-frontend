import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleLogin() {

        try {

            const res = await api.post("/auth/login", {

                email,
                password

            });

            login(
                res.data.user,
                res.data.token
            );

            navigate("/home");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Login failed"
            );

        }

    }

    return (

        <div style={{ padding: "40px", maxWidth: "400px" }}>

            <h1>Chat Algerie</h1>

            <h2>Login</h2>

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

            <button onClick={handleLogin}>
                Login
            </button>

            <br /><br />

            <Link to="/register">
                Create account
            </Link>

            <br /><br />

            <p style={{color:"red"}}>
                {error}
            </p>

        </div>

    );

}