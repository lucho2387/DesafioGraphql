const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const Producto = require('../models/model/product');

var schema = buildSchema(`
    type Product {
        id: String,
        nombre: String,
        descripcion: String,
        codigo: Int,
        imagen: String,
        precio: Int,
        stock: Int
    },
    type Query {
        products: [Product]
    },
    type Mutation {
        storeProduct(nombre: String!, descripcion: String!, codigo: Int!, imagen: String!, precio: Int!, stock: Int!,): Product,
        productById(id: String): Product,
        deleteProductById(id: String): Product
    },
`);

const storeProduct = async function ({ nombre, descripcion, codigo,  imagen, precio, stock }) {
    let product = { nombre, descripcion, codigo,  imagen, precio, stock };
    return await Producto.create(product);
};

const products = async function () {
    return await Producto.find();
}

const productById = async function ({ id }) {
    return await Producto.findById(id);
}

const deleteProductById = async function ({id}) {
    return await Producto.delete(id);
}

const root = {
    products: products,
    storeArticle: storeProduct,
    productById: productById,
    deleteProductById: deleteProductById
};

module.exports.start = function () {
    return graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
    });
}