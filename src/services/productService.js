/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://192.168.0.101:5000/api/products';

// Fetch all products
const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log("Products fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error.message);
        throw new Error("Could not fetch products. Please try again later.");
    }
};

// Add a new product
const addProduct = async (productData) => {
    try {
        const response = await axios.post(API_URL, productData);
        console.log("Product added successfully:", response);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error.response?.data || error.message);
        throw new Error("Could not add the product. Please check the details and try again.");
    }
};

// Delete a product by SKU
const deleteProduct = async (sku) => {
    try {
        await axios.delete(`${API_URL}/${sku}`);
        console.log("Product deleted successfully!");
    } catch (error) {
        console.error("Error deleting product:", error.response?.data || error.message);
        throw new Error("Could not delete the product. Please try again.");
    }
};

export default {
    getProducts,
    addProduct,
    deleteProduct,
};
