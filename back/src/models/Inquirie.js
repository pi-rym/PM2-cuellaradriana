const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inquiriesSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },
    inquiry: {
        type: String,
        required: true,
    },
    subscription: {
        type: Boolean,
        require: true,
    },
});

const Inquiry = mongoose.model('Inquiry', inquiriesSchema);

module.exports = Inquiry;
