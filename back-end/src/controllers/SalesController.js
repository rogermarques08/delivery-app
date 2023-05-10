const SalesService = require('../services/SalesService');
const SalesProductsService = require('../services/SalesProductsService');

const findById = async (req, res) => {
  const { userId } = req.body;
  const findUser = await SalesService.findById(userId);
  return res.status(200).json({ findUser });
};

const createSale = async (req, res) => {
  const { userId, 
    sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = req.body;
    try {
      const newSale = await SalesService.createSale({ userId,
        sellerId,
        totalPrice,
        deliveryAddress, 
        deliveryNumber, 
      });
      // console.log('salesController ==>', newSale.id);

      const newProductsSales = products.map(async (product) => 
       SalesProductsService.create(product, newSale.id));

       const productsSales = await Promise.all(newProductsSales);
      
        return res.status(201).json({ ...newSale.dataValues, productsSales });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'internal error', error: e.message });
    }
};
const getAllIdsSellers = async (req, res) => {
  const getAll = await SalesService.getAllIdsSellers();
  return res.status(200).json(getAll);
};

const saleById = async (req, res) => {
  try {
    const { id } = req.params;
    const byId = await SalesService.saleById(id);
    if (!byId) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(byId);
  } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'internal error', error: e.message });
    }
};

module.exports = {
  findById,
  createSale,
  getAllIdsSellers,
  saleById,
};