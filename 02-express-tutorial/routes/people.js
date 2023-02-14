const express = require('express');
const router = express.Router();
const {
  getPerson,
  addPerson
} = require('../controllers/ctrl-people');

router.route('/').get(getPerson).post(addPerson);

module.exports = router;