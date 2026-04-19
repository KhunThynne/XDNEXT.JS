import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { ContentProduct } from "../../_shared/components/ContentProduct";
import { BreadcrumbComponent } from "@/shared/components/breadcrumb";
import type { Cart, Product } from "@/payload-types";
import { getQueryClient } from "@/shared/libs/tanstack/get-query-client";
import { productQueries } from "@/core/product/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { getProducts } from "@/core/product";
// import { cacheLife, cacheTag } from "next/cache";

// export const generateStaticParams = async () => {
//   "use cache";
//   cacheLife("max");
//   cacheTag(`prouduct-static-params`);
//   const products = await getProducts({
//     limit: 5,
//     select: { id: true },
//   });
//   return products.docs.map((product) => ({
//     id: product.id,
//   }));
// };

export default async function PageProduct({
  params,
  searchParams,
}: PageProps<"/[locale]/product/[id]">) {
  const { id } = await params;
  const queryClient = getQueryClient();
  const { page: pageParam } = await searchParams;

  const session = await auth();
  const product = await queryClient.fetchQuery(productQueries.product(id));
  let productStatus = null;
  if (session?.user) {
    productStatus = await queryClient.fetchQuery(
      productQueries.checkUserProductStatus(
        id,
        session?.user?.id ?? "",
        (session?.user?.carts?.docs as Cart[])[0].id
      )
    );
  }

  if (!product) return notFound();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BreadcrumbComponent
        searchParams={pageParam && `page=${pageParam}`}
        pathNames={["products", product.name ?? `unkhown`]}
      />
      <ContentProduct
        userProductStatus={productStatus}
        session={session}
        {...(product as Product)}
      />
    </HydrationBoundary>
  );
}
