const config = require('../config/config')
const ProductsFactoryDAO = require('../models/Daos/productsFactory')
// const Products = require('../models/model/product')

class ApiProducts {
    constructor() {
        this.productsDAO = ProductsFactoryDAO.get(config.TIPO_PERSISTENCIA)
    }

    async obtenerProductos(id){
        return await this.productsDAO.obtenerProductos(id)
    }

    async guardarProducto(product){
        // ApiProducts.asegurarProductoValida(product,true)
        return await this.productsDAO.guardarProducto(product)
    }

    async actualizarProducto(id,product){
        // ApiProducts.asegurarProductoValida(product,false)
        return await this.productsDAO.actualizarProducto(id,product)
    }

    async eliminarProducto(id){
        return await this.productsDAO.eliminarProducto(id)
    }

    // static asegurarProductoValida(product, requerido) {
    //     try {
    //         Products.validar(product, requerido)
    //     } catch (error) {
    //         throw new Error("El producto posee unb formato no valido o faltan datos: " + error.details[0].message)
    //     }
    // }
}

module.exports = ApiProducts
