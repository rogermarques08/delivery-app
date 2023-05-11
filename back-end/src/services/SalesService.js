const { Sale } = require('../database/models');
const { User } = require('../database/models');
const { Product } = require('../database/models');

// const findByIdUser = async (userId) => {
//   const findUser = await User.findByPk({ where: userId });
//   return findUser;
// };

const getAllIdsSellers = async () => {
  const findSeller = await User.findAll({
    attributes: {
      exclude: ['role', 'email', 'password'],
    },
    where: { role: 'seller' },
  });
  return findSeller;
};

const createSale = async (saleBody) => {
await User.findByPk(saleBody.userId);
await User.findByPk(saleBody.sellerId);

  const newSale = await Sale.create({
    ...saleBody,
    saleDate: new Date(), 
    status: 'Pendente',
  });
  return newSale;
};

const saleById = async (id) => {
  const byId = await Sale.findOne({
    where: { id },
     include: [{ model: User, as: 'seller' },
     { model: Product, as: 'products', through: { attributes: ['quantity'] } },
   ],
 });
  return byId;
};

module.exports = {
  // findByIdUser,
  createSale,
  getAllIdsSellers,
  saleById,
};