import React, { useState, useEffect } from 'react';
import crewService from '../../services/crewService';
import { Table, Button } from 'react-bootstrap';


const CrewManagement = () => {
    const [crewMembers, setCrewMembers] = useState([]);
    const [newCrewMember, setNewCrewMember] = useState({ name: '', role: '', flight: '' });

    useEffect(() => {
        fetchCrewMembers();
    }, []);

    // Fetch crew members from the API
    const fetchCrewMembers = async () => {
        try {
            const response = await crewService.getCrewMembers();
            setCrewMembers(response.data);
        } catch (error) {
            console.error("Error fetching crew members", error);
        }
    };

    // Handle form input change
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
            setNewCrewMember({ name: '', role: '', flight: '' });
            fetchCrewMembers(); // Refresh crew list after adding
        } catch (error) {
            console.error("Error adding crew member", error);
        }
    };

    // Delete a crew member
    const handleDeleteCrewMember = async (id) => {
        try {
            await crewService.deleteCrewMember(id);
            fetchCrewMembers(); // Refresh the list after deletion
        } catch (error) {
            console.error("Error deleting crew member", error);
        }
    };

    return (
        <div>
            <h1>Crew Management</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Flight</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {crewMembers.map((member) => (
                        <tr key={member.id}>
                            <td>{member.name}</td>
                            <td>{member.role}</td>
                            <td>{member.flight}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDeleteCrewMember(member.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CrewManagement;
