import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Aeronautical CMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/warehouse">
                            <Nav.Link>Warehouse</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/flights">
                            <Nav.Link>Flights</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/crew">
                            <Nav.Link>Crew</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reports">
                            <Nav.Link>Reports</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
