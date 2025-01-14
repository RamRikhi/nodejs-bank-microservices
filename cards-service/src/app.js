const express = require('express');
const cardRoutes = require('./routes/cards.routes');
const errorHandler = require('./middleware/error.handler');

const app = express();

app.use(express.json());

app.use('/cards', cardRoutes);
app.use(errorHandler);

module.exports = app;