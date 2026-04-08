import { graphql } from "../generates";

graphql(`
  query getOrder($where: Order_where) {
    Orders(where: $where) {
      docs {
        createdAt
        id
        status
        updatedAt
        user {
          id
          email
          username
         supplier {
            id
            name
        }
        items {
          id
          product {
            id
          }
        }
      }
    }
  }
`);

graphql(`
  mutation CreateOrderAndUserItems($data: mutationOrderInput!) {
    createOrder(data: $data) {
      items {
        id
        unitPrice
        product {
          id
        }
      }
      createdAt
      id
      updatedAt
      status
      user {
        email
        id
      }
    }
  }
`);
