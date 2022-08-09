import React from "react";

function User(props) {
    const { user } = props

    return (
        <div>
            <div>Id: {user.id}</div>
            <div>Name: {user.name}</div>
        </div>
    );
}

export default User;
