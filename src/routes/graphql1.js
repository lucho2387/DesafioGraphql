const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { schema }  = require('../models/model/graphql')
const { getProductos, getProducto, createProducto } = require('../controllers/graphql');
const router = express.Router();


class GraphqlRouter{
    constructor() {
    }

    start() {
        router.get('/graphql', graphqlHTTP({
            schema: schema,
            rootValue: {
                getProductos,
                getProducto,
                createProducto
            },
            graphiql: true,
         }));
        return router
    }
}



module.exports = GraphqlRouter;