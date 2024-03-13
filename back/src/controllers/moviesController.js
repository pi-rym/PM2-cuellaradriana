// defino la función controladora de mi ruta de entidad 'movies'
const getMovies = (req, res) => {
    res.status(200).send(
        'Proximamente encontrarás todos los datos de las películas'
    );
};

//disponibilizo
module.exports = getMovies;
