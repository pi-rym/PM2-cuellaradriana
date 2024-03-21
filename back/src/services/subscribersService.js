const Subscriber = require('../models/Subscriber');

const getSubscribers = async () => {
    const movies = await Subscriber.find();
    return movies;
};

const saveSubscriber = async (subscriber) => {
    const newSubscriber = new Subscriber(subscriber);
    const savedSubscriber = await newSubscriber.save();
    return savedSubscriber;
};

module.exports = {
    getSubscribers,
    saveSubscriber,
};
