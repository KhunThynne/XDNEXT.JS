import { auth } from "@/auth";

import { ContentProductsSSR } from "../_shared/components/ContentProductSSR";
import _ from "lodash";

import { notFound } from "next/navigation";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { productQueries } from "@/core/product/query";

export default async function PageProducts({
  searchParams,
}: PageProps<"/[locale]/products">) {
  const session = await auth();
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const queryClient = getQueryClient();
  const products = await queryClient.fetchQuery({
    ...productQueries.page(page),
  });

  if (!_.isEmpty(products.docs)) {
    return <ContentProductsSSR session={session} products={products.docs} />;
  }

  return notFound();
}
