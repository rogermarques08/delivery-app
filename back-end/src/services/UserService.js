const { User } = require('../database/models/UserModel');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = { login };