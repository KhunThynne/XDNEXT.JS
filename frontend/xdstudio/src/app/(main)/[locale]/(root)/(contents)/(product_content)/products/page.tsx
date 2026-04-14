import { ContainerSection } from "@/shared/components/ContainerSection";
import { BreadcrumbComponent } from "@/shared/components/breadcrumb";
import { auth } from "@/auth";
import { contentClassName } from "./shared/contentClassName";
import { ContentProductsSSR } from "./components/ContentProductSSR";
import type { Product } from "@/shared/libs/graphql/generates/graphql";
import _ from "lodash";

import { Fragment } from "react";
import { notFound } from "next/navigation";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { productQueries } from "@/shared/core/product/query";

export default async function PageProducts({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const session = await auth();
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const queryClient = getQueryClient();
  const products = await queryClient.fetchQuery({
    ...productQueries.page(page),
  });

  if (!_.isEmpty(products.docs)) {
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
            products={products.docs as Product[]}
          />
        </ContainerSection>
      </Fragment>
    );
  }

  return notFound();
}
