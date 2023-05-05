const express = require('express');
const loginUser = require('../controllers/UserController');

const routerRegister = express.Router();

routerRegister.post('/', loginUser.createNewUser);

module.exports = routerRegister;