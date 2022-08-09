import React, { useContext } from "react";
import { deleteAccount } from "../api/index.js";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";

function DeleteUser() {
    const { token, setToken } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleClick = async() => {
        await deleteAccount(token);
        setToken(null);
        navigate('/login');
    }

    return (
        <div>
            <div>Users Profile</div>
            <button onClick={handleClick}>Delete Account</button>
        </div>
    );
}

export default DeleteUser;
