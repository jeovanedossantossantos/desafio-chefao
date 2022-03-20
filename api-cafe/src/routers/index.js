const express = require('express');
const controllerRegiao = require('../controllers/controllerRegiao');
const controllerCafe = require('../controllers/controllerCafe');
const controllerAcidez = require('../controllers/controllerAcidez');
const controllerCorpo = require('../controllers/controllerCorpo');
const controllerMoagem = require('../controllers/controllerMoagem');
const controllerTorra = require('../controllers/controllerTorra');
const controllerVariedade = require('../controllers/controllerVariedade')
const route = express.Router();

route.post("/cadastrar-regiao", controllerRegiao.cadastrarRegiao)
route.get("/regioes", controllerRegiao.listarRegioes)
route.delete("/deleta/:id", controllerRegiao.deletarRegiao)
route.put("/atualiza/:id", controllerRegiao.atualizarRegiao)
route.get("/search", controllerRegiao.pesquisaRegioes)
route.get("/buscar-regiao/:id", controllerRegiao.buscarUmaRegiao)

route.post("/cadastra-cafe",controllerCafe.cadastrarCafe)
route.get('/cafes', controllerCafe.listarCafes)
route.get('/cafes-por-regiao/:regiao_id', controllerCafe.listarCafesPorRegiao)
route.delete("/cafe-delete/:id", controllerCafe.deletarCafe)
route.put("/cafe-put/:id", controllerCafe.atualizarCafe)

route.post("/cadastrar-acidez", controllerAcidez.cadastrarAcidez)
route.get("/listar-acidez", controllerAcidez.listarAcidez)
route.get("/buscar-um-acidez/:id", controllerAcidez.buscarUmAcidez)
route.delete("/deletar-acidez/:id", controllerAcidez.deletarAcidez)
route.put("/atulizar-acidez/:id", controllerAcidez.atualizarAcidez)


route.post("/cadastrar-corpo", controllerCorpo.cadastrarCorpo)
route.get("/listar-corpo", controllerCorpo.listarCorpo)
route.get("/buscar-um-corpo/:id", controllerCorpo.buscarUmCorpo)
route.delete("/deletar-corpo/:id", controllerCorpo.deletarCorpo)
route.put("/atulizar-corpo/:id", controllerCorpo.atualizarCorpo)

route.post("/cadastrar-moagem", controllerMoagem.cadastrarMoagem)
route.get("/listar-moagem", controllerMoagem.listarMoagem)
route.get("/buscar-um-moagem/:id", controllerMoagem.buscarUmMoagem)
route.delete("/deletar-moagem/:id", controllerMoagem.deletarMoagem)
route.put("/atulizar-moagem/:id", controllerMoagem.atualizarMoagem)

route.post("/cadastrar-torra", controllerTorra.cadastrarTorra)
route.get("/listar-torra", controllerTorra.listarTorra)
route.get("/buscar-um-torra/:id", controllerTorra.buscarUmTorra)
route.delete("/deletar-torra/:id", controllerTorra.deletarTorra)
route.put("/atulizar-torra/:id", controllerTorra.atualizarTorra)

route.post("/cadastrar-variedade", controllerVariedade.cadastrarVariedade)
route.get("/listar-variedade", controllerVariedade.listarVariedade)
route.get("/buscar-um-variedade/:id", controllerVariedade.buscarUmVariedade)
route.delete("/deletar-variedade/:id", controllerVariedade.deletarVariedade)
route.put("/atulizar-variedade/:id", controllerVariedade.atualizarVariedade)

module.exports =route