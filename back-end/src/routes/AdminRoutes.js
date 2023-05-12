const express = require('express');
const UserController = require('../controllers/UserController');
const adminAuth = require('../middlewares/adminAuth');
const AdminController = require('../controllers/AdminController');

const AdminRouter = express.Router();

AdminRouter.post('/', adminAuth, UserController.createNewUser);
AdminRouter.delete('/:id', adminAuth, AdminController.adminRemove);

module.exports = AdminRouter;