const db = require('../db')
const { DataTypes } = require("sequelize")

const Torra = db.db.define("Torra", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "torra"
})

module.exports = Torra