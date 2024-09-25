/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://192.168.0.101:5000/api/products';

const getProducts = () => {
    return axios.get(API_URL);
};

const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getProducts,
    deleteProduct,
};
