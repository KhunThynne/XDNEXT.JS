import { Resolvers } from "@/types/graphql";
import login from "./mutation/login";
import register from "./mutation/register";

export const resolvers: Resolvers = {
  Query: {},

  Mutation: {
    login,
    register,
  },
};
