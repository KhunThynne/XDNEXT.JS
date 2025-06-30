import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Method
function prisma_Method(model: string, method: string, query: object) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await prisma[model][method](query);
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

const help_prisma = {
  Create: { createMany: "createMany" },
  Read: {
    findMany: "findMany",
    findFirst: "findFirst",
    findUnique: "findUnique",
    groupBy: "groupBy",
    aggregate: "aggregate",
  },
  Update: {
    updateMany: "updateMany",
    updateFirst: "updateFirst",
    updateUnique: "updateUnique",
  },
  Delete: {
    deleteMany: "deleteMany",
    deleteFirst: "deleteFirst",
    deleteUnique: "deleteUnique",
  },
  Argument: {
    Where: "Where",
    Select: "Select",
    OrderBy: "OrderBy",
    Skip: "Skip",
    Take: "Take",
    Include: "Include",
    Distinct: "Distinct",
  },
};
export { help_prisma as default, prisma_Method, prisma };
