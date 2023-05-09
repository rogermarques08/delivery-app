const SalesService = require('../services/SalesService');

const findById = async (req, res) => {
  const { userId } = req.body;
  const findUser = await SalesService.findById(userId);
  return res.status(200).json({ findUser });
};

const createSale = async (req, res) => {
  const { userId, 
    sellerId, totalPrice, deliveryAddress, deliveryNumber, quantity, productId } = req.body;
    try {
      const newSale = await SalesService.createSale({
        userId, 
        sellerId, 
        totalPrice, 
        deliveryAddress, 
        deliveryNumber, 
        quantity, 
        productId,
      });
        return res.status(201).json(newSale);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'internal error', error: e.message });
    }
};

module.exports = {
  findById,
  createSale,
};