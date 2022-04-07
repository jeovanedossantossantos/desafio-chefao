const dotenv = require('dotenv/config');

const auth = {
    auth(req, res, next) {

        if (req.headers.authorization === process.env.Authorization) {
            next()
        } else {
            res.status(400).json({
                "Erro": "Acesso não autorizado"
            })
        }
    }
}
module.exports = auth