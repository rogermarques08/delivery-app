const { Router } = require('express');
const SalesController = require('../controllers/SalesController');
const isLogged = require('../middlewares/isLogged');
const { getProductsLogged } = require('../controllers/customerController');
const SalesProductsController = require('../controllers/SalesProductsController');

const router = Router();

router.get('/products', isLogged, getProductsLogged);
router.post('/checkout', isLogged, SalesController.createSale);
router.post('/orders', SalesProductsController.create);

router.get('/sellers', SalesController.getAllIdsSellers);

module.exports = router;