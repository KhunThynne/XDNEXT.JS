import { useMutation } from "@tanstack/react-query";
import { executeAuth } from "../../execute";
import { graphql } from "../../generates";
import { Role } from "../../generates/graphql";

export const RegisterDocument = graphql(`
  mutation Register(
    $email: String!
    $password: String!
    $username: String!
    $role: Role
  ) {
    register(
      email: $email
      password: $password
      username: $username
      role: $role
    ) {
      id
      username
      email
      role
    }
  }
`);

export function useRegister() {
  return useMutation({
    mutationFn: (variables: {
      email: string;
      password: string;
      username: string;
      role?: Role;
    }) => executeAuth(RegisterDocument, variables),
  });
}
