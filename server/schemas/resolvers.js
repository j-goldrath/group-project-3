const { AuthenticationError } = require('apollo-server-express');
const { Donation, Fundraiser, User, Donation } = require('../models');
const { signToken } = require('../utils/auth');
const User = require('../models/user');
const stripe = require('stripe')

const resolvers = {
    Query: {
        Donation: async (parent, { _id }) => {
            return await Donation.findById(_id).populate('fundraiser');
        },
        Donations: async (parent, { fundraiser, _id }) => {
            const params = {};

            if(fundraiser) {
                params.fundraiser = fundraiser;
            }

            if(_id) {
                params.id = {
                    $regex: id
                };
            }
            return await (await Donation.find(params)).populate('fundraiser');
        },
        Fundraiser: async (parent, { _id }) => {
            return await Fundraiser.findById(_id);
        },
        Fundraisers: async (parent, { _id }) => {
            return await Fundraiser.findById(_id);
        },
        User: async () => {
            return await User.find({});
        }
    },
    Mutation: {
        addDonation: async (parent, { args }) => {
            const Donation = await Donation.create(args);
            return { Donation };
        },
        addFundraiser: async (parent, { fundraiserName, goal, fundraiserDate }) => {

        },
        addUser: async (parent, args ) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateDonation: async (parent, { amount, message }) => {

        },
        updateFundraiser: async (parent, { fundraiserName, goal }) => {

        },
        updateUser: async (parent, { firstName, lastName, email, password }) => {

        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

        if (!user) {
        throw new AuthenticationError('Incorrect credentials');
    }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
    }

        const token = signToken(user);

        return { token, user };
        },
    }
};
module.exports = resolvers;
