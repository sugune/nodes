const {people, waifu} = require('../data');

const addWaifu = (req, res) => {
  const {name, birthday} = req.body;
  if (!name) {
    return res.status(400).json({success: false, msg: 'please provide a data'});
  }
  res.status(200).json({success: true, data: [...waifu, {birthday: birthday, name: name}]});
}

const updateWaifu = (req, res) => {
  const {bday} = req.params;
  const {name} = req.body;
  
  const person = waifu.find((wife) => wife.birthday === Number(bday));
  
  if (!person) {
    return res.status(400).json({success: false, msg: `there\'s no waifu with a birthday of ${bday}`});
  }
  
  const newWaifu = waifu.map((wife) => {
    if (wife.name === person.name) {
      wife.name = name;
    }
    return wife
  })
  
  res.status(200).json({success: true, data: newWaifu});
  
} 

const removeWaifu = (req, res) => {
  const person = waifu.find(wife => wife.birthday === Number(req.params.bday));
  if (!person) {
    return res.status(404).json({success: false, msg: `there\'s no waifu with a birthday of ${req.params.bday}`});
  }
  
  const newWaifu = waifu.filter(wife => wife.birthday !== Number(req.params.bday));
  res.status(200).json({success: true, data: newWaifu});
  
}

module.exports = {
  addWaifu,
  updateWaifu,
  removeWaifu
}