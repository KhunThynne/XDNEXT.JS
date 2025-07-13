import { Resolvers } from "@/types/graphql";
import prisma from "@prisma";
import { hashSync } from "bcrypt-ts";

export const resolvers: Resolvers = {
  Query: {
    users: async (_, __, context) => {
      return await prisma.user.findMany();
    },
  },

  Mutation: {},
};
