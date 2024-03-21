const { getMovies, saveMovie } = require('../services/movieService');
const catchAsync = require('../utils/catchAsync');

// defino la función controladora de mi ruta de entidad 'movies'
const getAllMovies = async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
};

const postMovie = async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
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
};

//disponibilizo
module.exports = {
    getAllMovies: catchAsync(getAllMovies),
    postMovie: catchAsync(postMovie),
};
