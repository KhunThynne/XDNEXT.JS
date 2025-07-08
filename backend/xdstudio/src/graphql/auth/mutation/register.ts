import { Resolvers } from "@/types/graphql";
import prisma from "@prisma";
import { hashSync } from "bcrypt-ts";

const register: Resolvers["Mutation"]["register"] = async (_parent, args) => {
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
    select: {
      id: true,
      email: true,
      username: true,
      provider: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
};

export default register;
