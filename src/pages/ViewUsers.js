import React, { useContext, useEffect, useState } from "react";
import UsersContainer from "../components/UsersContainer";
import { createUser } from "../api/index.js";
import { GeneralContext } from "../context/GeneralContext";
import { useNavigate } from "react-router-dom";

function ViewUsers() {
    const [userName, setUserName] = useState("");
    const { setUsers, token } = useContext(GeneralContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const handleClick = async() => {
        const resp = await createUser(userName);
        setUsers((prev) => [...prev, resp]);
        setUserName("");
    }

    return (
        <div>
            <div>Users List</div>
            <UsersContainer />
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleClick} disabled={!userName || userName.length < 3} >Create User</button>
        </div>
    );
}

export default ViewUsers;
