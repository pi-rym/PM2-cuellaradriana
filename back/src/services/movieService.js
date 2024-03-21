const Movie = require('../models/Movie');

const getMovies = async () => {
    const movies = await Movie.find();
    return movies;
};

const saveMovie = async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
};

module.exports = {
    getMovies,
    saveMovie,
};
