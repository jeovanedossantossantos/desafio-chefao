const {Usuarios} = require('../model')
const bcrypt = require('bcrypt')
const controllerUsuarios = {
    async registro(req, res){
       
        const {nome, email, senha} = req.body;
       

        const newSenha = bcrypt.hashSync(senha, 10);

        try{
            if(nome !== "" && email !== "" && senha.length >= 8){
                const newUsuario = await Usuarios.create({
                    nome, email, senha:newSenha
                });
                res.status(201).json(newUsuario);
                
              
            }else{
                res.status(404).json({"message":"Preenchas os campos ou suas senha é considerada não segura!"})
            }
        }catch(err){
            res.status(500).json(err)
        }

        
    }
}

module.exports = controllerUsuarios;