import { graphql } from "../generates";

export const GetUserPoint = graphql(`
  query GetUserPoint($where: UserPoint_where) {
    UserPoints(where: $where) {
      docs {
        id
        total_point
        updatedAt
        total_spent
        __typename
        user {
          id
        }
      }
    }
  }
`);
