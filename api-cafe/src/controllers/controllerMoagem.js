const {Moagem} = require("../model")
const Sequelize = require('sequelize');

const controllerMoagem = {
    async cadastrarMoagem(req, res) {
        const {nome} = req.body;

        try {
            const newMoagem = await Moagem.create({
                nome
            })
            res.status(200).json(newMoagem) 
            }catch(err) {
                res.status(400).json(err)
            }
    },
    async listarMoagem(req, res){
     
        try {
            const lista_moagem = await Moagem.findAll()
            res.status(200).json(lista_moagem)
        }catch (err) {
            res.status(400).json(lista_moagem)
        }
    },
    async buscarUmMoagem(req, res){
        try {
            const item = await Moagem.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (item !== null) {
                res.status(200).json(item)
            } else {
                res.status(402).json({ "messagem": "Nada foi encontrado"})
            }
            } catch (err) {
                res.status(400).json(err)
            }
        },
    async deletarMoagem(req, res) {
        try {
            const item = await Moagem.destroy({
                where: {
                    id:req.params.id
                }
            })
            res.status(201).json({ "messagem": "Deletado com sucesso"})
        }catch (err) {
            res.status(401).json({ "messagem": "Erro ao tentar deletar região!" })
        }
    },
    async atualizarMoagem(req, res) {
        const {nome} = req.body

        try{
            const item = await Moagem.update({
                nome,
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

module.exports = controllerMoagem