const dotenv = require('dotenv/config')
const auth = {
    auth(req, res, next) {
        
        if(req.headers.authorization === process.env.Authorization){
            next()
        }else{
            res.status(400).json({"erro": "Acesso não autorizaro"})
        }
        
        
    }
}

module.exports = auth