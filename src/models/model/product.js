const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nombre : {
        type:String,
        required: true
    },
    descripcion : {
        type:String,
        required: true
    },
    codigo : {
        type:String,
        required: true,
        unique: true
    },
    imagen : {
        type:String,
        required: true
    },
    precio : {
        type:Number,
        required: true
    },
    stock : {
        type:Number,
        required: true
    }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Product = mongoose.model('productos', ProductSchema)
module.exports = Product;
