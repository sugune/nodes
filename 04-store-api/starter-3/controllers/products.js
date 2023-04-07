const Product = require('../models/products');

const getAllProducts = async (req, res) => {
  const {name, company, featured, sort, fields, numericFilters} = req.query
  const queryObject = {}
  if (company) queryObject.company = company;
  if (featured) queryObject.featured = featured
  if (name) queryObject.name = {$regex: name, $options: 'i'}
  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '<': '$lt',
      '<=': '$lte',
      '=': '$eq'
    }
    const regex = /\b(>|>=|<|<=|=)\b/g
    // price>22,rating>=5
    let filters = numericFilters.replace(regex, (match) => `-${operatorMap[match]}-`);
    // price-$gt-22,rating-$gte-5
    filters = filters.split(',').forEach(item => {
      const [field, operator, value] = item.split('-');
      queryObject[field] = {[operator]: Number(value)}
    });
  }
  
  let result = Product.find(queryObject);
  
  if (sort) {
    // name,-price
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  }
  if (fields) {
    // name,price,featured
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }
  
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.limit(limit).skip(skip);
  
  const products = await result;
  res.status(200).json({nbHits: products.length, products})
}

module.exports = {
  getAllProducts
}