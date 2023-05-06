const { ProductsModel } = require('../database/models');

const getProductsLogged = async () => {
  const products = await ProductsModel.findAll();
  return products;
};

module.exports = { getProductsLogged };