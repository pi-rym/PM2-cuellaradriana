const titleField = document.getElementById('title');
const yearField = document.getElementById('year');
const directorField = document.getElementById('director');
const durationField = document.getElementById('duration');
const rateField = document.getElementById('rate');
const posterField = document.getElementById('poster');
const formMovie = document.getElementById('formMovie');

const validateFields = () => {
    if (
        !titleField.value ||
        !yearField.value ||
        !directorField.value ||
        !durationField.value ||
        !rateField.value ||
        !posterField.value
    ) {
        alert('Todos los campos deben estar completos');
        return false;
    }
    return true;
};

const validateChb = () => {
    let genreFields = document.querySelectorAll('input:checked');
    let genreSelecUser = [];
    genreFields.forEach((chb) => genreSelecUser.push(chb.value));
    if (genreSelecUser.length === 0) {
        alert('Por favor selecciona al menos un género');
        return false;
    }
    return true;
};

const resetForm = () => {
    formMovie.reset();
};

const initFormValidation = () => {
    formMovie.addEventListener('submit', (e) => {
        e.preventDefault();
        const validChb = validateChb();
        const validFields = validateFields();
        if (validChb && validFields) {
            console.log('formulario enviado');
            titleField.value = '';
            yearField.value = '';
            directorField.value = '';
            durationField.value = '';
            rateField.value = '';
            posterField.value = '';
            const genreFields = document.querySelectorAll(
                'input[name="genre[]"]:checked'
            );
            genreFields.forEach((checkbox) => {
                checkbox.checked = false;
            });
        }
        document.getElementById('reset').addEventListener('click', resetForm);
    });
};

initFormValidation();
