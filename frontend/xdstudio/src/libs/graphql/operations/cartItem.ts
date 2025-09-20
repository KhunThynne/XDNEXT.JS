import { graphql } from "../generates";

graphql(`
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
