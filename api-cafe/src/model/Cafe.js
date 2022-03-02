const db = require('../db')
const {DataTypes} = require("sequelize")
const Regiao = require('./Regiao')
const Cafe = db.db.define("cafe",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    foto_cafe:{
        type: DataTypes.STRING,
    },
    safra:{
        type: DataTypes.STRING,
    },
    tipo:{
        type: DataTypes.STRING,
    },
    regiao_id: {
        type: DataTypes.INTEGER,
        reference:{
            model:Regiao,
            key:"id"
        },
    },
   
    descricao:{
        type: DataTypes.TEXT,
    },
   produtores:{
        type: DataTypes.STRING,
    },
    
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },


},{
    tableName: "cafe"
})

module.exports = Cafe