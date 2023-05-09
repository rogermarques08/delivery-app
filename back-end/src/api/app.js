const express = require('express');
const cors = require('cors');
const UserRoutes = require('../routes/UserRoutes');
const routerRegister = require('../routes/RegisterRoutes');
const customerRoutes = require('../routes/customerRoutes');
const routerNewSales = require('../routes/SalesCheckoutRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', UserRoutes);
app.use('/register', routerRegister);
app.use('/customer', customerRoutes);
app.use('/checkout', routerNewSales);
module.exports = app;
