//Requiero mi servidor!
const app = require('./src/server');
//Guardo el puerto en una variable
const PORT = 3000;

//Dejo a mi servidor a la escucha de peticiones!
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
