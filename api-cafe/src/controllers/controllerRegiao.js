const {Regiao} = require("../model")

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

    }
}
module.exports = controllerRegiao