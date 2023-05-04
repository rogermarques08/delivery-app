const express = require('express');
const UserRoutes = require('../routes/UserRoutes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', UserRoutes);

module.exports = app;
