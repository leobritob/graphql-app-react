import { gql } from '@apollo/client'

export const GetUsersQuery = gql`
  query GetUsers {
    users {
      id
      first_name
      last_name
    }
  }
`

export const CreateUserQuery = gql`
  mutation CreateUser($firstName: String!, $lastName: String!) {
    createUser(first_name: $firstName, last_name: $lastName) {
      id
      first_name
      last_name
    }
  }
`
