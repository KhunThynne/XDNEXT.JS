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
  mutation DeleteCartItem($where: CartItemWhereUniqueInput!) {
    deleteCartItem(where: $where) {
      id
    }
  }

  mutation DeleteCartItems($where: [CartItemWhereUniqueInput!]!) {
    deleteCartItems(where: $where) {
      id
    }
  }
`);
