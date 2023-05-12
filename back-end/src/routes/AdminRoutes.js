const express = require('express');
const UserController = require('../controllers/UserController');
const isLogged = require('../middlewares/isLogged');
const AdminController = require('../controllers/AdminController');

const AdminRouter = express.Router();

AdminRouter.post('/', isLogged, UserController.createNewUser);
AdminRouter.delete('/:id', isLogged, AdminController.adminRemove);

module.exports = AdminRouter;