import { useMutation } from "@tanstack/react-query";
import { executeAuth } from "../../execute";
import { graphql } from "../../generates";

export const LoginDocument = graphql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      jwt_token
      user {
        documentId
        username
        email
        role
        provider
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
