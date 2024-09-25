import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductManagement from './components/ProductManagement/ProductManagement';
import FlightManagement from './components/FlightManagement/FlightManagement';
import CrewManagement from './components/CrewManagement/CrewManagement';
import Reports from './pages/Reports/Reports';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/flights" element={<FlightManagement />} />
          <Route path="/crew" element={<CrewManagement />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
