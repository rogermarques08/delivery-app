const saleProductService = require('../services/SalesProductsService');

const create = async (req, res) => {
  const { saleId, productId, quantity } = req.body;
  try {
    const saleProduct = await saleProductService.create({ 
      saleId,
      productId,
      quantity,
     });

    return res.status(201).json(saleProduct);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};

module.exports = {
  create,
}; 