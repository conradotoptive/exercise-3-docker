import axios from "axios";

export const getCartItems = (userId) => {
    return axios
    .post("http://localhost:3001/api/cart/myCarts", { userId })
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const getPurchaces = (userId) => {
    return axios
    .post("http://localhost:3001/api/cart/purchaces", { userId })
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const getCartItem = (id) => {
    return axios
    .get(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const createCartItem = (user, product, quantity) => {
    return axios
    .post("http://localhost:3001/api/cart", { user, product, quantity })
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const deleteCartItem = (id) => {
    return axios
    .delete(`http://localhost:3001/api/cart/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const updateCartItem = (id, cart) => {
    return axios
    .put(`http://localhost:3001/api/cart/${id}`, { cart })
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}