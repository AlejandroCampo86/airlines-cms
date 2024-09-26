/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://192.168.0.101:5000/api/flights';

// Get all flights
const getFlights = () => {
    return axios.get(API_URL);
};

// Get a flight by ID
const getFlightById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Add a new flight
const addFlight = (flightData) => {
    return axios.post(API_URL, flightData);
};

// Update an existing flight by ID
const updateFlight = (id, updatedData) => {
    return axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete a flight by ID
const deleteFlight = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getFlights,
    getFlightById,
    addFlight,
    updateFlight,
    deleteFlight,
};
