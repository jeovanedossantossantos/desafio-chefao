const { Regiao } = require("../model");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const controllerRegiao = {
    async cadastrarRegiao(req, res) {
        const {
            nome,
            foto_bandeira,
            pais,
            descricao,
            altitude
        } = req.body
        try {
            const newRegiao = await Regiao.create({
                nome,
                foto_bandeira,
                pais,
                descricao,
                altitude
            })
            res.status(201).json(newRegiao)
        } catch (err) {
            res.status(401).json({
                "Mensagem": "Houve um problema ao cadastrar!"
            })
        }
    },
    async buscarUmaRegiao(req, res) {
        try {
            const item = await Regiao.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (item !== null) {
                res.status(200).json(item)
            } else {
                res.status(400).json({
                    "Mensagem": "Item não encontrado"
                })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async listarRegioes(req, res) {
        try {
            const listaDeReigoes = await Regiao.findAll();
            res.status(201).json(listaDeReigoes)
        } catch (err) {
            res.status(401).json({
                "Mensagem": "Erro ao tentar encontrar regiões"
            })
        }
    },
    async deletarRegiao(req, res) {
        try {
            const {
                id
            } = req.params
            await Regiao.destroy({
                where: {
                    id
                }
            });
            res.status(201).json({
                "Mensagem": "Região deletada!"
            })
        } catch (err) {
            res.status(401).json({
                "Mensagem": "Erro ao tentar deletar região!"
            })
        }
    },
    async atualizarRegiao(req, res) {
        try {
            const {
                id
            } = req.params //parametro que a gente tem que ver como vai add;
            const {
                nome,
                foto_bandeira,
                pais,
                descricao,
                altitude
            } = req.body;
            if (!id) return res.status(400).json({
                "messagem": "id não enviado"
            })
            const regiaoAtualizada = await Regiao.update({
                nome,
                foto_bandeira,
                pais,
                descricao,
                altitude
            }, {
                where: {
                    id,
                }
            });
            res.status(201).json({
                "Mensagem": "Região atualizada!"
            })
        } catch (err) {
            res.status(401).json({
                "Mensagem": "Erro ao tentar atualizar região!"
            })
        }
    },
    async pesquisaRegioes(req, res) {
        var listaPesuisa = []
        try {
            const {
                valorDaPesquisa
            } = req.query
            const resultadDeBuscaPais = await Regiao.findAll({
                where: {
                    pais: {
                        [Op.like]: '%' + valorDaPesquisa + '%'
                    }
                }
            }, )
            const resultadDeBuscaDes = await Regiao.findAll({
                where: {
                    descricao: {
                        [Op.like]: '%' + valorDaPesquisa + '%'
                    }
                }
            })
            if (resultadDeBuscaPais.length) {
                listaPesuisa.push(resultadDeBuscaPais)
            }
            if (resultadDeBuscaDes.length) {
                listaPesuisa.push(resultadDeBuscaDes)
            }
            if (listaPesuisa.length !== 0) {
                res.status(201).json(listaPesuisa[0])
            } else {
                res.status(500).json({
                    "Mensagem": "Nada encontrado"
                })
            }
        } catch (err) {
            res.status(401).json({
                "Mensagem": "Houve algum erro"
            })
        }
    },
}

module.exports = controllerRegiao