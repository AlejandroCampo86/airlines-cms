import React, { useState, useEffect } from 'react';
import productService from '../../services/productService';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        sku: uuidv4(),  // Generar SKU automáticamente
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        weight: '',
        dimensions: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    // Fetch all products from the backend
    const fetchProducts = async () => {
        const fetchedProducts = await productService.getProducts();
        setProducts(fetchedProducts);
    };

    // Handle form input change for new product
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // Handle form submission for adding a new product
    const handleAddProduct = async (e) => {
        e.preventDefault();

        const formattedProduct = {
            ...newProduct,
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock),
            weight: parseFloat(newProduct.weight),
        };

        try {
            await productService.addProduct(formattedProduct);
            setNewProduct({
                sku: uuidv4(),  // Generate a new SKU for the next product,
                name: '',
                description: '',
                price: '',
                stock: '',
                category: '',
                weight: '',
                dimensions: ''
            });
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    // Handle product deletion
    const handleDeleteProduct = async (sku) => {
        try {
            await productService.deleteProduct(sku);
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div>
            <h1>Product Management</h1>

            {/* Form to add new product */}
            <Form onSubmit={handleAddProduct}>
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            type="text"
                            name="sku"
                            value={newProduct.sku}
                            placeholder="SKU"
                            disabled  // Disable input for SKU
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="name"
                            value={newProduct.name}
                            placeholder="Product Name"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="description"
                            value={newProduct.description}
                            placeholder="Description"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            name="price"
                            value={newProduct.price}
                            placeholder="Price"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            name="stock"
                            value={newProduct.stock}
                            placeholder="Stock Quantity"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Control
                            type="text"
                            name="category"
                            value={newProduct.category}
                            placeholder="Category"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="number"
                            name="weight"
                            value={newProduct.weight}
                            placeholder="Weight"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="dimensions"
                            value={newProduct.dimensions}
                            placeholder="Dimensions"
                            onChange={handleInputChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Add Product
                        </Button>
                    </Col>
                </Row>
            </Form>

            {/* Display the list of products */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Weight</th>
                        <th>Dimensions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => (
                        <tr key={product.sku}>
                            <td>{product.sku}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.category}</td>
                            <td>{product.weight} kg</td>
                            <td>{product.dimensions}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteProduct(product.sku)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductManagement;
