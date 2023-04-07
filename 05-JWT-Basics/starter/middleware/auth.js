const jwt = require('jsonwebtoken');
const {CustomAPIError} = require('../errors');
const {UnauthenticatedError} = require('../errors');


const authenticationMiddlewar = async (req, res, next) => {
  const authorize = req.headers.authorization;
  if (!authorize || !authorize.startsWith('Bearer ')) {
    throw new UnauthenticatedError('there\'s no token provided');
  }
  const token = authorize.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const {id, username} = decoded;
    req.user = {id, username}
    next();
  } catch(err) {
    throw new UnauthenticatedError('unverified token');
  }
}

module.exports = authenticationMiddlewar;