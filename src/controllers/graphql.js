const crypto = require('crypto')
const Product = require('../models/model/product')



function getProductos({ campo, valor }) {
    const productos = Object.values(Product)
    if (campo && valor) {
        return productos.filter(p => p[ campo ] == valor);
    } else {
        return productos;
    }
 }
 
 function getProducto({ id }) {
    if (!Product[ id ]) {
        throw new Error('Persona not found.');
    }
    return Product[ id ];
 }
 
 function createProducto({ datos }) {
    const id = crypto.randomBytes(10).toString('hex');
    const nuevoProducto = new Product(id, datos)
    Product[ id ] = nuevoProducto;
    return nuevoProducto;
 }
 
//  function updateProducto({ id, datos }) {
//     if (!Product[ id ]) {
//         throw new Error('Persona not found');
//     }
//     const personaActualizada = new Persona(id, datos)
//     Product[ id ] = personaActualizada;
//     return personaActualizada;
//  }
 
//  function deleteProducto({ id }) {
//     if (!Product[ id ]) {
//         throw new Error('Persona not found');
//     }
//     const personaBorrada = Product[ id ]
//     delete Product[ id ];
//     return personaBorrada;
//  }
 

 module.exports = { getProductos, getProducto, createProducto }