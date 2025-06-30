import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Type-safe Prisma method helper
 */
export async function prismaMethod<
  TModel extends keyof PrismaClient,
  TMethod extends keyof PrismaClient[TModel],
  TArgs extends Parameters<PrismaClient[TModel][TMethod]>[0],
>(
  model: TModel,
  method: TMethod,
  args: TArgs,
): Promise<ReturnType<PrismaClient[TModel][TMethod]>> {
  try {
    const fn = prisma[model][method] as (args: TArgs) => any;
    return await fn(args);
  } catch (error) {
    console.error(
      `❌ Prisma Error on ${String(model)}.${String(method)}:`,
      error,
    );

    throw error;
  }
}
