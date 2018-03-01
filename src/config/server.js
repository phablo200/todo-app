const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');


/* TODAS AS REQUISIÇÕES PASSAM PRIMEIRO NESSE MIDDLEWARE */
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());
server.use(allowCors);
server.listen (port, function () {
  console.log("BACKEND RODANDO NA PORTA " + port);
});

module.exports = server;