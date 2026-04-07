import { graphql } from "../generates";

graphql(`
  query GetUsers {
    Users {
      docs {
        username
        email
        role
      }
    }
  }
`);
