const Product  = require('../models/model/product')

const resolvers = {
    Query: {
        allProducts: async (parent, args) => {
            const products = await Product.find()
            return products
        }
    },
    Mutation: {
        createProduct: async (parent, args) => {
            const product = await Product.create(args)
            product._id = product._id.toString()
            return product
        },

        productById: async (parent, args) => {
            const products = await Product.findById(args._id)
            return products
        },

        productDeleteById: async (parent, args) => {
            const { _id } = args
            const productsDelete = await Product.deleteOne({_id})
            return productsDelete
        }
    }
}

module.exports = resolvers
