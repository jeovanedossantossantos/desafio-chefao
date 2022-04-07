const Regiao = require('./Regiao')
const Cafe = require('./Cafe')
const Acidez = require('./Acidez')
const Corpo = require('./Corpo')
const Moagem = require('./Moagem')
const Variedade = require('./Variedade')
const Torra = require('./Torra')
const Usuarios = require('./Usuarios')

Cafe.belongsTo(Regiao, {
    foreignKey: 'regiao_id',
    as: "regiao"
})
Cafe.belongsTo(Acidez, {
    foreignKey: 'acidez_id',
    as: "acidez"
})
Cafe.belongsTo(Corpo, {
    foreignKey: 'corpo_id',
    as: "corpo"
})
Cafe.belongsTo(Variedade, {
    foreignKey: 'variedade_id',
    as: "variedade"
})
Cafe.belongsTo(Moagem, {
    foreignKey: 'moagem_id',
    as: "moagem"
})
Cafe.belongsTo(Torra, {
    foreignKey: 'torra_id',
    as: "torra"
})
module.exports = {
    Regiao,
    Cafe,
    Acidez,
    Corpo,
    Moagem,
    Variedade,
    Torra,
    Usuarios
}