const subscribersService = require('../services/subscribersService');
const catchAsync = require('../utils/catchAsync');

const getAllSubscribers = async (req, res) => {
    const subscribers = await subscribersService.getSubscribers();
    res.status(200).json(subscribers);
};

const postSubscriber = async (req, res) => {
    const { email } = req.body;
    const savedSubscriber = await subscribersService.saveSubscriber({
        email,
    });
    res.status(201).json(savedSubscriber);
};

module.exports = {
    getAllSubscribers: catchAsync(getAllSubscribers),
    postSubscriber: catchAsync(postSubscriber),
};
