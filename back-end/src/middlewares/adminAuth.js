const { verifyToken } = require('../auth/auth');
// const fs = require('fs');
const { User } = require('../database/models');

// const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

// const JWT_CONFIG = {
//   algorithm: 'HS256',
//   // expiresIn: '15min',
// };

module.exports = async (req, res, next) => {
  try {
    const admin = await User.findAll({ where: { role: 'administrator' } });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const adminToken = verifyToken(authorization);
    req.adminToken = adminToken.data;

    next();
  } catch (e) {
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};
