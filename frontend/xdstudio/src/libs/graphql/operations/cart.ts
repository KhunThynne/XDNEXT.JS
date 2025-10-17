import { graphql } from "../generates";

graphql(`
  mutation UpdateCart($where: CartWhereUniqueInput!, $data: CartUpdateInput!) {
    updateCart(where: $where, data: $data) {
      id
      user {
        id
      }
      status
      items {
        id
      }
      itemsCount
      createdAt
      updateAt
    }
  }

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
          ...ProductFields
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
