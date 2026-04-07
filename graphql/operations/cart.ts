import { graphql } from "../generates";

graphql(`
  mutation UpdateCart($id: String!, $data: mutationCartUpdateInput!) {
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

graphql(`
  query getCart($where: Cart_where, $limit: Int, $page: Int, $sort: String) {
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
