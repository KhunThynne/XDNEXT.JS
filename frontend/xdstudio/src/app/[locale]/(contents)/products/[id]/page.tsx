import { execute } from "@/libs/graphql/execute";
import { GetProductDocument, Product } from "@/libs/graphql/generates/graphql";
import { ContentProduct } from "../components/ContentProduct";

export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const req = await execute(GetProductDocument, { where: { id } });
  const { product } = req.data;
  // return JSON.stringify(req.data);
  return <ContentProduct {...(product as Product)} />;
}
