import { useQuery } from "@tanstack/react-query";
import { graphql } from "../../generates";
import { execute } from "../../execute";

export const GetUserByEmailDocument = graphql(`
  query GetUserByEmail($email: String!) {
    user(where: { email: $email }) {
      id
      name
      username
      provider
      image
      role
      email
      postsCount
      createdAt
      passwordResetIssuedAt
      passwordResetRedeemedAt
    }
  }
`);

export function useGetUserByEmail(email: string) {
  return useQuery({
    queryKey: ["GetUserByEmail", email],
    queryFn: () => execute(GetUserByEmailDocument, { email }),
    enabled: !!email,
  });
}
