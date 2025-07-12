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
    $image: String
    $provider: UserProvider
  ) {
    register(
      email: $email
      password: $password
      username: $username
      role: $role
      image: $image
      provider: $provider
    ) {
      id
      username
      email
      role
      image
      provider
    }
  }
`);

export const RegisterAndLoginDocument = graphql(`
  mutation RegisterAndLogin(
    $email: String!
    $password: String!
    $username: String!
    $role: Role
    $provider: UserProvider
    $image: String
  ) {
    registerAndLogin(
      email: $email
      password: $password
      username: $username
      provider: $provider
      role: $role
      image: $image
    ) {
      jwt_token
      user {
        id
        provider
        username
        email
        role
        image
        provider
      }
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
