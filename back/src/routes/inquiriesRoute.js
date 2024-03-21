const { Router } = require('express');
const {
    getAllInquiries,
    postInquiry,
} = require('../controllers/inquiriesControllers');
const validate = require('../helpers/validate');
const validationInquiry = require('../middlewares/validateInquiries');

const inquiriesRoute = Router();

inquiriesRoute.get('/', getAllInquiries);
inquiriesRoute.post('/', validate(validationInquiry), postInquiry);

module.exports = inquiriesRoute;
