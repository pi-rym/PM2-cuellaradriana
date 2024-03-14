const axios = require('axios');

class Movie {
    constructor({ title, director, duration, rate, poster }) {
        if (!title || !director || !duration || !rate || !poster) {
            throw new Error('Propiedades Inválidas o Incompletas');
        }

        this.title = title;
        this.director = director;
        this.duration = duration;
        this.rate = rate;
        this.poster = poster;
    }
}

const getMovies = async () => {
    try {
        const data = await axios.get(
            'https://students-api.up.railway.app/movies'
        );
        const dataMovie = data.data;
        return dataMovie.map((movie) => new Movie(movie));
    } catch (error) {
        console.error('Error al obtener las películas', error);
    }
};

module.exports = {
    getMovies,
    Movie,
};
