const SalesService = require('../services/SalesService');

const createSale = async (req, res) => {
  const { userId, 
    sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = req.body;
    try {
      const newSale = await SalesService.createSale(
        userId, 
        sellerId, 
        totalPrice, 
        deliveryAddress, 
        deliveryNumber, 
        saleDate, 
        status,
        );
        return res.status(201).json({ newSale });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'internal error', error: e.message });
    }
};

module.exports = {
  createSale,
};