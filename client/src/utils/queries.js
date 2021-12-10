import { gql } from '@apollo/client';

export const QUERY_FUNDRAISER = gql`
  query getFundraiser($fundraiser: ID) {
    fundraisers(fundraiser: $fundraiser) {
      _id
      fundraiserName
      goal
      fundraiserDate
      description
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      donations{
        _id
        amount
        fundraiser
        message
      }
    }
  }
`;