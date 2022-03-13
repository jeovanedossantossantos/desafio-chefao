const { Regiao } = require("../model")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const controllerRegiao = {
    async cadastrarRegiao(req, res) {
        const { foto_bandeira, pais, descricao, colocacao } = req.body
        console.log(req.body)

        try {
            const newRegiao = await Regiao.create({
                foto_bandeira,
                pais,
                descricao,
                colocacao
            })
            res.status(201).json(newRegiao)
        } catch (err) {
            res.status(401).json({ "messagem": "Ouve um problema ao cadastra uma região!!" })

        }

    },

    async listarRegioes(req, res) {
        try {
            const listaDeReigoes = await Regiao.findAll();
            res.status(201).json(listaDeReigoes)
            // console.log(listaDeReigoes)
        } catch (err) {
            res.status(401).json({ "messagem": "Erro ao tentar encontrar regiões" })
        }
    },

    async deletarRegiao(req, res) {
        try {
            const { id } = req.params //parametro que a gente tem que ver como vai add;
            // console.log("Produto deletado!")
            await Regiao.destroy({
                where: {
                    id
                }
            });
            res.status(201).json({ "messagem": "Região deletada!" })
        } catch (err) {
            res.status(401).json({ "messagem": "Erro ao tentar deletar região!" })
        }

    },

    async atualizarRegiao(req, res) {
        try {
            // console.log("Regiao atualizada!")
            const { id } = req.params //parametro que a gente tem que ver como vai add;
            const { foto_bandeira, pais, descricao, colocacao } = req.body;
            if (!id) return res.status(400).json({ "messagem": "id não enviado" })

            const regiaoAtualizada = await Regiao.update({
                foto_bandeira,
                pais,
                descricao,
                colocacao
            },
                {
                    where: {
                        id,
                    }
                });
            res.status(201).json({ "messagem": "Região atualizada!" })
            // console.log("Regiao atualizada!")
        } catch (err) {
            res.status(401).json({ "messagem": "Erro ao tentar atualizar região!" })
        }
    },


    async pesquisaRegioes(req, res) {
        var listaPesuisa = []
        // 
        try {
            const { valorDaPesquisa } = req.query
            // const {pais, descricao} = req.query]
            console.log(valorDaPesquisa)

            const resultadDeBuscaPais = await Regiao.findAll({
                where: {
                    pais: {
                        [Op.like]: '%' + valorDaPesquisa + '%'
                    }
                }
            },

                // || // alguem que manja me diz se isso é aplicavel aquikkk
                // kkkkkkkkkk acredito que não deve funcionar do jeito que você imagina 
            )

            const resultadDeBuscaDes = await Regiao.findAll({

                where: {
                    descricao: {
                        [Op.like]: '%' + valorDaPesquisa + '%'
                    }
                }

            })
            // console.log(json(resultadDeBuscaDes))
            // res.status(201).json(resultadDeBuscaDes)

            if (resultadDeBuscaPais.length) {
                // res.status(201).json(resultadDeBuscaPais)
                // console.log("Pais")
                listaPesuisa.push(resultadDeBuscaPais)
            }
            if (resultadDeBuscaDes.length) {
                // res.status(201).json(resultadDeBuscaDes)
                // console.log("Desc")
                listaPesuisa.push(resultadDeBuscaDes)

            }
            if(listaPesuisa.length !== 0){
                res.status(201).json(listaPesuisa[0])
            }else{
                res.status(500).json({ "messagem": "Nada encontrado" })
            }
           //Aqui ele pega apenas a primeria pocisão 


        } catch (err) {
            res.status(401).json({ "messagem": "Ouve algum erro" })
        }
    },

}

module.exports = controllerRegiao