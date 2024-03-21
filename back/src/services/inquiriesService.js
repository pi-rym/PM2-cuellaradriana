const Inquiry = require('../models/Inquirie');

const getInquiries = async () => {
    const inquiries = await Inquiry.find();
    return inquiries;
};

const saveInquiry = async (inquiry) => {
    const newInquiry = new Inquiry(inquiry);
    const savedInquiry = await newInquiry.save();
    return savedInquiry;
};

module.exports = {
    getInquiries,
    saveInquiry,
};
