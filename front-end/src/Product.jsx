import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://mern-product-mangmenent.onrender.com/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://mern-product-mangmenent.onrender.com/product/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Link
          to="/create"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded block w-full text-center"
        >
          Add New Product
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">
              {product.productName}
            </h3>
            <p className="text-gray-600 mb-2">{product.productDescription}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-blue-500 font-semibold">
                  Price:{product.productPrice} Birr
                </span>
                <span className="text-gray-700 ml-4">
                  Quantity: {product.productQuantity}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to={`/update/${product._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
              >
                Edit
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
