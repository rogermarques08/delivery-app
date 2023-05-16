const { Op } = require('sequelize');
const { User } = require('../database/models');

const adminRemove = async (id) => {
  const findById = await User.findOne({ where: { id } });
  if (!findById) throw new Error('User not found!');

    const remove = await User.destroy({ where: { id } });
    return remove;
};

const getAllUsers = async () => {
  const findAll = await User.findAll({
    where: { role: { [Op.ne]: ['administrator'] } },
  });
  return findAll;
};

module.exports = {
  adminRemove,
  getAllUsers,
};