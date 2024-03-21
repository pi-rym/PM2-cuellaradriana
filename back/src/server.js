//Requiero el Objeto express de node
const express = require('express');
//Requiero mi ruta principal
const router = require('./routes/index');
//Requiero mis middlewares
const morgan = require('morgan');
const cors = require('cors');

//creo una instancia de express
const app = express();

//implementacion de los middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//enlazo el router con el servidor
app.use(router);

//Nuevo manejador de errores
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message });
});

//disponibilizo
module.exports = app;
