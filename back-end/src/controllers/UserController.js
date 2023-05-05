// const crypto = require('crypto');
const md5 = require('md5');
const UserService = require('../services/UserService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserService.login(email);
    if (!user) {
      return res.status(404).json({ message: 'Not found' });
    }
    if (user.password !== md5(password)) {
      return res.status(404).json({ message: 'Not found' });
    }
      return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};
 
module.exports = { login };