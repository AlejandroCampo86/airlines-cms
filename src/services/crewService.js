/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/crew';

const getCrewMembers = () => {
    return axios.get(API_URL);
};

const addCrewMember = (newMember) => {
    return axios.post(API_URL, newMember);
};

const deleteCrewMember = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getCrewMembers,
    addCrewMember,
    deleteCrewMember,
};
