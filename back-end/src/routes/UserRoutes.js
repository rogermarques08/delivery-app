const express = require('express');
const loginUser = require('../controllers/UserController');

const router = express.Router();

router.post('/', loginUser.login);

module.exports = router;