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
import {
  GetProductsDocument,
  OrderDirection,
} from "@/libs/graphql/generates/graphql";
import { unstable_cache } from "next/cache";
import _ from "lodash";
import { redirect } from "@navigation";
import type { Locale } from "next-intl";
import { Fragment } from "react";

const getProductsCache = (
  variables: GetProductsQueryVariables,
  currentPage: number
) =>
  unstable_cache(
    async () => {
      return execute(GetProductsDocument, {
        ...variables,
      });
    },
    [`products-${currentPage}`],
    {
      tags: [`products-${currentPage}`],
      revalidate: 60,
    }
  )();

export default async function PageProducts({
  searchParams,
  params,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ page: string }>;
}) {
  const session = await auth();
  const { page: pageParam } = await searchParams;
  const { locale } = await params;
  const page = Number(pageParam) || 1;
  const take = 10;
  const skip = getSkipFromPage(page, take);
  const fetchCache = await getProductsCache(
    {
      skip,
      take,
      orderBy: { createdAt: OrderDirection.Desc },
    },
    page
  );

  if (!_.isEmpty(fetchCache.data.products)) {
    const { products } = fetchCache.data;
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
            products={products as Product[]}
          />
          {/* <ContentProducts session={session} /> */}
        </ContainerSection>
      </Fragment>
    );
  }
  return redirect({ href: `/products`, locale });
}
