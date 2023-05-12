const { User } = require('../database/models');

const adminRemove = async (id) => {
  const findById = await User.findOne({ where: { id } });
  if (!findById) throw new Error('User not found!');

    const remove = await User.destroy({ where: { id } });
    return remove;
};

module.exports = {
  adminRemove,
};