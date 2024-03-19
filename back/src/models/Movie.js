const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    year: {
        type: Number,
        require: true,
        min: 1900,
        max: 2024,
    },
    director: {
        type: String,
        require: true,
    },
    duration: {
        type: String,
        require: true,
    },
    genre: {
        type: [String],
        require: true,
    },
    rate: {
        type: Number,
        require: true,
        min: 1,
        max: 10,
    },
    poster: {
        type: String,
        require: true,
        unique: true,
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
