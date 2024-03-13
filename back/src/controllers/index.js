//defino la función controladora para mi ruta principal! la "Bienvenida"
const welcome = (req, res) => {
    res.status(200).send('Bienvenidos a nuestra app de movies en el server');
};

//disponibilizo la función
module.exports = welcome;
