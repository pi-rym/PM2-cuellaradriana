const validationInquiry = (inquiryUser) => {
    const { name, email, inquiry, subscription } = inquiryUser;

    if (!name) {
        throw new Error('El nombre es necesario para enviar su consulta');
    }
    if (typeof name !== 'string') {
        throw new Error('El nombre debe ser un string');
    }
    var regexName = /^[a-zA-Z\s]+$/;
    if (!regexName.test(name)) {
        throw new Error('El nombre solo debe contener letras y espacios');
    }

    ///////////////////////

    if (!email) {
        throw new Error('El email es necesario para suscribirse');
    }
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(email)) {
        throw new Error('Por favor ingresa una dirección de email válida');
    }

    ////////////////

    if (!inquiry) {
        throw new Error('La consulta es necesaria');
    }
    if (typeof inquiry !== 'string') {
        throw new Error('La consulta debe ser un string');
    }

    /////////////

    if (subscription === '') {
        throw new Error('Es necesario saber si desea o no suscribirse');
    }
    if (typeof subscription !== 'boolean') {
        throw new Error(
            'La suscripcion debe ser un valor booleano (true/false)'
        );
    }
};

module.exports = validationInquiry;
