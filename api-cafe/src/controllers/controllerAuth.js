const {Usuarios} = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../configs/secret')
const controllerAuth = {
    async login(req, res){
        const {email, senha} = req.body;
        // try {
            const usuario = await Usuarios.findOne({
                where: {
                    email: email
                },
            });
            // res.status(200).json(usuario)
    
       
        if(!usuario){
            return res.status(400).json({"messagem": "E-mail não cadastrado ou Senha invalida!"})
              
        }
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json({"messagem": "E-mail não cadastrado ou Senha invalida!"})
        }
    

        const tokem = jwt.sign({
            id: usuario.id,
            email: usuario.email,
            nome: usuario.nome,
            userType: "user"

        }, secret.key)
        return res.json({"tokem":tokem})
    // }catch(e){
    //     res.status(e)
    // }


    }
}

module.exports = controllerAuth;