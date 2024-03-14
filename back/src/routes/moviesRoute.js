//1. Requiero la clase Router de nuevo para poder crear una ruta de entidad
const { Router } = require('express');
//1.3 Requiero la funcion controladora para poder enviarla como cb
const getAllMovies = require('../controllers/moviesController');

//1.1 Instancio un objeto de mi clase Router
const moviesRoute = Router();

//1.2 Asigno el método de petición que va a manejar esta ruta y le indicó que función controladora va a usar
moviesRoute.get('/', getAllMovies);

//1.4 Disponibilizo
module.exports = moviesRoute;
