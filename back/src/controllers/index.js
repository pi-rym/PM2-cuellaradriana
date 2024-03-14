//defino la función controladora para mi ruta principal! la "Bienvenida"
const welcome = async (req, res) => {
    try {
        res.status(200).send(
            'Bienvenidos a nuestra app de movies en el server'
        );
    } catch (error) {
        res.status(500).json({
            error: 'Error del servidor, pedimos disculpas',
        });
    }
};

//disponibilizo la función
module.exports = welcome;
