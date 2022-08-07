const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema }  = require('@graphql-tools/schema')
const typeDefs = require('../models/model/graphql')
const resolvers  = require('../controllers/resolvers')
const router = express.Router();

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

class GraphqlRouter{
    constructor() {
    }
    start() {
        router.use('/graphql', graphqlHTTP({
            schema,
            graphiql: true
         }));
        return router
    }
} 

module.exports = GraphqlRouter 
