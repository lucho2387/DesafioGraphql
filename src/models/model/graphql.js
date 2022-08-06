const typeDefs =`
    type Product {
        _id: String!
        nombre: String
        descripcion: String
        codigo: String
        imagen: String
        precio: Int
        stock: Int
    }

    type Query {
        allProducts: [Product!]!
    }

    type Mutation {
        createProduct(nombre: String, descripcion: String,  codigo: String, imagen: String, precio: Int, stock: Int): Product!
        productById(_id: String): Product
        productDeleteById(_id: String): Product
    }
`;

module.exports = typeDefs 
