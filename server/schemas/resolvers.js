const { AuthenticationError } = require('apollo-server-express');
const {  Fundraiser, User, Donation } = require('../models');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/fundraiser');

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
        User: async (parent, args, context) => {
            if (context.User) {
                const User = await User.findById(context.user_id)
                .populate({
                    path: 'donations'
                });
            }
            return await User.find({});
        }
    },
    Mutation: {
        addDonation: async (parent, { amount, message }) => {
            return await Donation.create({ amount, message });
        },
        addFundraiser: async (parent, { fundraiserName, goal, fundraiserDate }) => {
            return await Fundraiser.create({ fundraiserName, goal, fundraiserDate});
        },
        addUser: async (parent, { firstName, lastName, email, password }) => {
            console.log(firstName);
            return await User.create({firstName, lastName, email, password});
        },
        updateDonation: async (parent, { amount, message }) => {
            return await Donation.findOneAndUpdate(
                { number: amount },
                { string: message },
                { new: true }
            );
        },
        updateFundraiser: async (parent, { fundraiserName, goal }) => {
            return await Fundraiser.findOneAndUpdate(
                { string: fundraiserName },
                { string: goal },
                { new: true }
            );
        },
        updateUser: async (parent, { firstName, lastName, email, password }) => {
            return await User.findOneAndUpdate(
                { string: firstName },
                { string: lastName },
                { string: email },
                { string: password },
                { new: true }
            );
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
        }
    },
};
module.exports = resolvers;

