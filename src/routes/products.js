const express = require('express');
const router = express.Router();
const ControllerProducts = require('../controllers/products');


class ProductsRouter{
    constructor() {
        this.controllerProducts = new ControllerProducts() 
    }

    start() {
        router.get('/products/:id?', this.controllerProducts.obtenerProductos)
        router.post('/products', this.controllerProducts.guardarProducto)
        router.put('/products/:id', this.controllerProducts.actualizarProducto)
        router.delete('/products/:id', this.controllerProducts.eliminarProducto)
        
        return router
    }
}



module.exports = ProductsRouter;