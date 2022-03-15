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
route.get('/cafes', controllerCafe.listarCafes)
route.get('/cafes-por-regiao/:regiao_id', controllerCafe.listarCafesPorRegiao)
route.delete("/cafe-delete/:id", controllerCafe.deletarCafe)
route.put("/cafe-put/:id", controllerCafe.atualizarCafe)
module.exports =route