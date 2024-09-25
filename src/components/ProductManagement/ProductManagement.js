import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import productService from '../../services/productService';


const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await productService.getProducts();
        setProducts(response.data);
    };

    const handleDelete = async (id) => {
        await productService.deleteProduct(id);
        fetchProducts(); // Refresh the list after deletion
    };

    return (
        <div>
            <h1>Product Management</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductManagement;
