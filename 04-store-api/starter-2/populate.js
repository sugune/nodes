require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/products.js');
const jsonProducts = require('./products.json');
const connectDB = require('./db/connect');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('success');
    process.exit(0)
  } catch(err) {
    console.log(err)
    process.exit(0)
  }
}

start();