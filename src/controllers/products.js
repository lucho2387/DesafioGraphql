const ApiProducts = require('../api/products');


class ControllerProducts {
    constructor() {
        this.apiProducts= new ApiProducts()
    }

    obtenerProductos = async (req, res) => {
        try {
            let id = req.params.id
            let Product = await this.apiProducts.obtenerProductos(id)

            res.json(Product);

        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    guardarProducto = async (req, res) => {
        try {
            let Product = req.body
            let saveProduct = await this.apiProducts.guardarProducto(Product) 

            res.json({mensaje: "El producto fue guardado correctamente"});

        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    } 

    actualizarProducto = async (req, res) => {
        try {
            let product = req.body
            let id = req.params.id 
            let updateProduct = await this.apiProducts.actualizarProducto(id, product)
            
            res.json({mensaje: "El producto fue actualizado correctamente"});

        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    eliminarProducto = async (req, res) => {
        try {
            let id = req.params.id 
            let deleteproduct = await this.apiProducts.eliminarProducto(id)

            res.json({mensaje: "El producto fue eliminado correctamente"});

        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

}

module.exports = ControllerProducts
