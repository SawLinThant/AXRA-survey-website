import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetALLUsers {
    user(order_by: { created_at: desc }) {
      id
      name
      company_name
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

export const GET_SINGLE_USER = gql`
  query GetSingleUser($id: Int!) {
    user_by_pk(id: $id) {
      id
      name
      company_name
      content_infromation
      user_type
      job_seekers {
        isWorking
        job_type
        skills
        eduction
        working_industries
      }
      clients {
        business_type
        service_type
      }
      partners {
        business_type
        offer
        service_type
        why_partner
      }
    }
  }
`;
