const saleProductService = require('../services/SalesProductsService');

const create = async (req, res) => {
  try {
    const { saleProductBody } = req.body;
    const saleProduct = await saleProductService.create({ saleProductBody });

    return res.status(201).json(saleProduct);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};

module.exports = {
  create,
}; 