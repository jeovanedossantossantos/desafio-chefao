const { Acidez } = require("../model")
const Sequelize = require('sequelize');

const controllerAcidez = {
    async cadastrarAcidez(req, res) {
        const { nome,descricao } = req.body;

        try {
            const newAcidez = await Acidez.create({
                nome,
                descricao

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
    async deletarAcidez(req, res) { 
        try{
            const item = await Acidez.destroy({
                where: {
                    id:req.params.id
                }
            })
            res.status(201).json({"messagem":"Deletado com sucesso"})
        }catch (err) {
            res.status(401).json({ "messagem": "Erro ao tentar deletar região!" })
        }
    },
    async atualizarAcidez(req, res) { 
        const {nome, descricao} = req.body
        try{
            const item = await Acidez.update({
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
                res.status(201).json({ "messagem": "Atualizada como sucesso!" })
            }else{
                res.status(401).json({ "messagem": "Não exite esse id!" })
            }

        }catch(err){
            res.status(401).json({ "messagem": "Erro ao Atualizada!" })
        }

    }
}
module.exports = controllerAcidez