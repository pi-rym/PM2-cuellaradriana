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

module.exports = cardMovie;
