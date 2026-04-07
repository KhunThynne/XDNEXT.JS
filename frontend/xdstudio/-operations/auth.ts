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

  query ValidateUserPasswordResetToken($email: String!, $token: String!) {
    validateUserPasswordResetToken(email: $email, token: $token) {
      message
      code
    }
  }
  mutation RedeemUserPasswordResetTokenResult(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
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

  mutation SendUserPasswordResetToken($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }

  mutation AuthenticateAndLinkProvider(
    $provider: String!
    $email: String!
    $accessToken: String
    $refreshToken: String
    $providerAccountId: String!
    $name: String
    $image: String
  ) {
    authenticateAndLinkProvider(
      provider: $provider
      email: $email
      name: $name
      accessToken: $accessToken
      refreshToken: $refreshToken
      providerAccountId: $providerAccountId
      image: $image
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
