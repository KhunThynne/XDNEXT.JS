import { graphql } from "../generates";

graphql(`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      exp
      token
    }
  }
`);
