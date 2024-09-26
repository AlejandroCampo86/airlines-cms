import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductManagement from './components/ProductManagement/ProductManagement';
import FlightManagement from './components/FlightManagement/FlightManagement';
import CrewManagement from './components/CrewManagement/CrewManagement';
import Reports from './pages/Reports/Reports';
import { Container } from 'react-bootstrap';
import './App.css';  // Import the CSS file for background styling

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="app-background">  {/* Apply the background styling */}
        <Container className="mt-4 content-container">  {/* Separate container for content */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductManagement />} />
            <Route path="/flights" element={<FlightManagement />} />
            <Route path="/crew" element={<CrewManagement />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Container>
      </div>
    </Router >
  );
}

export default App;
