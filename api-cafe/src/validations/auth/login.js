const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        email: Joi.string().required(),
        senha: Joi.string().min(8).required(),
    })
})