const { Acidez } = require("../model")
const Sequelize = require('sequelize');

const controllerAcidez = {
    async cadastrarAcidez(req, res) {
        const { nome } = req.body;

        try {
            const newAcidez = await Acidez.create({
                nome
            })
            res.status(200).json(newAcidez)
        } catch (err) {
            res.status(400).json(err)
        }

    },
    async listarAcidez(req, res) {
        try {
            const lista_acidez = await Acidez.findAll()
            res.status(200).json(lista_acidez)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    async buscarUmAcidez(req, res) {
        try {
            const item = await Acidez.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (item !== null) {
                res.status(200).json(item)
            } else {
                res.status(402).json({ "messagem": "Nada foi encontrado" })
            }
        } catch (err) {
            res.status(400).json(err)
        }

    },
    async deletarAcidez(req, res) { },
    async atualizarAcidez(req, res) { }
}
module.exports = controllerAcidez