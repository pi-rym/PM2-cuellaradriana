const inquiriesService = require('../services/inquiriesService');
const catchAsync = require('../utils/catchAsync');

const getAllInquiries = async (req, res) => {
    const inquiries = await inquiriesService.getInquiries();
    res.status(200).json(inquiries);
};

const postInquiry = async (req, res) => {
    const { name, email, inquiry, subscription } = req.body;
    const savedInquiry = await inquiriesService.saveInquiry({
        name,
        email,
        inquiry,
        subscription,
    });
    res.status(200).json(savedInquiry);
};

module.exports = {
    getAllInquiries: catchAsync(getAllInquiries),
    postInquiry: catchAsync(postInquiry),
};
