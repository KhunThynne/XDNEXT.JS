import { graphql } from "../generates";

graphql(`
  query getOrder($where: OrderWhereUniqueInput!) {
    order(where: $where) {
      createdAt
      id
      itemsCount
      updateAt
      user {
        id
        email
        username
        suppiler {
          id
          name
        }
      }
      items {
        id
        product {
          id
        }
      }
    }
  }
`);
