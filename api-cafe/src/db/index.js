const Sequelize = require("sequelize")
const dotenv = require('dotenv/config')
// const db = {}

try {
    db = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
        dialect: "mysql",
        host: process.env.DBHOST,        

    })
    console.log("Conexão bem sucedida")
} catch (err) {
    console.log("Erro " + err)
}


module.exports = {
    Sequelize: Sequelize,
    db: db
}