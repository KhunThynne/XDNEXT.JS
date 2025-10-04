import { revalidateTag, unstable_cache } from "next/cache";
import { PaginationDemo } from "./PaginationDemo";
import { execute } from "@/libs/graphql/execute";
import { GetProductsCountDocument } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { revalidateClient } from "../shared/revalidateClient";
const getProductsCountCache = () =>
  unstable_cache(
    async () => {
      "use server";
      return execute(GetProductsCountDocument);
    },
    [`Products-Count`],
    {
      revalidate: 3600,
      tags: ["product-pagination"],
    }
  )();
const take = 10;
export default async function PaginationPage() {
  // const { page = 1 } = await searchParams;
  const { data } = await getProductsCountCache();

  const totalPages = Math.ceil((data?.productsCount ?? 0) / take);

  return (
    <>
      <PaginationDemo totalPages={totalPages} />
    </>
  );
}
