const {Variedade} = require("../model");
const Sequelize = require('sequelize');
const controllerVariedade = {
    
    async cadastrarVariedade(req, res) {
        const {
            nome,
            descricao
        } = req.body;

        try {
            const newVariedade = await Variedade.create({
                nome,
                descricao
            })
            res.status(200).json(newVariedade)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    async listarVariedade(req, res) {
        try {

            const lista_variedade = await Variedade.findAll()
            res.status(200).json(lista_variedade)

        } catch (err) {
            res.status(400).json(err)
        }
    },
    async buscarUmVariedade(req, res) {
        try {
            const item = await Variedade.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (item !== null) {
                res.status(200).json(item)
            } else {
                res.status(402).json({
                    "Mensagem": "Nada foi encontrado"
                })
            }
        } catch (err) {
            res.status(400).json(err)
        }
    },
    async deletarVariedade(req, res) {
        try {
            const item = await Variedade.destroy({
                where: {
                    id: req.params.id
                }
            })

            if (item === 1) {
                res.status(201).json({
                    "Mensagem": "Deletado com sucesso"
                })
            } else {
                res.status(401).json({
                    "Mensagem": "Não encontrado"
                })
            }
        } catch (err) {
            res.status(401).json({
                "Mensagem": "Erro ao tentar deletar!"
            })
        }
    },
    async atualizarVariedade(req, res) {
        const {
            nome,
            descricao
        } = req.body
        try {
            const item = await Variedade.update({
                nome,
                descricao
            }, {
                where: {
                    id: req.params.id,
                }
            })
            if (item !== null) {
                res.status(201).json({
                    "Mensagem": "Atualizada com sucesso!"
                })
            } else {
                res.status(401).json({
                    "Mensagem": "Não existe esse id!"
                })
            }

        } catch (err) {
            res.status(401).json({
                "Mensagem": "Erro ao Atualizar!"
            })
        }
    }
}

module.exports = controllerVariedade