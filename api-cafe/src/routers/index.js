const express = require('express');
const controllerRegiao = require('../controllers/controllerRegiao');
const controllerCafe = require('../controllers/controllerCafe');
const controllerAcidez = require('../controllers/controllerAcidez');
const controllerCorpo = require('../controllers/controllerCorpo');
const controllerMoagem = require('../controllers/controllerMoagem');
const controllerTorra = require('../controllers/controllerTorra');
const UsusriosCreateValidations = require("../validations/usuarios/create")
const controllerVariedade = require('../controllers/controllerVariedade')
const controllerUsuarios = require('../controllers/controllerUsuario')
const authLoginValidations = require("../validations/auth/login")
const controllerAuth = require('../controllers/controllerAuth')
const auth = require('../middlewares/auth')
const bloque = require('../middlewares/bloque')
const route = express.Router();

route.get('/',(req, res) => {
    res.status(200).json({"messagem":"Olá"})
})

route.post('/cadastra-usuario',auth.auth,UsusriosCreateValidations, controllerUsuarios.registro)
route.post('/login',authLoginValidations,controllerAuth.login)

route.post("/cadastrar-regiao", bloque,controllerRegiao.cadastrarRegiao)
route.get("/regioes", controllerRegiao.listarRegioes)
route.delete("/deleta/:id", bloque,controllerRegiao.deletarRegiao)
route.put("/atualiza/:id", bloque,controllerRegiao.atualizarRegiao)
route.get("/search", controllerRegiao.pesquisaRegioes)
route.get("/buscar-regiao/:id", controllerRegiao.buscarUmaRegiao)

route.post("/cadastra-cafe",bloque,controllerCafe.cadastrarCafe)
route.get('/cafes', controllerCafe.listarCafes)
route.get('/cafes-por-regiao/:regiao_id', controllerCafe.listarCafesPorRegiao)
route.delete("/cafe-delete/:id", bloque,controllerCafe.deletarCafe)
route.put("/cafe-put/:id", bloque,controllerCafe.atualizarCafe)
route.get("/search-cafe", bloque,controllerCafe.pesquisaCafe)

route.post("/cadastrar-acidez", controllerAcidez.cadastrarAcidez)
route.get("/listar-acidez", controllerAcidez.listarAcidez)
route.get("/buscar-um-acidez/:id", controllerAcidez.buscarUmAcidez)
route.delete("/deletar-acidez/:id", bloque,controllerAcidez.deletarAcidez)
route.put("/atulizar-acidez/:id", bloque,controllerAcidez.atualizarAcidez)


route.post("/cadastrar-corpo", bloque,controllerCorpo.cadastrarCorpo)
route.get("/listar-corpo", controllerCorpo.listarCorpo)
route.get("/buscar-um-corpo/:id", controllerCorpo.buscarUmCorpo)
route.delete("/deletar-corpo/:id", bloque,controllerCorpo.deletarCorpo)
route.put("/atulizar-corpo/:id", bloque,controllerCorpo.atualizarCorpo)

route.post("/cadastrar-moagem", bloque,controllerMoagem.cadastrarMoagem)
route.get("/listar-moagem", controllerMoagem.listarMoagem)
route.get("/buscar-um-moagem/:id", controllerMoagem.buscarUmMoagem)
route.delete("/deletar-moagem/:id", controllerMoagem.deletarMoagem)
route.put("/atulizar-moagem/:id", bloque,controllerMoagem.atualizarMoagem)

route.post("/cadastrar-torra", bloque,controllerTorra.cadastrarTorra)
route.get("/listar-torra", controllerTorra.listarTorra)
route.get("/buscar-um-torra/:id", controllerTorra.buscarUmTorra)
route.delete("/deletar-torra/:id", bloque,controllerTorra.deletarTorra)
route.put("/atulizar-torra/:id", bloque,controllerTorra.atualizarTorra)

route.post("/cadastrar-variedade", bloque,controllerVariedade.cadastrarVariedade)
route.get("/listar-variedade",  controllerVariedade.listarVariedade)
route.get("/buscar-um-variedade/:id", controllerVariedade.buscarUmVariedade)
route.delete("/deletar-variedade/:id", bloque,controllerVariedade.deletarVariedade)
route.put("/atulizar-variedade/:id", bloque,controllerVariedade.atualizarVariedade)

module.exports =route