const axios = require('axios');

const validateEmail = (email) => {
    if (!email) {
        return Swal.fire({
            icon: 'warning',
            iconColor: '#172037',
            title: 'Oh oh!',
            text: 'El email debe ser ingresado',
            confirmButtonColor: '#172037',
        });
    }
};

const resetEmail = () => {
    const emailFooter = document.getElementById('emailFormFooter');
    emailFooter.value = '';
};

const handlerSubmitEmail = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailFormFooter').value.trim();

    validateEmail(email);
    const newEmail = { email };

    axios
        .post('http://localhost:3000/subscribers', newEmail)
        .then(() => {
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                iconColor: '#172037',
                title: '¡Tu email ha sido registrado con éxito, espera pronto nuestras novedades!',
                showConfirmButton: true,
                timer: 4000,
                confirmButtonColor: '#172037',
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                iconColor: '#172037',
                title: 'Oops...',
                text: 'Error al suscribirte: ' + error.response.data.error,
                confirmButtonColor: '#172037',
            });
        });

    resetEmail();
};

module.exports = handlerSubmitEmail;
