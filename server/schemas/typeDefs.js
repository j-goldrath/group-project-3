const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type donation {
        _id: ID
        
    }

    type fundraiser {
        _id: ID

    }

    type index {
        _id: ID
    }

    type user {
        _id: ID
    }
`;

module.exports = typeDefs;