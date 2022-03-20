const Regiao = require('./Regiao')
const Cafe = require('./Cafe')
const Acidez = require('./Acidez')
const Corpo = require('./Corpo')
const Moagem = require('./Moagem')
const Variedade = require('./Variedade')
const Torra = require('./Torra')

Cafe.belongsTo(Regiao,{
    foreignKey: 'regiao_id',
    // through:Regiao,
})

// Cafe.hasMany(Acidez,{
//     foreignKey: 'acidez_id',
//     through:Acidez,
// })

// Cafe.hasMany(Corpo,{
//     foreignKey: 'corpo_id',
//     through:Corpo,
// })

// Cafe.hasMany(Moagem,{
//     foreignKey: 'moagem_id',
//     through:Moagem,
// })

// Cafe.hasMany(Moagem,{
//     foreignKey: 'moagem_id',
//     through:Moagem,
// })

module.exports = {
    Regiao,
    Cafe,
    Acidez,
    Corpo,
    Moagem,
    Variedade,
    Torra,
}