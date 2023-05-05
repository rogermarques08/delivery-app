const jwt = require('jsonwebtoken');

// eslint-disable-next-line camelcase
const secret = 'jwt_secret';

const JWT_CONFIG = {
  algorithm: 'HS256',
  // expiresIn: '15min',
};

const createToken = (data) => jwt.sign(data, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };