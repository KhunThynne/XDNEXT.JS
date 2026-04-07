import { graphql } from "../generates";

export const UpdateCart = graphql(`
  mutation UpdateCart($id: Int!, $data: mutationCartUpdateInput!) {
    updateCart(id: $id, data: $data) {
      id
      user {
        id
      }
      status
      items {
        id
      }
      createdAt
      updatedAt
    }
  }
`);

export const GetCart = graphql(`
  query getCart(
    $where: Cart_where
    $limit: Int
    $page: Int
    $sort: String
  ) {
    Carts(where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        createdAt
        id
        items {
          id
          quantity
          product {
            ...ProductFields
          }
        }
        status
        updatedAt
        user {
          id
          username
        }
      }
    }
  }
`);
