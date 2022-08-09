import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import User from "./User";

function UsersContainer() {
    const { users } = useContext(GeneralContext);

    return (
        <div>
            {users.map((elem) => {
                return <User key={elem.name} user={elem} />
            })}
        </div>
    );
}

export default UsersContainer;
