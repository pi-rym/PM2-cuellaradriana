const { getMovies } = require('../services/movieService');

// defino la función controladora de mi ruta de entidad 'movies'
const getAllMovies = async (req, res) => {
    try {
        const movies = await getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({
            error: 'Error interno del servidor',
        });
    }
};

//disponibilizo
module.exports = getAllMovies;
