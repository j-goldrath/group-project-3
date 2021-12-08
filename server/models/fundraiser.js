const mongoose = require('mongoose');

const { Schema } = mongoose;

const fundraiserSchema = new Schema({
    fundraiserName: {
        type: String,
        required: true,
        minlength: 5
    },
    goal: {
        type: Number,
        required: true,
    },
    fundraiserDate: {
        type: Date,
        default: Date.now
    }
});

const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);

module.exports = Fundraiser