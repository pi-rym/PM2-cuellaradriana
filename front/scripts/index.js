// console.log(tempData);
const cardMovie = (movie) => {
    return `<div class='movieCard'>
                <img class='imgCard' src='${movie.poster}'>
                <div class='textCardContainer'>
                    <h3 class='titleCard'>${movie.title}</h3>                
                    <p class='directorCard'> Director: ${movie.director}</p>
                    <p class='rateCard'> Rate: ${movie.rate}</p>
                    <p class='durationCard'> Duration: ${movie.duration}</p>
                </div>
            </div>`;
};

const renderHTML = (movies, container) => {
    container.innerHTML = '';
    for (const movie of movies) {
        const movieInHTML = cardMovie(movie);
        container.innerHTML += movieInHTML;
    }
};

const containerMoviesCards = document.querySelector('#containerMoviesCards');

renderHTML(tempData, containerMoviesCards);
