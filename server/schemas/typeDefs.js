const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Donation {
        _id: ID
        donationDate: Date
        amount: Number
        fundraiser: [fundraiser]
        message: String
    }

    type fundraiser {
        _id: ID
        fundraiserName: String
        goal: Number
        fundraiserDate: Date
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        fundraiser: [fundraiser]
        donation: [Donation]
    }
    
    type Query {
        donation(_id: ID!): Donation 
        donations(fundraiser: ID): [Donation]
        fundraiser(_id: ID!): fundraiser
        fundraisers(_id: ID, fundraiserName: String) [fundraiser]
        user: User
    }

    type Mutation {
        addDonation(amount: Number!, message: String!): Donation
        addFundraiser(fundraiserName: String!, goal: Number!, fundraiserDate: Date!): Fundraiser
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        updateDonation(amount: Number!, message: String!):
        updateFundraiser(fundraiserName: String!, goal: Number!);
        updateUser(firstName: String!, lastName: String!, email: String!, password: String!);
        login(email: String!, password: String!):
    }
`;

module.exports = typeDefs;

