import { useMutation } from "@tanstack/react-query";
import { graphql } from "../../generates";
import { executeAuth } from "../../execute";

export const CreateUserMutationDocument = graphql(`
  mutation CreateUser(
    $name: String
    $username: String
    $provider: String
    $password: String
    $email: String
  ) {
    createUser(
      data: {
        name: $name
        username: $username
        provider: $provider
        password: $password
        email: $email
      }
    ) {
      id
      name
      username
      provider
      image
      role
      email
      createdAt
      password {
        isSet
      }
    }
  }
`);

export function useCreateUser() {
  return useMutation({
    mutationFn: (variables: { email: string; password: string }) =>
      executeAuth(CreateUserMutationDocument, variables),
  });
}
