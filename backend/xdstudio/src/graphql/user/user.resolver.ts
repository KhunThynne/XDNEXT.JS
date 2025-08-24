import { Resolvers, UserProvider } from '@/types/graphql';
import prisma from '@prisma';

import { compare, hashSync } from 'bcrypt-ts';
import { Role as GqlRole } from '@/types/graphql';
export const resolvers: Resolvers = {
  Query: {
    users: async (_, __, context) => {
      const users = await prisma.user.findMany();
      const re_user = users.map((user) => ({
        ...user,
        role: user.role as GqlRole,
        provider: user.provider as UserProvider,
      }));
      console.log(re_user);
      return re_user;
    },
  },

  // Mutation: {},
};
