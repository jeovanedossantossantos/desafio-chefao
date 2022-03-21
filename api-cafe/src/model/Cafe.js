const db = require('../db')
const {DataTypes} = require("sequelize")
const Regiao = require('./Regiao')
const Acidez = require('./Acidez')
const Corpo = require('./Corpo')
const Moagem = require('./Moagem')
const Variedade = require('./Variedade')
const Torra = require('./Torra')

const Cafe = db.db.define("cafe",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
    },
    foto_cafe:{
        type: DataTypes.STRING,
    },foto_cafe_1:{
        type: DataTypes.STRING,
    },foto_cafe_2:{
        type: DataTypes.STRING,
    },nota:{
        type: DataTypes.STRING,
    },peso_liquido:{
        type: DataTypes.STRING,
    },preco:{
        type: DataTypes.STRING,
    },preco:{
        type: DataTypes.STRING,
    },
    
    regiao_id: {
        type: DataTypes.INTEGER,
        reference:{
            model:Regiao,
            key:"id"
        },
    },
    corpo_id: {
        type: DataTypes.INTEGER,
        reference:{
            model:Corpo,
            key:"id"
        },
    },
    variedade_id: {
        type: DataTypes.INTEGER,
        reference:{
            model:Variedade,
            key:"id"
        },
    },
    torra_id:{
        type: DataTypes.INTEGER,
        reference:{
            model:Torra,
            key:"id"
        },
    },
    acidez_id: {
        type: DataTypes.INTEGER,
        reference:{
            model:Acidez,
            key:"id"
        },
    },
    moagem_id: {
        type: DataTypes.INTEGER,
        reference:{
            model:Moagem,
            key:"id"
        },
    },
   
    descricao:{
        type: DataTypes.TEXT,
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