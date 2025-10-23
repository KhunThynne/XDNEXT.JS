import { auth } from "@/auth";
import PurchasedProductsForm from "../components/PurchasedProducts.form";
import { notFound } from "next/navigation";

export default async function ProductConfig() {
  const session = await auth();

  if (session?.user) {
    return <PurchasedProductsForm session={session} />;
  }
  return notFound();
}
