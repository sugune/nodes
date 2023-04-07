const Product = require('../models/products');

const getAllProducts = async (req, res) => {
  const {company, name, featured, sort, fields, numericFilters} = req.query;
  
  let queryObject = {}
  if (company) queryObject.company = company;
  if (name) queryObject.name = {$regex: name, $options: 'i'}
  if (featured) queryObject.featured = featured;
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '<': '$lt',
      '<=': '$lte',
      '=': '$eq'
    }
    const regex = /\b(>|>=|<|<=|=)\b/g
    let filters = numericFilters.replace(regex, (match) => `-${operatorMap[match]}-`)
    filters = filters.split(',').forEach(item => {
      const [field, operator, value] = item.split('-');
      queryObject[field] = {[operator]: value}
    });
    console.log(numericFilters)
  }
  
  console.log(queryObject)
  let result = Product.find(queryObject);
  
  if (sort) {
    const sortList = sort.split(',').join(' ');
    console.log(sort);
    result.sort(sortList);
  }
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    console.log(fieldsList);
    result.select(fieldsList);
  }
  
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;
  result = result.limit(limit).skip(skip);
  
  const products = await result;
  
  res.status(200).json({nbHits: products.length, products});
}

const getAllProductsStatic = async (req, res) => {
  res.send('all products... static');
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}