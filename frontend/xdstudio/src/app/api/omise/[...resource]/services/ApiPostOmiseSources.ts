import { env } from "@/env";
import z from "zod";
import { ZSourcesSchema } from "./shared/ZSchema";

export type ApiPostOmiseSourcesType = z.infer<typeof ZSourcesSchema>;

export type OmiseBarcodeResponse = {
  object: "barcode";
  type: "qr" | string;
  image: {
    object: "document";
    livemode: boolean;
    id: string;
    deleted: boolean;
    filename: string;
    location: string;
    kind: string;
    download_uri: string;
    created_at: string; // ISO datetime
  };
  raw_data: unknown | null;
};

export interface OmiseSourcesRespone {
  _attributes: {
    object: "source";
    id: string;
    livemode: boolean;
    location: string;
    amount: number;
    barcode: string | null;
    bank: string | null;
    created_at: string;
    currency: "THB";
    email: string | null;
    flow: string;
    installment_term: number | null;
    ip: string | null;
    absorption_type: string | null;
    name: string | null;
    mobile_number: string | null;
    phone_number: string | null;
    platform_type: string | null;
    scannable_code: OmiseBarcodeResponse;
    qr_settings: unknown | null;
    billing: unknown | null;
    shipping: unknown | null;
    items: any[];
    references: unknown | null;
    provider_references: unknown | null;
    store_id: string | null;
    store_name: string | null;
    terminal_id: string | null;
    type: "promptpay";
    zero_interest_installments: boolean | null;
    charge_status: "unknown" | "pending" | "successful" | "failed";
    receipt_amount: number | null;
    discounts: any[];
    promotion_code: string | null;
    supplier_id: string | null;
  };
  _changes: any[];
}
export const ApiPostOmiseSources = async (
  url: string | null,
  arg: ApiPostOmiseSourcesType
): Promise<OmiseSourcesRespone> => {
  const validated = await ZSourcesSchema.parseAsync(arg);
  const response = await fetch(
    `${url ?? env.NEXT_PUBLIC_SITE_URL}/api/omise/sources`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validated),
    }
  );

  return await response.json();
};
