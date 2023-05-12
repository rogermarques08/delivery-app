const { Router } = require('express');
const SellerController = require('../controllers/SalesController');

const router = Router();

// Rota para pegar todas as vendas do vendedor
router.get('/ordered/:id', SellerController.getAllSalesSeller);

module.exports = router;