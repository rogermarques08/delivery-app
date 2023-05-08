const { Sale } = require('../database/models');
const { User } = require('../database/models');

// const findByIdUser = async (userId) => {
//   const findUser = await User.findByPk({ where: userId });
//   return findUser;
// };

// const findByIdSeller = async (sellerId) => {
//   const findSeller = await User.findByPk({ where: sellerId });
//   return findSeller;
// };

const createSale = async (saleBody) => {
await User.findByPk(saleBody.userId);
await User.findByPk(saleBody.sellerId);

  const newSale = await Sale.create({
    ...saleBody,
    saleDate: new Date(), 
    status: 'pendente',
  });
  return newSale;
};

module.exports = {
  // findByIdUser,
  // findByIdSeller,
  createSale,
};