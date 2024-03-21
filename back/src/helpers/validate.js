const validate = (validation) => {
    return (req, res, next) => {
        try {
            validation(req.body);
            next();
        } catch (error) {
            next({ message: error.message, statusCode: 400 });
        }
    };
};

module.exports = validate;
