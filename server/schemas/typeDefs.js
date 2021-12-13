const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Donation {
        _id: ID
        donationDate: String
        amount: Int
        fundraiser: [Fundraiser]
        message: String
    }

    type Fundraiser {
        _id: ID
        fundraiserName: String
        goal: Int
        fundraiserDate: String
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        fundraiser: [Fundraiser]
        donation: [Donation]
    }

    type Auth {
        token: String!
        user: User!
    }
    
    type Query {
        Donation(_id: ID!): Donation 
        Donations(fundraiser: ID): [Donation]
        Fundraiser(_id: ID!): Fundraiser
        Fundraisers(_id: ID, fundraiserName: String): [Fundraiser]
        User: User
    }

    type Mutation {
        addDonation(amount: Int!, message: String!): Donation
        addFundraiser(fundraiserName: String!, goal: Int!, fundraiserDate: String!): Fundraiser
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
        updateDonation(amount: Int!, message: String!): Donation
        updateFundraiser(fundraiserName: String!, goal: Int!): Fundraiser
        updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
    }
`;

module.exports = typeDefs;

