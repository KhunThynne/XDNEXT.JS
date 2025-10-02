import { graphql } from "../generates";

graphql(`
  query getCart(
    $where: CartWhereUniqueInput!
    $take: Int
    $skip: Int!
    $cursor: CartItemWhereUniqueInput
    $orderBy: [CartItemOrderByInput!]
  ) {
    cart(where: $where) {
      createdAt
      id
      itemsCount
      items(take: $take, skip: $skip, cursor: $cursor, orderBy: $orderBy) {
        id
        quantity
        product {
          images {
            src {
              extension
              filesize
              height
              id
              url
              width
            }
            altText
            id
            name
          }
          id
          description
          details {
            document
          }
          name
          price {
            price
            id
          }
          publishedAt
          status
          suppilers {
            id
          }
          updateAt
          createdAt
        }
      }
      status
      updateAt
      user {
        id
        username
      }
    }
  }
`);
