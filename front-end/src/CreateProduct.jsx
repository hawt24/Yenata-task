import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    if (!productName || !productPrice || !productQuantity || !productDescription) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    const newProduct = {
      productName,
      productPrice,
      productQuantity,
      productDescription,
    };

    axios.post("http://localhost:3001/product", newProduct)
      .then(() => {
        setShowSuccessMessage(true);
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
        setProductDescription('');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md sm:w-96 w-full">
        <form onSubmit={Submit}>
          <h2 className="text-2xl font-bold mb-4">Add product</h2>
          {showSuccessMessage && (
            <div className="text-green-600 font-semibold text-4xl mb-4">
              Product added successfully!
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 font-semibold mb-4">{errorMessage}</div>
          )}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
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
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
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
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
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
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <button
              className="w-full py-2 px-4 bg-blue-500 hover.bg-blue-600 text-white rounded-md font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="mt-4">
            <Link to="/" className="text-blue-500 hover:text-blue-600 font-semibold text-lg">
              Go back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
