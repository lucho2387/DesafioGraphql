const dotenv = require('dotenv');
const path = require ('path')

dotenv.config()

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || '8080',
    TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'mongo',
    NAME: process.env.NAME,
    NAME_DATABASE: process.env.NAME_DATABASE,
    PASSWORD: process.env.PASSWORD
}
