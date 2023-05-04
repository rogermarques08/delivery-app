const UserService = require('../services/UserService');

const emailPass = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!emailPass(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await UserService.login(email, password);
      return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};

module.exports = { login };