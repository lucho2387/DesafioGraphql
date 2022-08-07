<!-- GRAPHQL -->
// Nuevo Producto
  mutation {
    createProduct(nombre: "Camra Inalambrica", descripcion: "asdasdasd", codigo: "020" , imagen: "https://http2.mlstatic.com/D_NQ_NP_835568-MLA48771299156_012022-O.webp", precio: 15000, stock: 5){
       _id
       nombre
       descripcion
       codigo
       imagen
       precio
       stock
     }
   } 
// Lista de Productos
{
   allProducts {    
                _id
              nombre
              precio
              stock
   }
}
// Buscar un producto
{
     productById(_id: "62efbc33a58ea019f88b316e") 
     {
       _id
       nombre
       descripcion
       precio
       stock
     }
 }
// Actualizar un producto
 mutation{
     productUpdate(_id: "62efbc33a58ea019f88b316e", input: {
      nombre : "Camara 2"
      precio : 20000
      stock : 5
    }) {
         _id
         nombre
        precio
             stock
     }
  }
// Eliminar un Producto
 mutation{
     productDeleteById(_id: "62efb675404678264483c458") 
      {
        _id
        nombre
      }
  }
