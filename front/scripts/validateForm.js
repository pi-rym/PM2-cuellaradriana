const inputsKeyboard = document.querySelectorAll('.inputKeyboard');
console.log(inputsKeyboard);

const validateFields = () => {
    let control = 0;
    inputsKeyboard.forEach((input) => {
        if (!input.value) {
            control++;
        }
    });
    if (control > 0) {
        alert('Todos los campos deben estar completos');
        return false;
    } else {
        return true;
    }
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

const initFormValidation = () => {
    formMovie.addEventListener('submit', (e) => {
        e.preventDefault();
        const validFields = validateFields();
        const validChb = validateChb();
        if (validFields && validChb) {
            resetForm();
            console.log('formulario enviado');
        }
    });
};

initFormValidation();
