const express = require('express');
const controllerRegiao = require('../controllers/controllerRegiao');
const controllerCafe = require('../controllers/controllerCafe');
const route = express.Router();

route.post("/cadastrar-regiao", controllerRegiao.cadastrarRegiao)
route.get("/regioes", controllerRegiao.listarRegioes)
route.delete("/deleta/:id", controllerRegiao.deletarRegiao)
route.put("/atualiza/:id", controllerRegiao.atualizarRegiao)
route.get("/search", controllerRegiao.pesquisaRegioes)

route.post("/cadastra-cafe",controllerCafe.cadastrarCafe)

module.exports =route