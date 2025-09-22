import { execute } from "@/libs/graphql/execute";
import { GetProductDocument, Product } from "@/libs/graphql/generates/graphql";
import { ContentProduct } from "../components/ContentProduct";
import { auth } from "@/auth";
import { notFound } from "next/navigation";

export default async function PageProduct({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const req = await execute(GetProductDocument, { where: { id } });
  const { product } = req.data;
  if (!product) return notFound();
  return <ContentProduct session={session} {...(product as Product)} />;
}
