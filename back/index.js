require('dotenv').config();
const { PORT } = process.env;
const app = require('./src/server');
const dbCon = require('./src/config/dbCon');

dbCon()
    .then((res) => {
        app.listen(PORT, () =>
            console.log(`Servidor escuchando en el puerto ${PORT}`)
        );
    })
    .catch((err) => {
        throw new Error('Error en conexión al servidor', err);
    });
