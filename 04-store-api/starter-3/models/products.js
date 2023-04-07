const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name must be provided']
  },
  price: {
    type: Number,
    required: [true, 'price must be provided']
  },
  featured: {
    type: String,
    default: false
  },
  rating: {
    type: Number,
    default: 3
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not an option'
    }
  }
});

module.exports = mongoose.model('product', productSchema);