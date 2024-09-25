/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/reports';

// Get all reports
const getReports = () => {
    return axios.get(API_URL);
};

// Get a report by flight ID
const getReportByFlight = (flightId) => {
    return axios.get(`${API_URL}/flight/${flightId}`);
};

// Generate a new report for a specific flight
const generateReport = (flightId) => {
    return axios.post(`${API_URL}/generate`, { flightId });
};

// Get sales summary report
const getSalesSummary = () => {
    return axios.get(`${API_URL}/sales-summary`);
};

export default {
    getReports,
    getReportByFlight,
    generateReport,
    getSalesSummary,
};
