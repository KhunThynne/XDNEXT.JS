import { useMutation } from "@tanstack/react-query";
import { executeAuth } from "../../execute";
import { graphql } from "../../generates";

export const LoginMutationDocument = graphql(`
  mutation Login($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          name
          documentId
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

type LoginVariables = {
  email: string;
  password: string;
};

type LoginResponse = {
  authenticateUserWithPassword:
    | {
        sessionToken: string;
        item: { id: string; name: string; email: string; role: string };
      }
    | { message: string };
};

export function useLogin() {
  return useMutation({
    mutationFn: (variables: { email: string; password: string }) =>
      executeAuth(LoginMutationDocument, variables),
  });
}
