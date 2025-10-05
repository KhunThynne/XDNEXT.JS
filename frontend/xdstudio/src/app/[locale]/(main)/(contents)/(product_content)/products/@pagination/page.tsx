import { unstable_cache } from "next/cache";
import { execute } from "@/libs/graphql/execute";
import { GetProductsCountDocument } from "@/libs/graphql/generates/graphql";
import { PaginationDemo } from "./shared/components/PaginationDemo";

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
export default async function PaginationPage({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const { page = 1 } = await searchParams;
  const { data } = await getProductsCountCache();
  const totalPages = Math.ceil((data?.productsCount ?? 0) / take);
  return (
    <>
      <PaginationDemo totalPages={totalPages} currentPage={page} />
    </>
  );
}
