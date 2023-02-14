const express = require('express');
const router = express.Router();

const {
  addWaifu,
  updateWaifu,
  removeWaifu
} = require('../controllers/ctrl-waifus');

router.post('/post', addWaifu);
router.put('/put/:bday', updateWaifu);
router.delete('/delete/:bday', removeWaifu);

module.exports = router;