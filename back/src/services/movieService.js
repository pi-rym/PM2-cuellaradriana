const Movie = require('../models/Movie');

const getMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        throw new Error('Error al obtener las películas', error);
    }
};

module.exports = {
    getMovies,
};
