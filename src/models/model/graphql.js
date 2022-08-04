const { buildSchema } = require('graphql')

class Producto{
    constructor(id, { nombre, descripcion, codigo, imagen, precio,stock}) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
    }
}

// const schema = buildSchema(`
// type Persona {
//   id: ID!
//   nombre: String,
//   edad: Int
// }
// input PersonaInput {
//   nombre: String,
//   edad: Int
// }
// type Query {
//   getPersona(id: ID!): Persona,
//   getPersonas(campo: String, valor: String): [Persona],
// }
// type Mutation {
//   createPersona(datos: PersonaInput): Persona
//   updatePersona(id: ID!, datos: PersonaInput): Persona,
//   deletePersona(id: ID!): Persona,
// }
// `);

const schema = buildSchema(`
    type Producto {
        id: ID!,
        nombre: String,
        descripcion: String,
        codigo: Int,
        imagen: String,
        precio: Int,
        stock: Int
    },
    input ProductoInput {
        nombre: String,
        descripcion: String,
        codigo: Int,
        imagen: String,
        precio: Int,
        stock: Int
    },
    type Query {
        getProducto(id: ID!): Producto,
        getProductos(campo: String, valor: String): [Producto],
    },
    type Mutation {
        createProducto(datos: ProductoInput): Producto
    },
`);

module.exports = { Producto,schema }