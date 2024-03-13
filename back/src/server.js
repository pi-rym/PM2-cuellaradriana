//Requiero el Objeto express de node
const express = require('express');
//Requiero mi ruta principal
const router = require('./routes/index');

//creo una instancia
const app = express();

//enlazo el router con el servidor
app.use(router);

//disponibilizo
module.exports = app;
