const {Regiao} = require("../model")
const Sequelize = require('sequelize');

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
        }catch(err){
            res.status(401).json({"messagem": "Ouve um problema ao cadastra uma região!!"})
            
        }

    },

    async listarRegioes(req,res)  {
            try {
            const listaDeReigoes = await Regiao.findAll();
            res.status(201).json(listaDeReigoes)
            console.log(listaDeReigoes)
        } catch(err) {
            res.status(401).json("Erro ao tentar encontrar regiões")
        }
    },

    async deletarRegiao(req,res)  {
        try {
        const { id } = req.params //parametro que a gente tem que ver como vai add;
        console.log("Produto deletado!")
        await Regiao.destroy({
            where: {
                id
            }});
        res.status(204).json("Região deletada!")
    } catch(err) {
        res.status(401).json("Erro ao tentar deletar região!")
    }
},

    async atualizarRegiao(req,res) {
        try {
            console.log("Regiao atualizada!")
            const { id } = req.params //parametro que a gente tem que ver como vai add;
            const { foto_bandeira, pais, descricao, colocacao } = req.body;
            if(!id) return res.status(400).json("id não enviado")

            const regiaoAtualizada = await Regiao.update ({
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
            res.json ("Região atualizada!")
            console.log("Regiao atualizada!")
        } catch(err) {
            res.status(401).json("Erro ao tentar atualizar região!")
        }
    },


        async pesquisaRegioes(req, res) {
            try {
            const { valorDaPesquisa } = req.query 

            Regiao.findAll({ 
                where: { 
                    pais: {
                        [Op.like]: '%' + valorDaPesquisa + '%' 
                    } } } 

                    || // alguem que manja me diz se isso é aplicavel aquikkk

                    { where: {
                         descricao: {
                             [Op.like]: '%' + valorDaPesquisa + '%' 
                            } } })
        } catch(err) {
            res.status(401).json("Nada encontrado")
        }
    },

}

module.exports = controllerRegiao