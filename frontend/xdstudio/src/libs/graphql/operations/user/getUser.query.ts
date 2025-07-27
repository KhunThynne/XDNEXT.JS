import { useQuery } from "@tanstack/react-query";
import { execute } from "../../execute";
import { graphql } from "../../generates";

export const GetUsersDocument = graphql(`
  query GetUsers {
    users {
      username
      email
      role
    }
  }
`);

// export function useUsers() {
//   return useQuery({
//     queryKey: ["GetUsers"],
//     queryFn: () => execute(GetUsersDocument, null),
//   });
// }
