import React, { useContext, useState } from "react";
import { loginAsUser } from "../api/index.js";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userName, setUserName] = useState("");
    const { setToken } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleClick = async() => {
        const resp = await loginAsUser(userName);
        if (resp.token) {
            setToken(resp.token);
            navigate('/profile');
        }
    }

    return (
        <div>
            <div>Login</div>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <br></br>
            <button onClick={handleClick} disabled={!userName || userName.length < 3} >Login</button>
        </div>
    );
}

export default Login;
