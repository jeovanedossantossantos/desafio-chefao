const Regiao = require('./Regiao')
const Cafe = require('./Cafe')
const Acidez = require('./Acidez')
const Corpo = require('./Corpo')
const Moagem = require('./Moagem')
const Variedade = require('./Variedade')
const Torra = require('./Torra')
const Usuarios = require('./Usuarios')
Cafe.belongsTo(Regiao,{
    foreignKey: 'regiao_id',
    // through:Regiao,
    as:"regiao"
})

// Regiao.hasMany(Cafe,{
//     foreignKey: 'regiao_id',
//     as:"cafe"
// })

Cafe.belongsTo(Acidez,{
    foreignKey: 'acidez_id',
    // through:Regiao,
    as:"acidez"
})

Cafe.belongsTo(Corpo,{
    foreignKey: 'corpo_id',
    // through:Regiao,
    as:"corpo"
})

Cafe.belongsTo(Variedade,{
    foreignKey: 'variedade_id',
    // through:Regiao,
    as:"variedade"
})

Cafe.belongsTo(Moagem,{
    foreignKey: 'moagem_id',
    // through:Regiao,
    as:"moagem"
})

Cafe.belongsTo(Torra,{
    foreignKey: 'torra_id',
    // through:Regiao,
    as:"torra"
})


// Regiao.hasMany(Cafe,{
//     foreignKey: 'regiao_id',
//     as:"cafe"
// })

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
    Usuarios
}