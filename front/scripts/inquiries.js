const axios = require('axios');

const validateFields = ({ name, email, inquiry }) => {
    if (![name, email, inquiry].every(Boolean)) {
        return Swal.fire({
            icon: 'warning',
            iconColor: '#172037',
            title: 'Oh oh!',
            text: 'Todos los campos deben ser llenados',
            confirmButtonColor: '#172037',
        });
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
    const textarea = document.querySelector('textarea');
    textarea.value = '';
};

const sendInquiry = (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const inquiry = document.getElementById('inquiry').value.trim();

    const subscriptionCheckbox = document.getElementById('subscription');
    let subscription;

    if (subscriptionCheckbox.checked) {
        subscription = true;
    } else {
        subscription = false;
    }

    validateFields({ name, email, inquiry });

    const newInquiry = {
        name,
        email,
        inquiry,
        subscription,
    };

    axios
        .post('http://localhost:3000/inquiries', newInquiry)
        .then(() =>
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#172037',
                title: '¡Tu consulta ha sido enviada, pronto te responderemos vía mail!',
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
                    'Error al enviar la consulta: ' + error.response.data.error,
                confirmButtonColor: '#172037',
            })
        );

    resetForm();
};

module.exports = sendInquiry;
