import { graphql } from "../generates";

graphql(`
  query GetUserPoint($where: UserPointWhereUniqueInput!) {
    userPoint(where: $where) {
      id
      total_point
      updateAt
      total_spent
      __typename
      user {
        id
      }
    }
  }
`);
