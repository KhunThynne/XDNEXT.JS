import { graphql } from "../generates";

graphql(`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      exp
      token
      user {
        id
        username
        provider
        image
        role
        updatedAt
        createdAt
        email
        resetPasswordToken
        resetPasswordExpiration
        salt
        hash
        loginAttempts
        lockUntil
        avatar {
          id
          name
          altText
          updatedAt
          createdAt
          url
          thumbnailURL
          filename
          mimeType
          filesize
          width
          height
          focalX
          focalY
        }
        accounts {
          id
          provider
          providerAccountId
          accessToken
          refreshToken
          expiresAt
          scope
          meta
          updatedAt
          createdAt
        }
      }
    }
  }
`);
