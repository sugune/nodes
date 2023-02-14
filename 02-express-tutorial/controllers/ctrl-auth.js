const {people, waifu} = require('../data');

const login = (req, res) => {
  const {name} = req.body;
  if (name) {
    return res.status(200).send(`i love ${name}`);
  }
  res.status(401).send('provide a name');
} 

module.exports = {login}