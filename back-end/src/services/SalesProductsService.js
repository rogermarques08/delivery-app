const { Sale } = require('../database/models');
const { Product } = require('../database/models');
const { SaleProduct } = require('../database/models');

const create = async (saleProductBody) => {
  await Sale.findByPk(saleProductBody.saleId);
  await Product.findByPk(saleProductBody.productId);

  const saleProduct = await SaleProduct.create({ ...saleProductBody });
  return saleProduct;
};

module.exports = {
  create,
};