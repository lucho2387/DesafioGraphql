const mongoose = require('mongoose');
const config = require('../config/config')

const conexionDB = async () => {
    try {

        const db = await mongoose.connect(`mongodb+srv://${config.NAME}:${config.PASSWORD}@cluster0.9xnml.mongodb.net/${config.NAME_DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Se conecto a la BD:", db.connection.name)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = conexionDB
