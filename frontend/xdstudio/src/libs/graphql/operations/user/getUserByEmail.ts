import { graphql } from "../../generates";

graphql(`
  query GetUserByEmail($email: String!) {
    user(where: { email: $email }) {
      id
      name
      username
      provider
      image
      avartar {
        id
      }
      role
      email
      postsCount
      createdAt
      passwordResetIssuedAt
      passwordResetRedeemedAt
    }
  }
`);
