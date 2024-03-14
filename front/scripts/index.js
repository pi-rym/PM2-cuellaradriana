const renderCards = require('./renderCards');
const axios = require('axios');

const fetchData = async () => {
   try {
      const data = await axios.get('http://localhost:3000/movies');
      renderCards(data.data);
   } catch (error) {
      console.log(error.message);
   }
};

fetchData();
