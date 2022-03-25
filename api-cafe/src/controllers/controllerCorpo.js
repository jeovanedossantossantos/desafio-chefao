const { Corpo } = require("../model")
const Sequelize = require('sequelize');

const controllerCorpo = {
    async cadastrarCorpo(req, res) {
        const { nome } = req.body;

        try {
            const newCorpo = await Corpo.create({
                nome

            })
            res.status(200).json(newCorpo)
        } catch (err) {
            res.status(400).json(err)
        }

    },
    async listarCorpo(req, res){
        try {
            const lista_corpo = await Corpo.findAll()
            res.status(200).json(lista_corpo)
        } catch (err) {
            res.status(400).json(err)
        }
    },

    async buscarUmCorpo(req, res){
        try {
            const item = await Corpo.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (item !== null) {
                res.status(200).json(item)
            } else {
                res.status(402).json({ "Mensagem": "Nada foi encontrado" })
            }
        } catch (err) {
            res.status(400).json(err)
        }
    },
    async deletarCorpo(req, res) {
        try{
            const item = await Corpo.destroy({
                where: {
                    id:req.params.id
                }
            })
            res.status(201).json({"Mensagem":"Deletado com sucesso"})
        }catch (err) {
            res.status(401).json({ "Mensagem": "Erro ao tentar deletar região!" })
        }
    },
    async atualizarCorpo(req, res) {
        const {nome, descricao} = req.body

        try{
            const item = await Corpo.update({
                nome,
                descricao
            },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            )
          
            if(item[0] !== 0){
                res.status(201).json({ "Mensagem": "Atualizada como sucesso!" })
            }else{
                res.status(401).json({ "Mensagem": "Não exite esse id ou atualização já foi feita!" })
            }

        }catch(err){
            res.status(401).json({ "Mensagem": "Erro ao Atualizada!" })
        }

    }
}
module.exports = controllerCorpo