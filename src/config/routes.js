const express = require('express');

/* FORMA COMO DA PRA EXPORTAR UM PARAMETRO NO NODEJS */
module.exports = function (server) {
  const router = express.Router();

  /*USE SEMPRE É UM MIDDLEWARE*/
  server.use('/api', router);

  /*TODO ROUTES*/

  const todoService = require('../api/todo/todoService');
  todoService.register(router, '/todos');
}
