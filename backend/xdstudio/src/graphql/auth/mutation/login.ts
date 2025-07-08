import { Resolvers } from "@/types/graphql";
import prisma from "@prisma";
import { compare } from "bcrypt-ts";
import { sign } from "jsonwebtoken";

const login: Resolvers["Mutation"]["login"] = async (
  _,
  { email, password },
) => {
  // หา user ตาม email
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // ตรวจสอบรหัสผ่านที่กรอก กับ hashed password ใน DB
  const valid = await compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid email or password");
  }

  // สร้าง JWT token (secret ต้องเก็บใน env vars)
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
