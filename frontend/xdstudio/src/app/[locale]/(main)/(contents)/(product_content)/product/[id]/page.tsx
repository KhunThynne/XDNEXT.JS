import { execute } from "@/libs/graphql/execute";
import type { Product } from "@/libs/graphql/generates/graphql";
import {
  CheckUserProductStatusDocument,
  GetProductDocument,
} from "@/libs/graphql/generates/graphql";

import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { ContentProduct } from "../../products/components/ContentProduct";
const getCachedCheckUserProductStatus = (
  productId: string,
  userId: string,
  cartId?: string
) =>
  unstable_cache(
    async () =>
      await execute(CheckUserProductStatusDocument, {
        productId,
        userId,
      }),
    [`checkUserProductStatus-${productId}-${userId}`],
    {
      tags: [
        `${userId}-${productId}-checkProduct`,
        `${cartId}-${productId}-checkProduct`,
        `${cartId}-${userId}-checkProduct`,
      ],
      revalidate: 3600,
    }
  )();

export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const req = await execute(GetProductDocument, { where: { id } });
  const { product } = req.data;

  const productStatus = await getCachedCheckUserProductStatus(
    id,
    session?.user?.id ?? "",
    session?.user?.carts?.[0]?.id ?? ""
  );
  if (!product) return notFound();
  return (
    <ContentProduct
      userProductStatus={productStatus?.data}
      session={session}
      {...(product as Product)}
    />
  );
}
