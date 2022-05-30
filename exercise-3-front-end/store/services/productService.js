import axios from 'axios';

export const getActiveProducts = () => {
    return axios
    .get("http://localhost:3001/api/products")
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const getAllProducts = () => {
    return axios
    .get("http://localhost:3001/api/products/all")
    .then((response) => {
       return response.data;
    })
    .catch((err) => console.log(err));
}

export const getOneProduct = (id) => {
    return axios
    .get(`http://localhost:3001/api/products/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch((err) => console.log(err));
}

export const updateProductState = (id) => {
    return axios
    .put(`http://localhost:3001/api/products/${id}`)
    .then((response) => {
        return response.data;
    })
    .catch ((err) => console.log(err));
}

export const updateProductQuantity = (id, product) => {
    return axios
    .put(`http://localhost:3001/api/products/quantity/${id}`, { product })
    .then((response) => {
        return response.data;
    })
    .catch(function (err){
        console.log(err);
        return err.response.status;
    })
}