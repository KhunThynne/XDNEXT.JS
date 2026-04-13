import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { cacheLife, cacheTag } from "next/cache";
import { ContentProduct } from "../../products/components/ContentProduct";
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";
import { checkUserProductStatus, getProduct } from "@/shared/core/product";
import type { Cart, Product } from "@/payload-types";
import { payloadActions } from "@/shared/actions/payload";

const getCachedCheckUserProductStatusCache = async (
  productId: string,
  userId: string,
  cartId: string
) => {
  "use cache";
  cacheLife("hours");
  cacheTag(
    `${userId}-${productId}-checkProduct`,
    `${cartId}-${productId}-checkProduct`,
    `${cartId}-${userId}-checkProduct`
  );
  return await checkUserProductStatus({ productId, userId });
};

const getGetProductCache = async (id: string) => {
  "use cache";
  cacheLife("hours");
  cacheTag(`product-${id}`, id);
  return await payloadActions("findByID", {
    collection: "products",
    id,
  });
};

export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const product = await getGetProductCache(id);
  const productStatus = await getCachedCheckUserProductStatusCache(
    id,
    session?.user?.id ?? "",
    (session?.user?.carts?.docs as Cart[])[0].id
  );
  if (!product) return notFound();
  return (
    <>
      <BreadcrumbComponent
        pathNames={["products", product.name ?? `unkhown`]}
      />
      <ContentProduct
        userProductStatus={productStatus}
        session={session}
        {...(product as Product)}
      />
    </>
  );
}
