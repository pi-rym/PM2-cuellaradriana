require('dotenv').config();
const { MONGO_URI } = process.env;
const mongoose = require('mongoose');

const dbCon = async () => {
    await mongoose.connect(MONGO_URI);
};

module.exports = dbCon;
