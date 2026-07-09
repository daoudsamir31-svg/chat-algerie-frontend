import { Link } from "react-router-dom";

export default function Register() {

    return (

        <div style={{ padding: "40px" }}>

            <h1>Chat Algerie</h1>

            <h2>Register</h2>

            <input placeholder="Name" />
            <br /><br />

            <input placeholder="Email" />
            <br /><br />

            <input
                type="password"
                placeholder="Password"
            />

            <br /><br />

            <button>
                Register
            </button>

            <br /><br />

            <Link to="/">
                Login
            </Link>

        </div>

    );

}