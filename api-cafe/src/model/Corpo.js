const db = require('../db')
const {DataTypes} = require("sequelize")


const Corpo = db.db.define("Corpo",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},{
    tableName:"corpo"
})

module.exports = Corpo