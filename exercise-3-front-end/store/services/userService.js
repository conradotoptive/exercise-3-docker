import axios from 'axios';

export const logIn = (mail, password) => {
    return axios
    .post("http://localhost:3001/api/auth/login", { mail, password })
    .then((response) => {
        return response;
    })
    .catch(function (err){
        console.log(err);
        return err.response.status;
    })
}

export const register = (userName, mail, password) => {
    return axios
    .post("http://localhost:3001/api/auth/register", { userName, mail, password })
    .then((response) => {
        return response;
    })
    .catch(function (err){
        console.log(err);
        return err.response.status;
    })
}

export const updateWallet = (id, user, quantity ) => {
    return axios
    .put(`http://localhost:3001/api/auth/wallet/${id}`, { user, quantity })
    .then((response) => {
        return response;
    })
    .catch(function (err){
        console.log(err);
        return err.response.status;
    })
}
