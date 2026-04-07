import { graphql } from "../generates";

graphql(`
  query GetUserAItemConfig($where: UserItemWhereUniqueInput!) {
    userItem(where: $where) {
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
      updateAt
      user {
        id
        email
        username
        name
        # ...AuthUserItem
      }
      __typename
    }
  }
`);
