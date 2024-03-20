const axios = require('axios');

const validateFields = ({
    title,
    year,
    director,
    duration,
    genres,
    rate,
    poster,
}) => {
    //verificando que los inputs donde se tipea no estén vacíos.
    if ([!title, !year, !director, !duration, !rate, !poster].every(Boolean)) {
        return 'Rellena todos los campos por favor';
    }

    //Capturando los checkbox seleccionados para poder validar
    let genreSelect = [];
    genres.forEach((checkbox) => genreSelect.push(checkbox.value));
    //Verificando que hayan seleccionado al menos 1 género
    if (genreSelect.length === 0) {
        return 'Debes seleccionar por lo menos un género';
    }

    //Validando strings
    if (director.length < 4 || director.length > 30) {
        return 'El nombre del director debe contener entre 4 y 30 caracteres';
    }
    const regex = /^\d+h \d+min$/;
    if (!regex.test(duration)) {
        return 'La duración debe tener el formato específicado (2h 00min)';
    }

    //Validando números y fechas
    if (rate < 1 || rate > 10) {
        return 'La calificación debe estar entre 1 y 10';
    }
    if (year < 1900 || year > 2024) {
        return 'El año debe estar entre 1900 y 2024';
    }

    //Validando url
    if (!poster.includes('https://')) {
        return 'En el poster no ingresaste una URL válida';
    }

    return null;
};

const resetForm = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        if (input) {
            input.value = '';
        }
    });
    const genreFields = document.querySelectorAll(
        'input[name="genre[]"]:checked'
    );
    genreFields.forEach((checkbox) => {
        checkbox.checked = false;
    });
};

const addMovie = () => {
    //Tomo los valores de los inputs y elimino espacios vacíos antes y después
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value.trim();
    const director = document.getElementById('director').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const genres = document.querySelectorAll('input:checked');
    const rate = document.getElementById('rate').value.trim();
    const poster = document.getElementById('poster').value.trim();

    let genre = [];
    genres.forEach((checkbox) => genre.push(checkbox.value));

    const newMovie = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
    };
    console.log(newMovie);

    //Validación
    const error = validateFields({
        title,
        year,
        director,
        duration,
        genres,
        rate,
        poster,
    });
    if (error) return alert(error);
    console.log(newMovie);
    //verificación
    axios
        .post('http://localhost:3000/movies', newMovie)
        .then(() => alert('Película Creada'))
        .catch((error) => alert('error al crear la película' + error));
    resetForm();
    console.log(newMovie);
};

module.exports = { addMovie, resetForm };
