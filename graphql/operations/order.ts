import { graphql } from "../generates";

export const getOrder = graphql(`
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

export const CreateOrderAndUserItems = graphql(`
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
