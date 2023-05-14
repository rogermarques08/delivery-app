const express = require('express');
const UserController = require('../controllers/UserController');
// const adminAuth = require('../middlewares/adminAuth');
const AdminController = require('../controllers/AdminController');
const adminMiddleware = require('../middlewares/adminAuth');

const AdminRouter = express.Router();

AdminRouter.post('/', adminMiddleware, UserController.createNewUser);
AdminRouter.delete('/:id', adminMiddleware, AdminController.adminRemove);
AdminRouter.get('/', adminMiddleware, AdminController.getAllUsers);

module.exports = AdminRouter;