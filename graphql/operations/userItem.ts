import { graphql } from "../generates";

export const GetUserAItemConfig = graphql(`
  query GetUserAItemConfig($where: UserItem_where) {
    UserItems(where: $where) {
      docs {
        config
        createdAt
        id
        item {
          id
          product {
            name
            previewImage {
              altText
              id
              name
              url
              filesize
              height
              width
            }
            status
            createdAt
            updatedAt
          }
        }
        updatedAt
        user {
          id
          email
          username
        }
        __typename
      }
    }
  }
`);
