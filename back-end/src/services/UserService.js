const { User } = require('../database/models');

const login = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createNewUser = async ({ name, email, password, role }) => {
  const newUser = await User.create({ name, email, password, role });
  return newUser;
};

module.exports = { 
  login,
  createNewUser,
};