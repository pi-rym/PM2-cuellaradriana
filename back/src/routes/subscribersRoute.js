const { Router } = require('express');
const {
    getAllSubscribers,
    postSubscriber,
} = require('../controllers/subscribersControllers');
const validate = require('../helpers/validate');
const validationSubscriber = require('../middlewares/validateSubscriber');

const suscribersRoute = Router();

suscribersRoute.get('/', getAllSubscribers);
suscribersRoute.post('/', validate(validationSubscriber), postSubscriber);

module.exports = suscribersRoute;
