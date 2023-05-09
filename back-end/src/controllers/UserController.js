// const crypto = require('crypto');
const md5 = require('md5');
const UserService = require('../services/UserService');
const { createToken } = require('../auth/auth');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { dataValues } = await UserService.login(email);
    if (!dataValues) {
      return res.status(404).json({ message: 'Not found' });
    }
    if (dataValues.password !== md5(password)) {
      return res.status(404).json({ message: 'Not found' });
    }
      const token = createToken({ dataValues });
      return res.status(200).json({ ...dataValues, token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};

const createNewUser = async (req, res) => {
  try {
  const { name, email, password, role } = req.body;

  const hasEmail = await UserService.login(email);
  if (hasEmail) {
    return res.status(409).json({ message: 'Conflict' });
  }
  const newUser = await UserService.createNewUser({ 
    name, 
    email, 
    password: md5(password),
    role,
   });

  const token = createToken({ name, email, password, role, id: newUser.id });
  
  return res.status(201).json({ name, email, password, token });
} catch (e) {
  console.log(e);
  return res.status(500).json({ message: 'internal error', error: e.message });
}
};
 
module.exports = { 
  login,
  createNewUser,
 };