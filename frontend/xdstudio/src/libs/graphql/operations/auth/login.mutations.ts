import { useMutation } from "@tanstack/react-query";
import { executeAuth } from "../../execute";
import { graphql } from "../../generates";
import { LoginDocument } from "../../generates/graphql";

graphql(`
  mutation Login($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          username
          provider
          role
          email
          image
          postsCount
          createdAt
          password {
            isSet
          }
          posts {
            id
            title
            tagsCount
          }
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`);

export function useLogin() {
  return useMutation({
    mutationFn: (variables: { email: string; password: string }) =>
      executeAuth(LoginDocument, variables),
  });
}
