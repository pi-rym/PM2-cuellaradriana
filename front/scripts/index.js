const cardMovie = (movie) => {
    const cardMovie = document.createElement('div');
    cardMovie.classList.add('movieCard');
    cardMovie.innerHTML = `<img class='imgCard' src='${movie.poster}'>
                            <div class='textCardContainer'>
                            <h3 class='titleCard'>${movie.title}</h3>                
                            <p class='directorCard'> Director: ${movie.director}</p>
                            <p class='durationCard'> Duration: ${movie.duration}</p>
                            <p class='rateCard'> Rate: ${movie.rate}</p>
                            <h4>CUP CINEMA</h4>
                        </div>`;
    return cardMovie;
};

const renderHTML = (dataMovies) => {
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

$.get('https://students-api.2.us-1.fl0.io/movies', (data) => {
    renderHTML(data);
});
