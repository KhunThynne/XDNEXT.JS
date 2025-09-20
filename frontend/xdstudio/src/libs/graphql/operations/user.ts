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
      point {
        id
        total_point
        updateAt
      }
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

graphql(`
  query GetUserItem($where: UserWhereUniqueInput!) {
    user(where: $where) {
      itemsCount
      items {
        id
        config
        createdAt
        updateAt
        item {
          id
          product {
            name
            images {
              altText
              id
              name
              src {
                extension
                filesize
                height
                url
                width
              }
            }
            status
            createdAt
            updateAt
          }
        }
      }
    }
  }
`);
