const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({
    donationDate: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    fundraiser: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Fundraiser'
        }
    ],
    message: {
        type: String,
        trim: true,
        required: false
    }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;