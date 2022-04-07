const db = require('../db')
const { DataTypes } = require("sequelize")

const Moagem = db.db.define("Moagem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "moagem"
})

module.exports = Moagem