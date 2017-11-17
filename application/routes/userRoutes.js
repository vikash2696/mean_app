const express = require('express');

const  Router = express.Router();
const  myController = require('../controllers/myController');


Router.get('/' , myController.find);
Router.get('/:id' , myController.findOne);
Router.post('/' , myController.create);
Router.put('/:id' , myController.update);
Router.delete('/:id' , myController.delete);

module.exports = Router;