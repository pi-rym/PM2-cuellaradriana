const yup = require('yup');

const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const schema = yup.object().shape({
        title: yup
            .string('El título debe ser un string')
            .max(
                203,
                'La película con el nombre más largo ocupa 203 carácteres, no quieras engañarnos !!!'
            )
            .required('Sin el título campo no podemos crear la película'),
        year: yup
            .number('Es un año, por favor ingresa un número')
            .min(1895, 'No hay registro de películas antes de este año')
            .max(
                2024,
                '¿Vives en el futuro, que ya sabes los estrenos del 2025?'
            )
            .integer('Un año es un número entero')
            .required('Sin el año de estreno no podemos crear la película'),
        director: yup
            .string('El nombre del director debe ser un string')
            .min(4, 'Por favor ingresa el nombre completo del director')
            .max(30, 'Este nombre es demasiado largo.')
            .matches(
                /^[a-zA-Z\s]+$/,
                'Por favor, en el nombre del director solo letras y espacios'
            )
            .required('Sin director no podemos crear la película'),
        duration: yup
            .string('La duración debe ser un string')
            .matches(/^\d+h\s+\d+min$/, 'El formato debe ser: 2h 00min')
            .required('Sin duración no podemos crear la película'),
        genre: yup
            .array('El género debe venir en un array')
            .of(yup.string())
            .min(1, 'El array de géneros debe contener por lo menos 1 género')
            .required('Sin géneros no podemos crear la película'),
        rate: yup
            .number('La calificación debe ser un número')
            .min(1, 'La calificación mínima es 1')
            .max(10, 'La calificación máxima es 10')
            .required('Sin calificación no podemos crear la película'),
        poster: yup
            .string('El poster debe enviarse en formato string')
            .url('El string debe ser una URL válida')
            .required('Sin imágen o poster no podemos crear la película'),
    });
    schema
        .validate({ title, year, director, duration, genre, rate, poster })
        .then(() => {
            return next();
        })
        .catch((error) => {
            return next({ message: error.message, statusCode: 400 });
        });
};

module.exports = { validateMovie };
