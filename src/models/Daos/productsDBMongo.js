const productDTO = require('../dto/products')
const ProductsBaseDAO = require('./products') 
const ProductoSchema = require('../model/product')

class ProductsDBMongo extends ProductsBaseDAO {
    constructor() {
        super('productos', ProductoSchema)
    }
}

module.exports = ProductsDBMongo
