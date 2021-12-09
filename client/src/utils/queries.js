import { gql } from '@apollo/client';

export const QUERY_FUNDRAISER = gql`
query getFundraiser($fundraiser: ID) {
    fundraiser
}`
