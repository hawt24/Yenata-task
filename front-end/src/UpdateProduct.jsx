import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    productName: '',
    productPrice: '',
    productQuantity: '',
    productDescription: '',
  });

  // Function to fetch product data by ID
  const fetchProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/product/${id}`); // Replace with your API endpoint
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  // Fetch product data if ID is present
  useEffect(() => {
    if (id) {
      fetchProductById();
    }
  }, [id]);

  // Function to handle form submissions for updating the product data
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the product data
      await axios.put(`http://localhost:3001/product/${id}`, product); // Replace with your API endpoint
      // Redirect or display a success message after updating
      navigate('/');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md sm:w-96 w-full">
        <form onSubmit={handleUpdateProduct}>
          <h2 className="text-2xl font-bold mb-4">Update Product</h2>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Product Name"
              name="productName"
              value={product.productName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Price
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Product Price"
              name="productPrice"
              value={product.productPrice}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Quantity
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Product Quantity"
              name="productQuantity"
              value={product.productQuantity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Description
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Product Description"
              name="productDescription"
              value={product.productDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
