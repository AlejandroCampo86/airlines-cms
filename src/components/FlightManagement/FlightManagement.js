import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import flightService from '../../services/flightService';


const FlightManagement = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        //fetchFlights();
    }, []);

    const fetchFlights = async () => {
        const response = await flightService.getFlights();
        setFlights(response.data);
    };

    return (
        <div>
            <h1>Flight Management</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Flight Number</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id}>
                            <td>{flight.number}</td>
                            <td>{flight.departure}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.inventory}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default FlightManagement;
