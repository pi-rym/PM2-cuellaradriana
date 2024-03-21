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
    if (![title, year, director, duration, rate, poster].every(Boolean)) {
        return 'Rellena todos los campos por favor';
    }
    ///////////////////////
    let genreSelect = [];
    genres.forEach((checkbox) => genreSelect.push(checkbox.value));
    if (genreSelect.length === 0) {
        return 'Debes seleccionar por lo menos un género';
    }
    //////////////////////
    if (director.length < 4 || director.length > 30) {
        return 'El nombre del director debe contener entre 4 y 30 caracteres';
    }
    const regex = /^\d+h \d+min$/;
    if (!regex.test(duration)) {
        return 'La duración debe tener el formato específicado (2h 00min)';
    }
    if (!poster.includes('https://')) {
        return 'En el poster no ingresaste una URL válida';
    }
    //////////////////////
    if (rate < 1 || rate > 10) {
        return 'La calificación debe estar entre 1 y 10';
    }
    if (year < 1895 || year > 2024) {
        return 'El año debe estar entre 1900 y 2024';
    }

    ////////////////////
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
    if (error) {
        return Swal.fire({
            icon: 'warning',
            iconColor: '#172037',
            title: 'Oh oh!',
            text: error,
            confirmButtonColor: '#172037',
        });
    }

    //petición
    axios
        .post('http://localhost:3000/movies', newMovie)
        .then(() =>
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#172037',
                title: '¡Tu película ha sido almacenada, ve a "Inicio" para ver la magia!!!',
                showConfirmButton: true,
                timer: 4000,
                confirmButtonColor: '#172037',
            })
        )
        .catch((error) =>
            Swal.fire({
                icon: 'error',
                iconColor: '#172037',
                title: 'Oops...',
                text:
                    'Error al crear la película: ' + error.response.data.error,
                confirmButtonColor: '#172037',
            })
        );
    resetForm();
};

module.exports = { addMovie, resetForm };
