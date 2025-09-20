import { env } from "@/env";
import { FormPaymentQrCode } from "../components/FormPaymentQrCode";
import { OmiseChargeResponse } from "@/app/api/omise/[...resource]/services/ApiPostOmiseCharge";

export default async function PagePaymentQrCode({
  params,
}: {
  params: Promise<{ sourcesId: string }>;
}) {
  const { sourcesId } = await params;
  const res = await fetch(
    `${env.NEXT_PUBLIC_SITE_URL}/api/omise/charges/${sourcesId}`
  );
  const charges = (await res.json()) as OmiseChargeResponse["_attributes"];

  return <FormPaymentQrCode {...charges} />;
}
