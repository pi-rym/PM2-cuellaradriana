const Movie = require('../models/Movie');

const getMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        throw new Error('Error al obtener las películas', error);
    }
};

const saveMovie = async (movie) => {
    try {
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        return savedMovie;
    } catch (error) {
        throw new Error('Error al enviar película a la base de datos', error);
    }
};

module.exports = {
    getMovies,
    saveMovie,
};
