const {people, waifu} = require('../data');

const getPerson = (req, res) => {
  res.status(200).json({success: true, data: people});
} 

const addPerson = (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).json({success: false, msg: 'provide data'});
  }
  res.status(201).json({success: true, person: name});
}

module.exports = {
  getPerson,
  addPerson
}