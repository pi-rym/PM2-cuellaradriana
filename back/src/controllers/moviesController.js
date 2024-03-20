const { getMovies, saveMovie } = require('../services/movieService');

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

const postMovie = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } =
            req.body;
        const savedMovie = await saveMovie({
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster,
        });
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(500).json({
            error: 'Error al enviar datos de la película',
        });
    }
};

//disponibilizo
module.exports = { getAllMovies, postMovie };
