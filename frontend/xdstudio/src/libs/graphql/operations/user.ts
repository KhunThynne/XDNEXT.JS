import { graphql } from "../generates";

graphql(`
  query GetUsers {
    users {
      username
      email
      role
    }
  }
`);

graphql(`
  query GetUser($where: UserWhereUniqueInput!) {
    user(where: $where) {
      createdAt
      email
      image
      id
      images {
        name
        id
        altText
      }
    }
  }
`);
