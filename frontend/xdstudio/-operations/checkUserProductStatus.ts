import { graphql } from "../generates";

graphql(`
  query CheckUserProductStatus($productId: String!, $userId: String!) {
    checkUserProductStatus(productId: $productId, userId: $userId) {
      ... on CheckProductSuccess {
        inCart
        inUserItem
        productId
      }
      __typename
      ... on CheckProductFailure {
        message
      }
    }
  }
`);
