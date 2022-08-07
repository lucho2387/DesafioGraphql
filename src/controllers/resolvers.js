const Product  = require('../models/model/product')

const resolvers = {
    Query: {
        allProducts: async (parent, args) => {
            const products = await Product.find()
            return products
        },

        productById: async (parent, args) => {
            const products = await Product.findById(args._id)
            return products
        },
    },
    Mutation: {
        createProduct: async (parent, args) => {
            const product = await Product.create(args)
            product._id = product._id.toString()
            return product
        },

        productUpdate: async (parent, args) => {
            const { _id, input } = args
            return await Product.findByIdAndUpdate({_id}, input, {new: true})
        },

        productDeleteById: async (parent, args) => {
            const { _id } = args
            return await Product.findByIdAndDelete({_id})
        }
    }
}

module.exports = resolvers
