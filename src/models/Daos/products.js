const mongoose = require('mongoose');
const conexionDB = require('../../config/conexionMongo')
const Product = require('../model/product')

conexionDB()

class ProductsBaseDAO {
    
    constructor(collection, schema) {
        this.collection = Product;
    }


    async obtenerProductos(id) {
        try {
            if(id) {
                const product = await this.collection.findOne({_id: id})
                return product
            }
            else {
                const products = await this.collection.find()
                return products
            }
        } catch (error) {
            console.log(error)
        }
    }


    async guardarProducto(product) {
        try {

            await this.collection.create(product)
            return product

        } catch (error) {
            console.log(error)
            return product
        }
    }

    async actualizarProducto(id,product) {
        try {

            await this.collection.updateOne({ _id: id }, product)
            return product

        } catch (error) {
            console.log(error)
            return product
        }
    }

    async eliminarProducto(id) {
        try {
            const deleteProduct = await this.collection.deleteOne({ _id: id })
            return deleteProduct

        } catch (error) {
            console.log(error)
            return deleteProduct
        }
    }

}

module.exports = ProductsBaseDAO
