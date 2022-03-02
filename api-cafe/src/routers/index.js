const express = require('express');
const controllerRegiao = require('../controllers/controllerRegiao');
const route = express.Router();

route.post("/cadastrar-regiao", controllerRegiao.cadastrarRegiao)

module.exports =route