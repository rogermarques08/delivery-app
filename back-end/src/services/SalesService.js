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

const orderedByUserId = async (userId) => {
  const byUserId = await Sale.findAll({ 
    attributes: {
      exclude: ['userId', 'sellerId', 'deliveryAddress', 'deliveryNumber'],
    },
    where: { userId },
   });
  return byUserId;
};

const updateStatus = async (id, status) => {
 const byId = await Sale.findByPk(id);
 if (!byId) throw new Error('Sale not found');

 const update = await Sale.update({ status }, { where: { id } });
 return update;
};

const getAllSalesSeller = async (sellerId) => {
  const sallesSeller = await Sale.findAll({
    where: { sellerId },
  });
  return sallesSeller; 
};

module.exports = {
  // findByIdUser,
  createSale,
  getAllIdsSellers,
  saleById,
  orderedByUserId,
  updateStatus,
  getAllSalesSeller,
};