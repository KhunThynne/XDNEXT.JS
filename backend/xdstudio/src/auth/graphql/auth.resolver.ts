import { Resolvers, Role } from "@/types/graphql";
import prisma from "@prisma";
import { compare, hashSync } from "bcrypt-ts";
import { generateAccessToken } from "@/helper";

export const resolvers: Resolvers = {
  // Query: {},
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const valid = await compare(password, user.password);

      if (!valid) {
        throw new Error("Invalid email or password");
      }
      const jwt_token = generateAccessToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      return {
        jwt_token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          provider: user.provider,
          role: user.role as Role,
        },
      };
    },
    register: async (_, args) => {
      const { email, password, username, role } = args;

      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        throw new Error("Email already registered");
      }

      const user = await prisma.user.create({
        data: {
          email,
          password: hashSync(password, 10),
          username,
          provider: "credentials",
          role: role ?? "USER",
        },
      });

      return {
        id: user.id,
        email: user.email,
        username: user.username,
        provider: user.provider,
        role: user.role as Role,
      };
    },
  },
};
