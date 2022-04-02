const dotenv = require('dotenv/config')

const auth = {
    auth(req, res, next) {
        // console.log(req.headers.authorization)
        
        // if(req.body.authorization === process.env.Authorization){
        //     console.log(req.body.authorization)
        //     // res.status(200).json({"messagem": "Acesso autorizaro"})
        //     next()
        // }
        if(req.headers.authorization === process.env.Authorization){
            next()
        }
        else{
            res.status(400).json({"erro": "Acesso não autorizaro"})
        }
        
        
        
    }
}

module.exports = auth