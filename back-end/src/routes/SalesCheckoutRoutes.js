const express = require('express');
const SalesController = require('../controllers/SalesController');

const routerNewSales = express.Router();

routerNewSales.post('/', SalesController.createSale);

module.exports = routerNewSales;