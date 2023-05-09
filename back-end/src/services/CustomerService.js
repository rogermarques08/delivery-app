const { Product } = require('../database/models');

const getProductsLogged = async () => {
  const products = await Product.findAll();
  return products;
};

module.exports = { getProductsLogged };