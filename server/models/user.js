const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');
const Fundraiser = require('./fundraiser');
const Donation = require('./donation');

const userSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    fundraiser: [Fundraiser.schema],
    donation: [Donation.schema]
});

userSchema.pre('save', async function (next) {
    if (this.inNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.mondel('user', userSchema);

module.exports = User;