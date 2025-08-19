import { graphql } from "../generates";

graphql(`
  fragment AuthUserItem on User {
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
    point {
      id
      total_point
      updateAt
    }
    posts {
      id
      title
      tagsCount
    }
    passwordResetIssuedAt
    passwordResetRedeemedAt
  }
  mutation Login($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          ...AuthUserItem
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }

  mutation AuthenticateAndLinkProvider(
    $provider: String!
    $email: String!
    $accessToken: String
    $refreshToken: String
    $providerAccountId: String!
    $name: String
  ) {
    authenticateAndLinkProvider(
      provider: $provider
      email: $email
      name: $name
      accessToken: $accessToken
      refreshToken: $refreshToken
      providerAccountId: $providerAccountId
    ) {
      ... on AuthProvidersSuccess {
        sessionToken
        accessToken
        refetchToken
        __typename
        item {
          ...AuthUserItem
        }
      }
      ... on AuthProvidersFailure {
        message
      }
    }
  }
`);
