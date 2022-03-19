const {Torra} = require("../model")
const Sequelize = require('sequelize');

const controllerTorra = {
    async cadastrarTorra(req, res) {
        const { nome } = req.body;

        try {
            const newTorra = await Torra.create({
                nome
            })
            res.status(200).json(newTorra)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    async listarTorra(req, res){
        try {
            const lista_torra = await Torra.findAll()
            res.status(200).json(lista_torra)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    async buscarUmTorra(req, res){
        try {
            const item = await Torra.findOne({
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
    async deletarTorra(req, res) {
        try{
            const item = await Torra.destroy({
                where: {
                    id:req.params.id
                }
            })
            res.status(201).json({"Mensagem":"Deletado com sucesso"})
        }catch (err) {
            res.status(401).json({ "Mensagem": "Erro ao tentar deletar região!" })
        }
    },
    async atualizarTorra(req, res) {
        const {nome, descricao} = req.body
        try{
            const item = await Torra.update({
                nome,
                descricao
            },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            )
            if(item !== null){
                res.status(201).json({ "Mensagem": "Atualizada como sucesso!" })
            }else{
                res.status(401).json({ "Mensagem": "Não exite esse id!" })
            }

        }catch(err){
            res.status(401).json({ "Mensagem": "Erro ao Atualizada!" })
        }
    }
}
module.exports = controllerTorra