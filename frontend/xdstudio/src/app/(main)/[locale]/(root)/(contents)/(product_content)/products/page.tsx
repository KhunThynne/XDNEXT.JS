import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";
import { auth } from "@/auth";
import { contentClassName } from "./shared/contentClassName";
import { ContentProductsSSR } from "./components/ContentProductSSR";
import { getSkipFromPage } from "./shared/utils/paginationUtil";
import { execute } from "@/libs/graphql/execute";
import type {
  GetProductsQueryVariables,
  Product,
} from "@/libs/graphql/generates/graphql";
import { GetProductsDocument } from "@/libs/graphql/generates/graphql";
import { cacheLife, cacheTag } from "next/cache";
import _ from "lodash";

import { Fragment } from "react";
import { notFound } from "next/navigation";

const getProductsCache = async (
  variables: GetProductsQueryVariables,
  currentPage: number
) => {
  "use cache";
  cacheLife("max");
  cacheTag(`products-${currentPage}`, "products");
  return execute(GetProductsDocument, {
    ...variables,
  });
};

export default async function PageProducts({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const session = await auth();
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const take = 10;
  const skip = getSkipFromPage(page, take);
  const fetchCache = await getProductsCache(
    {
      limit: take,
      page: skip,
      // orderBy: { createdAt: OrderDirection.Desc },
    },
    page
  );

  if (!_.isEmpty(fetchCache.data.Products)) {
    const { Products } = fetchCache.data;
    return (
      <Fragment>
        <BreadcrumbComponent />
        <ContainerSection
          title="All Featured Products"
          description="Explore our curated selection of top-selling and high-quality items.
            Click on any product to learn more or make a purchase."
          classNames={contentClassName}
        >
          <ContentProductsSSR
            session={session}
            products={Products.docs as Product[]}
          />
        </ContainerSection>
      </Fragment>
    );
  }

  return notFound();
}
