const express = require('express');
const controllerRegiao = require('../controllers/controllerRegiao');
const controllerCafe = require('../controllers/controllerCafe');
const controllerAcidez = require('../controllers/controllerAcidez');
const controllerCorpo = require('../controllers/controllerCorpo');
const controllerMoagem = require('../controllers/controllerMoagem');
const controllerTorra = require('../controllers/controllerTorra');
const controllerVariedade = require('../controllers/controllerVariedade')
const auth = require('../middlewares/auth')
const route = express.Router();

route.get('/',(req, res) => {
    res.status(200).json({"messagem":"Olá"})
})

route.post("/cadastrar-regiao", auth.auth,controllerRegiao.cadastrarRegiao)
route.get("/regioes", auth.auth,controllerRegiao.listarRegioes)
route.delete("/deleta/:id", auth.auth,controllerRegiao.deletarRegiao)
route.put("/atualiza/:id", auth.auth,controllerRegiao.atualizarRegiao)
route.get("/search", auth.auth,controllerRegiao.pesquisaRegioes)
route.get("/buscar-regiao/:id", auth.auth,controllerRegiao.buscarUmaRegiao)

route.post("/cadastra-cafe",auth.auth,controllerCafe.cadastrarCafe)
route.get('/cafes', auth.auth,controllerCafe.listarCafes)
route.get('/cafes-por-regiao/:regiao_id', auth.auth,controllerCafe.listarCafesPorRegiao)
route.delete("/cafe-delete/:id", auth.auth,controllerCafe.deletarCafe)
route.put("/cafe-put/:id", auth.auth,controllerCafe.atualizarCafe)
route.get("/search-cafe", auth.auth,controllerCafe.pesquisaCafe)

route.post("/cadastrar-acidez", controllerAcidez.cadastrarAcidez)
route.get("/listar-acidez", auth.auth,controllerAcidez.listarAcidez)
route.get("/buscar-um-acidez/:id", auth.auth,controllerAcidez.buscarUmAcidez)
route.delete("/deletar-acidez/:id", auth.auth,controllerAcidez.deletarAcidez)
route.put("/atulizar-acidez/:id", auth.auth,controllerAcidez.atualizarAcidez)


route.post("/cadastrar-corpo", auth.auth,controllerCorpo.cadastrarCorpo)
route.get("/listar-corpo", auth.auth,controllerCorpo.listarCorpo)
route.get("/buscar-um-corpo/:id", auth.auth,controllerCorpo.buscarUmCorpo)
route.delete("/deletar-corpo/:id", auth.auth,controllerCorpo.deletarCorpo)
route.put("/atulizar-corpo/:id", auth.auth,controllerCorpo.atualizarCorpo)

route.post("/cadastrar-moagem", auth.auth,controllerMoagem.cadastrarMoagem)
route.get("/listar-moagem", auth.auth,controllerMoagem.listarMoagem)
route.get("/buscar-um-moagem/:id", auth.auth,controllerMoagem.buscarUmMoagem)
route.delete("/deletar-moagem/:id", controllerMoagem.deletarMoagem)
route.put("/atulizar-moagem/:id", auth.auth,controllerMoagem.atualizarMoagem)

route.post("/cadastrar-torra", auth.auth,controllerTorra.cadastrarTorra)
route.get("/listar-torra", auth.auth,controllerTorra.listarTorra)
route.get("/buscar-um-torra/:id", auth.auth,controllerTorra.buscarUmTorra)
route.delete("/deletar-torra/:id", auth.auth,controllerTorra.deletarTorra)
route.put("/atulizar-torra/:id", auth.auth,controllerTorra.atualizarTorra)

route.post("/cadastrar-variedade", auth.auth,controllerVariedade.cadastrarVariedade)
route.get("/listar-variedade", auth.auth, controllerVariedade.listarVariedade)
route.get("/buscar-um-variedade/:id", auth.auth,controllerVariedade.buscarUmVariedade)
route.delete("/deletar-variedade/:id", auth.auth,controllerVariedade.deletarVariedade)
route.put("/atulizar-variedade/:id", auth.auth,controllerVariedade.atualizarVariedade)

module.exports =route