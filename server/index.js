const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/product');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/crud', {

});

// Import and use the product routes
app.use('/product', productRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
 