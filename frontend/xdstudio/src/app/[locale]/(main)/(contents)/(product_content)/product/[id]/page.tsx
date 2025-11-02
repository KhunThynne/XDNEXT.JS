import { execute } from "@/libs/graphql/execute";
import type { Product } from "@/libs/graphql/generates/graphql";
import {
  CheckUserProductStatusDocument,
  GetProductDocument,
} from "@/libs/graphql/generates/graphql";

import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";
import { ContentProduct } from "../../products/components/ContentProduct";
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";

const getCachedCheckUserProductStatusCache = async (
  productId: string,
  userId: string,
  cartId?: string
) => {
  "use cache";
  cacheLife("hours");
  cacheTag(
    `${userId}-${productId}-checkProduct`,
    `${cartId}-${productId}-checkProduct`,
    `${cartId}-${userId}-checkProduct`
  );
  return await execute(CheckUserProductStatusDocument, {
    productId,
    userId,
  });
};

const getGetProductDocument = async (id: string) => {
  "use cache";
  cacheLife("hours");
  cacheTag(`product-${id}`, id);
  return await execute(GetProductDocument, { where: { id } });
};

export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const req = await getGetProductDocument(id);
  const { product: ProductData } = req.data;
  const product = ProductData as Product;
  const productStatus = await getCachedCheckUserProductStatusCache(
    id,
    session?.user?.id ?? "",
    session?.user?.carts?.[0]?.id ?? ""
  );
  if (!product) return notFound();
  return (
    <>
      <BreadcrumbComponent
        pathNames={["products", product.name ?? `unkhown`]}
      />
      <ContentProduct
        userProductStatus={productStatus?.data}
        session={session}
        {...(product as Product)}
      />
    </>
  );
}
