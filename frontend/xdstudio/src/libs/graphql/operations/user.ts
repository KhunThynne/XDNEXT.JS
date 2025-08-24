import { graphql } from "../generates";

graphql(`
  query GetUsers {
    users {
      username
      email
      role
    }
  }
`);

graphql(`
  query GetUser($where: UserWhereUniqueInput!) {
    user(where: $where) {
      createdAt
      email
      image
      name
      username
      id
      role
      password {
        isSet
      }
      provider
      avartar {
        altText
        id
        src {
          extension
          url
          height
          width
        }
      }
      preference {
        id
        setting {
          document
        }
      }
      carts {
        id
        createdAt
      }
      orders {
        id
        createdAt
      }
    }
  }
`);
