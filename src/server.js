const express = require('express');
const app = express();
const config = require('./config/config')
const compression = require('compression');
const logger = require('morgan');
const GraphqlRouter = require('./routes/graphql');
const ProductsRouter = require('./routes/products');


app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

const PORT = config.PORT || 8080;

const graphqlRouter = new GraphqlRouter()
const productRouter = new ProductsRouter()

app.use('/api', graphqlRouter.start());
app.use('/api', productRouter.start());

const server = app.listen(PORT, () => {
    console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
)})


server.on('error', error => {
    console.log('error en el servidor:', error);
});
