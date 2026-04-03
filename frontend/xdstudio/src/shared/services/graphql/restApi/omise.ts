"use server";
import { ApiPostOmiseCharge } from "@/app/(payload)/api/omise/[...resource]/services/ApiPostOmiseCharge";
import type { ApiPostOmiseSourcesType } from "@/app/(payload)/api/omise/[...resource]/services/ApiPostOmiseSources";
import { ApiPostOmiseSources } from "@/app/(payload)/api/omise/[...resource]/services/ApiPostOmiseSources";

export async function createPaymentQrCode(arg: ApiPostOmiseSourcesType) {
  try {
    const source = await ApiPostOmiseSources(null, arg);
    if (!source) {
      throw new Error("not found a source");
    }
    const { id } = source._attributes;
    const charge = await ApiPostOmiseCharge(null, {
      source: id,
      amount: arg.amount,
      currency: arg.currency,
    });
    return charge;
  } catch {}

  return;
}
