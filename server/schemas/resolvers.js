const { AuthenticationError } = require('apollo-server-express');
const { User, Fundraiser, Donation } = require('../models');
const { sighnToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        fundraiers: async () => {
            return await Fundraiser.find();
        },
            user: async (parent, { fundraiser, name }) => {
                const params = {};

                if (fundraiser) {
                    params.fundraiser = fundraiser;
                }

                if (name) {
                    params.name = {
                        $regex: name
                    };
                }
                return await User.find(params).populate('fundraiser');
            },
            user: async (parent, { _id }) => {
                return await User.findbyId(_id).populate('fundraiser');
            },
            user: async (parent, args, context) => {
                if (context.user) {
                    const user = await User.findbyId(context.user._id).populate({
                        path: 'user.fundraisers',
                        populate: ''
                    })
                }
            }
    }
}