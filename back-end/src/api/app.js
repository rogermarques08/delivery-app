const express = require('express');
const UserRoutes = require('../routes/UserRoutes');
const routerRegister = require('../routes/RegisterRoutes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', UserRoutes);
app.use('/register', routerRegister);

module.exports = app;
