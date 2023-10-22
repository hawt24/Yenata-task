const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/product');
const dotenv = require('dotenv').config();

console.log(dotenv.parsed)

const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI, {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS, 
});

app.use('/product', productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT + '.... ');
});
