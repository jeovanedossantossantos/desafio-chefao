const secret = require('../configs/secret')
const expressJWT = require('express-jwt')


module.exports = expressJWT({
   
    secret: secret.key,
    algorithms: ['HS256']
   
})