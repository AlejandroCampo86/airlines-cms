/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/barsets`;

// Obtener todos los barsets
const getBarsets = () => {
    return axios.get(API_URL);
};

// Obtener un barset por ID
const getBarsetById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Agregar un nuevo barset
const addBarset = (barsetData) => {
    return axios.post(API_URL, barsetData);
};

// Actualizar un barset por ID
const updateBarset = (id, updatedData) => {
    return axios.put(`${API_URL}/${id}`, updatedData);
};

// Eliminar un barset por ID
const deleteBarset = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getBarsets,
    getBarsetById,
    addBarset,
    updateBarset,
    deleteBarset,
};
