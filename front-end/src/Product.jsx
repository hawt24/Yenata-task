import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';



const Product = () => {
  const [products, setProducts] = useState([]);

  // Function to fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/product'); // Replace with your backend API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/product/${productId}`);
      // After deleting the product, fetch the updated list of products
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link to="/create" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Add +
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
            <p className="text-gray-600 mb-2">{product.productDescription}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-semibold">{product.productPrice}</span>
              <span className="text-gray-700">{product.productQuantity}</span>
            </div>
            <div className="mt-4">
              <Link to={`/update/${product._id}`}  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2">
                <BiEdit/>
              </Link>
              <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
              onClick={() => deleteProduct(product._id)}
              >
                <AiFillDelete/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
