import { graphql } from "../generates";

graphql(`
  mutation CreateCartItem($data: CartItemCreateInput!) {
    createCartItem(data: $data) {
      cart {
        id
      }
      id
      quantity
      product {
        id
      }
    }
  }
`);

graphql(`
  query getCart(
    $where: CartWhereUniqueInput!
    $take: Int
    $skip: Int!
    $cursor: CartItemWhereUniqueInput
  ) {
    cart(where: $where) {
      createdAt
      id
      itemsCount
      items(take: $take, skip: $skip, cursor: $cursor) {
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
