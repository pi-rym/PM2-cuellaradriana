const renderCards = require('./renderCards');
const axios = require('axios');

const fetchData = async () => {
    try {
        const data = await axios.get(
            'https://students-api.up.railway.app/movies'
        );
        console.log(data.data);
        renderCards(data.data);
    } catch (error) {
        console.log(error.message);
    }
};

fetchData();
