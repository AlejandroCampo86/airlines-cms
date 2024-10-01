import React, { useState, useEffect } from 'react';
import './BarsetManagement.css';
import warehouseService from '../../services/warehouseService';

const BarsetManagement = ({ barset, onClose }) => {
    const [stockItems, setStockItems] = useState([]);
    const [warehouse, setWarehouse] = useState('');
    const [stockPlan, setStockPlan] = useState('');

    useEffect(() => {
        // Aquí deberías cargar los datos del barset seleccionado
        // Esto es un ejemplo, ajusta según tu API real
        const fetchBarsetDetails = async () => {
            try {
                const response = await warehouseService.getBarsetDetails(barset._id);
                setStockItems(response.data.stockItems);
                setWarehouse(response.data.warehouse);
                setStockPlan(response.data.stockPlan);
            } catch (error) {
                console.error('Error fetching barset details:', error);
            }
        };

        fetchBarsetDetails();
    }, [barset._id]);

    const handleQuantityChange = (itemId, newQuantity) => {
        setStockItems(stockItems.map(item =>
            item.id === itemId ? { ...item, picked: newQuantity } : item
        ));
    };

    const handleSave = async () => {
        // Aquí deberías implementar la lógica para guardar los cambios
        // Esto es un ejemplo, ajusta según tu API real
        try {
            await warehouseService.updateBarsetStockItems(barset._id, stockItems);
            onClose();
        } catch (error) {
            console.error('Error updating barset:', error);
        }
    };

    return (
        <div className="barset-management">
            <h2>Packing Stock: {barset.name}</h2>
            <div className="management-header">
                <div className="select-container">
                    <label>Warehouse:</label>
                    <select value={warehouse} onChange={(e) => setWarehouse(e.target.value)}>
                        {/* Agrega opciones de almacén aquí */}
                    </select>
                </div>
                <div className="select-container">
                    <label>Stock Plan:</label>
                    <select value={stockPlan} onChange={(e) => setStockPlan(e.target.value)}>
                        {/* Agrega opciones de plan de stock aquí */}
                    </select>
                </div>
            </div>
            <table className="stock-table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Product</th>
                        <th>Planned</th>
                        <th>Current</th>
                        <th>Picked</th>
                        <th>Packed</th>
                    </tr>
                </thead>
                <tbody>
                    {stockItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.code}</td>
                            <td>{item.product}</td>
                            <td>{item.planned}</td>
                            <td>{item.current}</td>
                            <td>
                                <input
                                    type="number"
                                    value={item.picked}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                />
                            </td>
                            <td>{item.packed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BarsetManagement;