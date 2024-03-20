const cardMovie = require('./cardMovie');

const renderCards = (dataMovies) => {
    const containerMoviesCards = document.getElementById(
        'containerMoviesCards'
    );
    if (containerMoviesCards) {
        containerMoviesCards.innerHTML = '';
        const movies = dataMovies;
        const moviesHTML = movies.map(cardMovie);
        moviesHTML.forEach((movie) => {
            containerMoviesCards.appendChild(movie);
        });
    } else {
        return;
    }
};

module.exports = renderCards;
