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
  query getCart($where: CartWhereUniqueInput!) {
    cart(where: $where) {
      createdAt
      id
      items {
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
