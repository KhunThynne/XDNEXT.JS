import { Resolvers } from "@/types/graphql";
import prisma from "@prisma";
import { compare, hashSync } from "bcrypt-ts";
import { sign } from "jsonwebtoken";

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
      const token = sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" },
      );
      return {
        token,
        user,
      };
    },
    register: async (_parent, args) => {
      const { email, password, username } = args;
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        throw new Error("Email already registered");
      }
      const hashedPassword = hashSync(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          username,
          provider: "credentials",
        },
      });

      return "S";
    },
  },
};
