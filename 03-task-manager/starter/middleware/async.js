const {createCustomError} = require('../errors/custom-error');

const asyncWrapper = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      if (err.name === 'CastError') {
        console.log(err)
      return next(createCustomError(`we found no task with an id of ${err.value}`, 404))
      // return res.status(404).json({msg: `we found no task with an id of ${taskID}`});
      }
      next(err);
    }
  } 
}

module.exports = asyncWrapper;