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
        productById(_id: String): Product
    }

    input ProductData {
        nombre: String
        descripcion: String
        codigo: String
        imagen: String
        precio: Int
        stock: Int
    }

    type Mutation {
        createProduct(nombre: String, descripcion: String,  codigo: String, imagen: String, precio: Int, stock: Int): Product!
        productUpdate(_id: String, input: ProductData): Product
        productDeleteById(_id: String): Product
    }
`;

module.exports = typeDefs 


 
