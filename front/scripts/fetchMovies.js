const renderCards = require('./renderCards');
const axios = require('axios');

const fetchMovies = async () => {
    try {
        const { data } = await axios.get('http://localhost:3000/movies');
        renderCards(data);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = fetchMovies;
