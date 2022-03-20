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
            tipo,
            regiao_id,
            corpo_id,
            variedade_id,
            torra_id,
            acidez_id,
            moagem_id,
            descricao,
            produtores } = req.body;
        // console.log(req.body);
        try {
            const novoCafe = await Cafe.create({
                nome,
                foto_cafe,
                foto_cafe_1,
                foto_cafe_2,
                tipo,
                regiao_id,
                corpo_id,
                variedade_id,
                torra_id,
                acidez_id,
                moagem_id,
                descricao,
                produtores
            });
            const regiao = await Regiao.findByPk(regiao_id);
            await Variedade.findByPk(variedade_id);
            await Acidez.findByPk(acidez_id);
            await Moagem.findByPk(moagem_id);
            await Corpo.findByPk(corpo_id);
            await Torra.findByPk(torra_id);
            console.log(regiao)

            await novoCafe.setRegiao(regiao)

            // await novoCafe.set(regiao);
            // console.log(novoCafe);
            res.status(201).json(novoCafe)
        }catch (err) {
            res.status(500).json({ "messagem": err.message })
        }
       


        
    


},

    async listarCafes(req, res) {

        await Cafe.findAll().then((e) => {
            res.status(200).json(e)

        }).catch((err) => {
            res.status(500).json(err)
        })

    },

        async listarCafesPorRegiao(req, res) {
    const { regiao_id } = req.params
    // console.log(regiao_id)
    await Cafe.findAll({
        where: {
            regiao_id
        }
    }).then(async (e) => {
        await Regiao.findOne({ where: { id: regiao_id } }).then(async (eregiao) => {

            console.log(eregiao)
            if (e.length === 0) {
                res.status(200).json({ "messagem": "Não existe cafe cadastrado nesta região" })
            } else {
                // const item = await 
                e.push(eregiao)
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
        tipo,
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
        tipo,
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
        console.log(e)
        if (e[0] === 1) {
            res.status(200).json({ "messagem": "Atualizado com sucesso!" })
        } else {
            res.status(500).json({ "messagem": "Registro não econtrado ou as atulizações já foram feitas!" })
        }
    }).catch(err => {
        res.status(500).json(err)
    })


}

}

module.exports = controllerCafe