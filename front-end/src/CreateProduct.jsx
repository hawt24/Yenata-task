import { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {

  const [productName,setproductName]=useState()
  const [productPrice,setproductPrice]=useState()
  const [productQuantity,setproductQuantity]=useState()
  const [productDescription,setproductDescription]=useState()

  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/product",{productName,productPrice,productQuantity,productDescription})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))

  }





  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md sm:w-96 w-full">
        <form onSubmit={Submit}>
          <h2 className="text-2xl font-bold mb-4">Add product</h2>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md shadow-sm"
              placeholder="Product Name"
              onChange={(e)=>setproductName(e.target.value)}
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
              onChange={(e)=>setproductPrice(e.target.value)}
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
              onChange={(e)=>setproductQuantity(e.target.value)}
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
              onChange={(e)=>setproductDescription(e.target.value)}
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

export default CreateProduct;
