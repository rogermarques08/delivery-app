const { Router } = require('express');
const isLogged = require('../middlewares/isLogged');
const { getProductsLogged } = require('../controllers/customerController');

const router = Router();

router.get('/products', isLogged, getProductsLogged);
router.get('/checkout', isLogged);

module.exports = router;