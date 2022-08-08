import React, { useState } from "react";
const GeneralContext = React.createContext();

const GeneralProvider = props => {
    const [token, setToken] = useState([]);

    return (
        <GeneralContext.Provider
            value={{
                token,
                setToken
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    );
};

export { GeneralContext, GeneralProvider };
