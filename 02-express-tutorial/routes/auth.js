const express = require('express');
const router = express.Router();
const {login} = require('../controllers/ctrl-auth');

router.post('/', login);

module.exports = router;