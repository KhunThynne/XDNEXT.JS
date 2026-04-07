import { graphql } from "../generates";

export const CreateCartItem = graphql(`
  mutation CreateCartItem($data: mutationCartItemInput!) {
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

export const DeleteCartItem = graphql(`
  mutation DeleteCartItem($id: Int!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`);


