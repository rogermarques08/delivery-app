const { verifyToken } = require('../auth/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const user = verifyToken(authorization);
    req.user = user.data;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Expired or invalid token',      
    });
  }
};