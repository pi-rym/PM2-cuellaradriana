const cardMovie = require('./cardMovie');

const renderCards = (dataMovies) => {
    const containerMoviesCards = document.getElementById(
        'containerMoviesCards'
    );
    containerMoviesCards.innerHTML = '';
    const movies = dataMovies;
    const moviesHTML = movies.map(cardMovie);
    moviesHTML.forEach((movie) => {
        containerMoviesCards.appendChild(movie);
    });
};

module.exports = renderCards;
