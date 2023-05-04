const UserService = require('../services/UserService');

const emailPass = (email, password) => email && password;

console.log('controllerLogin', emailPass);

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!emailPass(email, password)) {
      return res.status(404).json({ message: 'Not found' });
    }
    const user = await UserService.login(email, password);
      return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};

module.exports = { login };