const getProductsLogged = async (_req, res) => {    
  const products = [];
  
  // return res.status(200).json(products);
  return res.status(200).json({ message: "Products!!!" });
};

module.exports = { getProductsLogged };