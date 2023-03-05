const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const query = req.query;
  const products = await Product.find().sort('name').select('name price').limit(10).skip(5);
  res.status(200).json({nbhits: products.length, products});
}

const getAllProducts = async (req, res) => {
  const {featured, company, name, sort, fields} = req.query;
  const queryObject = {};
  
  if (featured) queryObject.featured = featured;
  if (company) queryObject.company = company;
  if (name) queryObject.name = {$regex: name, $options: 'i'};
  
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList)
  } else {
    result = result.sort('createdAt');
  }
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result.select(fieldsList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.limit(limit).skip(skip);
  
  const products = await result;
  res.status(200).json({products, nbhits: products.length});
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}