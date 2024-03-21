const fetchMovies = require('./fetchMovies');
const { addMovie, resetForm } = require('./validateForm');
const handlerSubmitEmail = require('./subscriptions');
const sendInquiry = require('./inquiries');

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();

    const formMovie = document.getElementById('formMovie');
    formMovie?.addEventListener('submit', (e) => {
        e.preventDefault();
        addMovie();
    });
    const reset = document.getElementById('reset');
    reset?.addEventListener('click', resetForm);

    const formSuscriptions = document.getElementById('formContainerFooter');
    formSuscriptions.addEventListener('submit', handlerSubmitEmail);

    const formContact = document.getElementById('formContact');
    formContact?.addEventListener('submit', sendInquiry);
});
