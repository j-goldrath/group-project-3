
const { donation, fundraiser, index, user  } = require('../models');

const resolvers = {
    Query: {
        donation: async () => {
            return await donation.find();
        },

        fundraiser: async (parent, { fundraiser, name }) => {
            return await fundraiser.findById(_id).populate('donation');
        },


    }
}

module.exports = resolvers;