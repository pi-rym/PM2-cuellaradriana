const validationSubscriber = (emailSuscriptor) => {
    const { email } = emailSuscriptor;

    if (!email) {
        throw new Error('El email es necesario para suscribirse');
    }
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
        throw new Error('Por favor ingresa una dirección de email válida');
    }
};

module.exports = validationSubscriber;
