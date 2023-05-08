const customerService = require('../services/CustomerService');

const getProductsLogged = async (_req, res) => {    
  const products = await customerService.getProductsLogged();
  console.log(products);
  
  return res.status(200).json(products);
};

module.exports = { getProductsLogged };