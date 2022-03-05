const express = require('express');
const controllerRegiao = require('../controllers/controllerRegiao');
const route = express.Router();

route.post("/cadastrar-regiao", controllerRegiao.cadastrarRegiao)
route.get("/regioes", controllerRegiao.listarRegioes)
route.delete("/deleta/:id", controllerRegiao.deletarRegiao)
route.put("/atualiza/:id", controllerRegiao.atualizarRegiao)
route.get("/search", controllerRegiao.pesquisaRegioes)

module.exports =route