import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { productQueries } from "@/core/product/query";
import { PaginationForm } from "@/shared/components/forms/Pagination.form";

export default async function PaginationPage({
  searchParams,
}: {
  searchParams: Promise<{ page: number }>;
}) {
  const { page = 1 } = await searchParams;
  const queryClient = getQueryClient();
  // const cachedData = queryClient.getQueryData(
  //   productQueries.page(page).queryKey
  // );
  const products = await queryClient.fetchQuery({
    ...productQueries.page(page),
  });

  const count = products?.totalDocs ?? 0;
  const totalPages = products?.totalPages ?? 0;

  if (count < 1) {
    return null;
  }
  return (
    <>
      <PaginationForm totalPages={totalPages} currentPage={page} />
    </>
  );
}
