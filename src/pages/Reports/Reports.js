import React, { useState, useEffect } from 'react';
import reportService from '../../services/reportService';
import { Table, Card, Button } from 'react-bootstrap';


const Reports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        //fetchReports();
    }, []);

    const fetchReports = async () => {
        const response = await reportService.getReports();
        setReports(response.data);
    };

    return (
        <div>
            <h1>Reports</h1>
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>Sales and Crew Reports by Flight</Card.Title>
                    <Card.Text>
                        Below is a list of flight reports, including sales performance and crew details.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>Sales</th>
                        <th>Crew Members</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.flightNumber}</td>
                            <td>${report.sales.toFixed(2)}</td>
                            <td>{report.crewCount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="primary" onClick={fetchReports}>
                Refresh Reports
            </Button>
        </div>
    );
};

export default Reports;
