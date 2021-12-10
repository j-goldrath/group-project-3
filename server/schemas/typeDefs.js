const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Fundraiser {
    _id: ID
    fundraiserName: String
    goal: Number
    fundraiserDate: Date
    description: String
}

type Donation {
    _id: ID
    donationDate: Date
    amount: Number
    message: String
    fundraiser: [Fundraiser]
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: string
    password: string
    fundraisers: [Fundraiser]
    donations: [Donations]
}

type Auth {
    token: ID
    user: User
}

type Query {
    fundraisers: [Fundraiser]
    donations(fundraiser: ID, name: String): [Donation]
    donation(_id: ID!): Donation
    user: User
    donation(_id: ID!): Donation
}`

