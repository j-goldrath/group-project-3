import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        signUp(
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        ) {
          token
          user {
            _id
          }
        }
    }
`;

export const CREATE_FUNDRAISER = gql`
    mutation createFundraiser(
        $fundraiserName: String!
        $goal: Int!
    ) {
        createFundraiser(
            fundraiserName: $fundraiserName
            goal: $goal
        ) {
            user{
                _id
            }
        }
    }
`;
    
export const DELETE_FUNDRAISER = gql`
 mutation deleteFundraiser($fundraiserName: [ID]!) {
     deleteFundraiser(fundraiserName: $fundraiserName) {
             _id
             userName
             email
             fundraiser {
                 fundraiserName
                 goal
                 fundraiserDate
                 description
            }
        }
    }
`;

 export const UPDATE_FUNDRAISER = gql`
    mutation updateFundraiser($fundraiserName: [ID]!) {
        updateFundraiser(fundraiserName: $fundraiserName) {
            _id
            userName
            email
            fundraiser {
                fundraiserName
                goal
                fundraiserDate
                description
            }
        }
    }
`;
