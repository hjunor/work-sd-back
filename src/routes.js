const express = require('express');

const routes = express.Router();

const MessageController = require('./controllers/MessageController');

routes.get('/message', MessageController.index);
routes.post('/message', MessageController.store);

module.exports = routes;

// Arquivo de rotas da aplicação
