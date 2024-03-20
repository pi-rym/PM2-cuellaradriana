const fetchMovies = require('./fetchMovies');
const { addMovie, resetForm } = require('./validateForm');

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
    const formMovie = document.getElementById('formMovie');
    formMovie?.addEventListener('submit', (e) => {
        e.preventDefault();
        addMovie();
    });
    const reset = document.getElementById('reset');
    reset?.addEventListener('click', resetForm);
});
