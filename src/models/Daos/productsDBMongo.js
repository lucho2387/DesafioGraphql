const productDTO = require('../dto/products')
const ProductsBaseDAO = require('./products') 
const Product = require('../model/product')

class ProductsDBMongo extends ProductsBaseDAO {
    constructor() {
        super('productos', Product)
    }
}

module.exports = ProductsDBMongo
