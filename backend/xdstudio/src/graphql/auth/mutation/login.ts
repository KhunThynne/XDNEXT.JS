import { Resolvers } from "@/types/graphql";
import prisma from "@prisma";
import { compare } from "bcrypt-ts";
import { sign } from "jsonwebtoken";

const login: Resolvers["Mutation"]["login"] = async (
  _,
  { email, password },
) => {
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
};

export default login;
