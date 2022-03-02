const db = require('../db')
const {DataTypes} = require("sequelize")

const Regiao = db.db.define("Regiao",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    foto_bandeira:{
        type: DataTypes.STRING,
    },
    pais:{
        type: DataTypes.TEXT,
    },
    descricao:{
        type: DataTypes.STRING,
    },
    colocacao:{
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },


},{
    tableName: "regiao"
})

module.exports = Regiao