const { Sale } = require('../database/models');

const createSale = async ({ 
  userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status }) => {
  const newSale = await Sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  });
  return newSale;
};

module.exports = {
  createSale,
};