//1. Requiero la clase Router de Express
const { Router } = require('express');
//1.2 Requiero a mi función controladora de mi ruta principal.
const welcome = require('../controllers/index');
//2. Requiero a mi ruta de entidad movies
const moviesRoute = require('./moviesRoute');

//1.1 Instancio un objeto de Router
const router = Router();

//1.3 Creo la ruta y el método que empleará, con la función controladora
router.get('/', welcome);

//2.1 Enlazo/Gestiono la ruta de entidad movies
router.use('/movies', moviesRoute);

//1.4 Disponibilizo mi enrutador para que pueda ser requerido por mi servidor
module.exports = router;
