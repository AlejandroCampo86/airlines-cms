import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import flightService from '../../services/flightService';

const FlightManagement = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null); // Estado para vuelo seleccionado

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = async () => {
        const response = await flightService.getFlights();
        setFlights(response.data);
    };

    // Function to handle flight selection
    const handleSelectFlight = (flight) => {
        setSelectedFlight(flight); // Set selected flight
    };

    // Formatting date and time for display
    const formatDate = (date) => {
        return new Date(date).toLocaleString();
    };

    return (
        <div>
            <h1>Flight Management</h1>

            {/* Table showing flights */}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Inventory</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id}>
                            <td>{flight.number}</td>
                            <td>{flight.departure}</td>
                            <td>{flight.destination}</td>
                            <td>{formatDate(flight.departureDate)}</td>
                            <td>{formatDate(flight.arrivalDate)}</td>
                            <td>{flight.inventory}</td>
                            <td>
                                <Button onClick={() => handleSelectFlight(flight)}>
                                    Select Flight
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Show selected flight details */}
            {selectedFlight && (
                <div className="mt-4">
                    <h3>Selected Flight: {selectedFlight.number}</h3>
                    <p>Departure: {selectedFlight.departure}</p>
                    <p>Destination: {selectedFlight.destination}</p>
                    <p>Departure Time: {formatDate(selectedFlight.departureDate)}</p>
                    <p>Arrival Time: {formatDate(selectedFlight.arrivalDate)}</p>
                    <p>Inventory: {selectedFlight.inventory}</p>
                </div>
            )}
        </div>
    );
};

export default FlightManagement;
