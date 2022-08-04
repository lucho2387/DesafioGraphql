const axios = require('axios')

const producto = 
    {
        "nombre": "Cámara de seguridad Nueva",
        "descripcion": "Definición de la cámara: 2MP. Capacidad de almacenamiento de 256GB. Micrófono incluido. Incluye visión nocturna. Peso: 218g. Ideal para control y seguridad de hogares, oficinas y edificios.",
        "codigo": "012",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_878234-MLA48771138882_012022-O.webp",
        "precio": 5650,
        "stock": 5
      }

const productoActualizar= 
    {
        "nombre": "Cámara Sony",
        "precio": 1250,
        "stock": 10
    }

axios.get('http://localhost:8080/api/products')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })

axios.post('http://localhost:8080/api/products', producto)
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })

axios.put('http://localhost:8080/api/products/62e7cd6c41a34a1fb854d968', productoActualizar)
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })

axios.delete('http://localhost:8080/api/products/62e7cd6c41a34a1fb854d968')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
