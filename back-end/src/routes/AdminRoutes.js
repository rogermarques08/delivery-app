const express = require('express');
const UserController = require('../controllers/UserController');
const isLogged = require('../middlewares/isLogged');

const AdminRouter = express.Router();

AdminRouter.post('/', isLogged, UserController.createNewUser);

module.exports = AdminRouter;