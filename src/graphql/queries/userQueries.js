import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetALLUsers {
    user {
      id
      name
      user_type
      content_infromation
    }
  }
`;

export const GET_AVG_COUNTS = gql`
  query GetAvgCounts {
    client_aggregate {
      aggregate {
        count
      }
    }
    job_seeker_aggregate {
      aggregate {
        count
      }
    }
    partner_aggregate {
      aggregate {
        count
      }
    }
  }
`;
