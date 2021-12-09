import { gql } from '@apollo/client';

export const QUERY_FUNDRAISER = gql`
query getFundraiser($fundraiser: ID) {
    fundraiser {
        fundraiserName
        goal
        fundraiserDate
        description
    }
}`
    ;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      donations{
          _id
          donationDate
          donations{
            _id
            amount
            fundraiser
            message 
          }
      }
      fundraisers{
        _id
        fundraiserDate
        fundraisers{
          _id
          name
          description
          goal
        }
      }
    }
  }
`;