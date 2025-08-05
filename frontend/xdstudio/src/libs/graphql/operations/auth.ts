import { graphql } from "../generates";

graphql(`
  mutation Login($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          username
          provider
          role
          email
          image
          postsCount
          createdAt
          password {
            isSet
          }
          orders {
            id
          }
          carts {
            id
          }
          posts {
            id
            title
            tagsCount
          }
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`);
