import { gql } from "@apollo/client";

export const CREATE_JOB = gql`
  mutation CreateJob(
    $name: String
    $contentInformation: String
    $user_type: String
    $job_type: String
    $eduction: String
    $isWorking: Boolean
    $working_industries: String
    $skills: String
  ) {
    insert_user(
      objects: {
        name: $name
        content_infromation: $contentInformation
        user_type: $user_type
        job_seekers: {
          data: {
            job_type: $job_type
            eduction: $eduction
            isWorking: $isWorking
            working_industries: $working_industries
            skills: $skills
          }
        }
      }
    ) {
      returning {
        id
        name
      }
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation CreateService(
    $name: String
    $content_infromation: String
    $user_type: String
    $service_type: String
    $business_type: String
  ) {
    insert_user(
      objects: {
        name: $name
        content_infromation: $content_infromation
        user_type: $user_type
        clients: {
          data: { service_type: $service_type, business_type: $business_type }
        }
      }
    ) {
      affected_rows
    }
  }
`;

export const CREATE_PARTNER = gql`
  mutation CreatePartner(
    $name: String
    $content_infromation: String
    $user_type: String
    $business_type: String
    $why_partner: String
    $offer: String
    $service_type: String
  ) {
    insert_user(
      objects: {
        name: $name
        content_infromation: $content_infromation
        user_type: $user_type
        partners: {
          data: {
            business_type: $business_type
            why_partner: $why_partner
            offer: $offer
            service_type: $service_type
          }
        }
      }
    ) {
      affected_rows
    }
  }
`;
