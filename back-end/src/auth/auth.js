const jwt = require('jsonwebtoken');

// eslint-disable-next-line camelcase
// const secret = 'secret_key';
const fs = require('fs');
// const path = require('path');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

// console.log('auth ===>', secret);

const JWT_CONFIG = {
  algorithm: 'HS256',
  // expiresIn: '15min',
};

const createToken = (data) => jwt.sign(data, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };