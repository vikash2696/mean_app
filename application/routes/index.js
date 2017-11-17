var express = require('express');
var Router = express.Router();
var userRoutes = require('./userRoutes');

Router.use('/users', userRoutes);

module.exports = Router;