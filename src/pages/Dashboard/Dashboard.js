import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Row>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Total Sales</Card.Title>
                            <Card.Text>$25,000</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Products in Stock</Card.Title>
                            <Card.Text>350 items</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Active Flights</Card.Title>
                            <Card.Text>12 flights</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Crew Members</Card.Title>
                            <Card.Text>150 members</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
