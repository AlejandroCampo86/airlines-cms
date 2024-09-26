import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import crewService from '../../services/crewService';

const CrewManagement = () => {
    const [crewMembers, setCrewMembers] = useState([]);
    const [newCrewMember, setNewCrewMember] = useState({ name: '', role: '', flight: '', status: 'Available' });
    const [selectedCrew, setSelectedCrew] = useState(null);

    // Fetch crew members from the backend
    useEffect(() => {
        fetchCrewMembers();
    }, []);

    const fetchCrewMembers = async () => {
        try {
            const response = await crewService.getCrewMembers();
            setCrewMembers(response.data);
        } catch (error) {
            console.error("Error fetching crew members", error);
        }
    };

    // Handle form input change for new crew members
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCrewMember((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Add a new crew member
    const handleAddCrewMember = async (e) => {
        e.preventDefault();
        try {
            await crewService.addCrewMember(newCrewMember);
            fetchCrewMembers(); // Refresh the crew list after adding
            setNewCrewMember({ name: '', role: '', flight: '', status: 'Available' });
        } catch (error) {
            console.error("Error adding crew member", error);
        }
    };

    // Handle selection of a crew member
    const handleSelectCrew = (member) => {
        setSelectedCrew(member);
    };

    // Delete a crew member
    const handleDeleteCrewMember = async (id) => {
        try {
            await crewService.deleteCrewMember(id);
            fetchCrewMembers(); // Refresh the list after deletion
            setSelectedCrew(null); // Deselect if the deleted crew was selected
        } catch (error) {
            console.error("Error deleting crew member", error);
        }
    };

    return (
        <div>
            <h1>Crew Management</h1>

            {/* Form to add a new crew member */}
            <Form onSubmit={handleAddCrewMember} className="mb-4">
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            name="name"
                            value={newCrewMember.name}
                            placeholder="Crew Name"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="role"
                            value={newCrewMember.role}
                            placeholder="Crew Role"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="flight"
                            value={newCrewMember.flight}
                            placeholder="Assigned Flight"
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Add Crew Member
                        </Button>
                    </Col>
                </Row>
            </Form>

            {/* Table showing crew members */}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Assigned Flight</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {crewMembers.map((member) => (
                        <tr key={member._id}>
                            <td>{member.name}</td>
                            <td>{member.role}</td>
                            <td>{member.flight}</td>
                            <td>{member.status}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleSelectCrew(member)}>Details</Button>{' '}
                                <Button variant="danger" onClick={() => handleDeleteCrewMember(member._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Show selected crew details */}
            {selectedCrew && (
                <div className="mt-4">
                    <h3>Crew Member: {selectedCrew.name}</h3>
                    <p>Role: {selectedCrew.role}</p>
                    <p>Assigned Flight: {selectedCrew.flight}</p>
                    <p>Status: {selectedCrew.status}</p>
                </div>
            )}
        </div>
    );
};

export default CrewManagement;
