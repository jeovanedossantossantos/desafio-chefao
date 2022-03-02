const Sequelize = require("sequelize")
const dotenv = require('dotenv/config')
// const db = {}

try {
    db = new Sequelize(process.env.BANCO, process.env.USER, process.env.PASWORD, {
        dialect: "mysql",
        host: process.env.PORTA,

    })
    console.log("Conexão bem sucedida")
} catch (err) {
    console.log("Erro " + err)
}


module.exports = {
    Sequelize: Sequelize,
    db: db
}