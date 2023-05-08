const express = require('express');
const cors = require('cors');
const UserRoutes = require('../routes/UserRoutes');
const routerRegister = require('../routes/RegisterRoutes');
const routerNewSales = require('../routes/SalesCheckoutRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', UserRoutes);
app.use('/register', routerRegister);
app.use('/checkout', routerNewSales);

module.exports = app;
