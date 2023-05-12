const express = require('express');
const cors = require('cors');
const path = require('path');
const UserRoutes = require('../routes/UserRoutes');
const routerRegister = require('../routes/RegisterRoutes');
const customerRoutes = require('../routes/customerRoutes');
const SellerRoutes = require('../routes/SellerRoutes');
const AdminRouter = require('../routes/AdminRoutes');
// const routerNewSales = require('../routes/SalesCheckoutRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
console.log(__dirname);
app.use('/images', express.static(path.join(__dirname, '..', 'public')));

app.use('/login', UserRoutes);
app.use('/register', routerRegister);
app.use('/customer', customerRoutes);
app.use('/seller', SellerRoutes);
app.use('/admin', AdminRouter);
// app.use('/checkout', routerNewSales);
module.exports = app;
