import axios from "axios";

const generateURL = (path, queryVars) => {
    let fullEndpoint = `${process.env.REACT_APP_API_ENDPOINT}/${path}`;
    if (queryVars) {
        queryVars.forEach((elem, index) => { fullEndpoint += `${index === 0 ? '?' : '&'}${elem.name}=${elem.value}` })
    }
    return fullEndpoint;
}

export const getUsers = async () => {
    try {
        const resp = await axios.get(generateURL('users'));
        return resp.data;
    } catch(e) {
        return false;
    }
}

export const createUser = async (name) => {
    try {
        const resp = await axios.post(generateURL('users'), {name});
        return resp.data;
    } catch(e) {
        return false;
    }
}

export const loginAsUser = async (name) => {
    try {
        const resp = await axios.post(generateURL('users/login'), {name});
        return resp.data;
    } catch(e) {
        return false;
    }
}

export const deleteAccount = async (token) => {
    try {
        const resp = await axios.delete(generateURL('users'), {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return resp.data;
    } catch(e) {
        return false;
    }
}
