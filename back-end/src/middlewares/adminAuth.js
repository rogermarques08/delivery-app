const { verifyToken } = require('../auth/auth');
const { User } = require('../database/models');

const getAdmin = async () => {
  const admin = await User.findOne({ where: { role: 'administrator' } });
  if (!admin) {
    throw new Error('No administrator found');
  }
  // console.log('MIDDLEWARE ADMIN ==>', admin);
  return admin;
};

const adminMiddleware = async (req, res, next) => {
  try {
    const admin = await getAdmin();
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const adminToken = verifyToken(authorization);
    // console.log('MIDDLEWARE ADMIN ==>', adminToken);
    if (!adminToken || adminToken.user.id !== admin.dataValues.id) {
      return res.status(401).json({ message: 'Invalid token' });
          }
          req.adminToken = adminToken.dataValues;
    next();
  } catch (e) {
    return res.status(500).json({ message: 'internal error', error: e.message });
}
};

module.exports = adminMiddleware;