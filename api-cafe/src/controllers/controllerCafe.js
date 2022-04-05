const { Regiao, Cafe, Variedade, Torra, Moagem, Corpo, Acidez } = require("../model")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const controllerCafe = {
    async cadastrarCafe(req, res) {
        const {
            nome,
            foto_cafe,
            foto_cafe_1,
            foto_cafe_2,
            
            nota,
            peso_liquido,
            preco,
            regiao_id,
            corpo_id,
            variedade_id,
            torra_id,
            acidez_id,
            moagem_id,
            descricao, } = req.body;
        try {
            const novoCafe = await Cafe.create({
                nome,
                foto_cafe,
                foto_cafe_1,
                foto_cafe_2,
                
                nota,
                peso_liquido,
                preco,
                regiao_id,
                corpo_id,
                variedade_id,
                torra_id,
                acidez_id,
                moagem_id,
                descricao,

            }
            );

            const cafe = await Cafe.findByPk(novoCafe.dataValues.id, {
                include: [
                    { model: Regiao, as: "regiao" },
                    { model: Acidez, as: "acidez" },
                    { model: Corpo, as: "corpo" },
                    { model: Variedade, as: "variedade" },
                    { model: Moagem, as: "moagem" },
                    { model: Torra, as: "torra" },
                ]
            })
           
            res.status(201).json(cafe)
        } catch (err) {
            res.status(500).json({ "messagem": err.message })
        }


    },

    async buscarUmCafe(req, res){
        try{
           const resposta =  await  Cafe.findOne({ 
                where: {id: req.params.id},
                include: [
                    { model: Regiao, as: "regiao" },
                    { model: Acidez, as: "acidez" },
                    { model: Corpo, as: "corpo" },
                    { model: Variedade, as: "variedade" },
                    { model: Moagem, as: "moagem" },
                    { model: Torra, as: "torra" },
                ]
            })
            res.status(200).json(resposta)
        }catch(err){
            res.status(500).json(err)
        }
    },
    async listarCafes(req, res) {

        await Cafe.findAll({
            include: [
                { model: Regiao, as: "regiao" },
                { model: Acidez, as: "acidez" },
                { model: Corpo, as: "corpo" },
                { model: Variedade, as: "variedade" },
                { model: Moagem, as: "moagem" },
                { model: Torra, as: "torra" },
            ]
        }).then((e) => {
            res.status(200).json(e)

        }).catch((err) => {
            res.status(500).json(err)
        })

    },

    async listarCafesPorRegiao(req, res) {
        const { regiao_id } = req.params
        
        await Cafe.findAll({
            where: {
                regiao_id
            },

            include: [
                { model: Regiao, as: "regiao" },
                { model: Acidez, as: "acidez" },
                { model: Corpo, as: "corpo" },
                { model: Variedade, as: "variedade" },
                { model: Moagem, as: "moagem" },
                { model: Torra, as: "torra" },
            ]
        }).then(async (e) => {
            await Regiao.findOne(
                {
                    where: {
                        id: regiao_id
                    }

                }
            ).then(async (eregiao) => {

               
                if (e.length === 0) {
                    res.status(200).json({ "messagem": "Não existe cafe cadastrado nesta região" })
                } else {
                    
                    res.status(200).json(e)
                }

            }).catch((err) => { console.log(err) });




        }).catch((err) => {
            res.status(500).json(err)
        })
    },
    async deletarCafe(req, res) {
        const { id } = req.params
        await Cafe.destroy({
            where: {
                id
            }
        }).then(e => {
            if (e === 1) {
                res.status(201).json({ "messagem": "Deletado com sucesso!" })
            } else {
                res.status(400).json({ "messagem": "Registro não encontrado!" })
            }

        }).catch(err => {
            res.status(500).json(err)
        })
    },

    async atualizarCafe(req, res) {
        const { id } = req.params
        const {
            nome,
            foto_cafe,
            foto_cafe_1,
            foto_cafe_2,
            
            nota,
            peso_liquido,
            preco,
            regiao_id,
            corpo_id,
            variedade_id,
            torra_id,
            acidez_id,
            moagem_id,
            descricao,
            produtores } = req.body;

        await Cafe.update({
            nome,
            foto_cafe,
            foto_cafe_1,
            foto_cafe_2,
            
            nota,
            peso_liquido,
            preco,
            regiao_id,
            corpo_id,
            variedade_id,
            torra_id,
            acidez_id,
            moagem_id,
            descricao,
            produtores
        }, {
            where: {
                id
            }
        }).then(e => {
           
            if (e[0] === 1) {
                res.status(200).json({ "messagem": "Atualizado com sucesso!" })
            } else {
                res.status(400).json({ "messagem": "Registro não econtrado ou as atulizações já foram feitas!" })
            }
        }).catch(err => {
            res.status(500).json(err)
        })


    },
    async pesquisaCafe(req, res) {
        var listaPesuisa = []
        // 
        try {
            const { valorDaPesquisa } = req.query
           

            const resultadDeBuscaNome = await Cafe.findAll({
                where: {
                    nome: {
                        [Op.like]: '%' + valorDaPesquisa + '%'
                    }
                }
            },
                // || // alguem que manja me diz se isso é aplicavel aquikkk
                // kkkkkkkkkk acredito que não deve funcionar do jeito que você imagina 
            )

            const resultadDeBuscaDes = await Cafe.findAll({

                where: {
                    descricao: {
                        [Op.like]: '%' + valorDaPesquisa + '%'
                    }
                }

            })

            if (resultadDeBuscaNome.length) {

                listaPesuisa.push(resultadDeBuscaNome)
            }
            if (resultadDeBuscaDes.length) {

                listaPesuisa.push(resultadDeBuscaDes)

            }
            if (listaPesuisa.length !== 0) {
                res.status(201).json(listaPesuisa[0])
            } else {
                res.status(500).json({ "messagem": "Nada encontrado" })
            }
            //Aqui ele pega apenas a primeria pocisão 


        } catch (err) {
            res.status(401).json({ "messagem": "Ouve algum erro" })
        }
    }

}

module.exports = controllerCafe