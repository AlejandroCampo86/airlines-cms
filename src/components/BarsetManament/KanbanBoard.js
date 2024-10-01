import React, { useState, useEffect } from 'react';
import './KanbanBoard.css';
import warehouseService from '../../services/warehouseService';
import BarsetManagement from './BarsetManagement'; // Nuevo componente que crearemos

const KanbanBoard = () => {
    const [columns, setColumns] = useState({
        awaiting: { name: 'Awaiting Stock Checked', items: [] },
        stockChecked: { name: 'Stock Checked', items: [] },
        incomplete: { name: 'Incomplete', items: [] },
        packed: { name: 'Packed', items: [] },
        dispatched: { name: 'Dispatched', items: [] }
    });
    const [selectedBarset, setSelectedBarset] = useState(null);

    useEffect(() => {
        const fetchBarsets = async () => {
            try {
                const response = await warehouseService.getBarsets();
                const barsetsData = response.data;

                const newColumns = {
                    awaiting: { name: 'Awaiting Stock Checked', items: [] },
                    stockChecked: { name: 'Stock Checked', items: [] },
                    incomplete: { name: 'Incomplete', items: [] },
                    packed: { name: 'Packed', items: [] },
                    dispatched: { name: 'Dispatched', items: [] }
                };

                barsetsData.forEach(barset => {
                    if (newColumns[barset.stockStatus]) {
                        newColumns[barset.stockStatus].items.push(barset);
                    } else {
                        console.warn(`Stock status "${barset.stockStatus}" no coincide con ninguna columna.`);
                    }
                });
                setColumns(newColumns);
            } catch (error) {
                console.error('Error fetching barsets:', error);
            }
        };

        fetchBarsets();
    }, []);

    const handleBarsetClick = (barset) => {
        setSelectedBarset(barset);
    };

    const handleCloseBarsetManagement = () => {
        setSelectedBarset(null);
    };

    if (selectedBarset) {
        return <BarsetManagement barset={selectedBarset} onClose={handleCloseBarsetManagement} />;
    }

    return (
        <div className="kanban-board">
            {Object.entries(columns).map(([id, column]) => (
                <div key={id} className="kanban-column">
                    <h5>{column.name}</h5>
                    <div className="kanban-items">
                        {column.items.map((item) => (
                            <div key={item._id} className="kanban-item" onClick={() => handleBarsetClick(item)}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KanbanBoard;