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
    async buscarUmMoagem(req, res){},
    async deletarMoagem(req, res) {},
    async atualizarMoagem(req, res) {}
}
module.exports = controllerMoagem