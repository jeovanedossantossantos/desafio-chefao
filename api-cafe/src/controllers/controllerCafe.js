const { Regiao, Cafe } = require("../model")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const controllerCafe = {
    async cadastrarCafe(req, res) {
        const {
            nome,
            foto_cafe,
            foto_cafe_1,
            foto_cafe_2,
            safra,
            tipo,
            regiao_id,
            descricao,
            produtores } = req.body;
            console.log(req.body);

            const novoCafe = await Cafe.create({
                nome,
                foto_cafe,
                foto_cafe_1,
                foto_cafe_2,
                safra,
                tipo,
                regiao_id,
                descricao,
                produtores 
            }).then(async ()=>{
                const regiao = await Regiao.findByPk(regiao_id);
            
                await novoCafe.set(regiao);
                // console.log(novoCafe);
                res.status(201).json({"messagem":"Cadastro feito com sucesso!"})
                
            }).catch(err => {
                res.status(500).json({"messagem":err.message})
            })

            
    }
}

module.exports = controllerCafe