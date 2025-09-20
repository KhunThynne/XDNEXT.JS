import { env } from "@/env";
import z from "zod";
import { OmiseSourcesRespone } from "./ApiPostOmiseSources";
import { ZChargeSchema } from "./shared/ZSchema";

export type ApiPostOmiseChargeType = z.infer<typeof ZChargeSchema>;
export interface OmiseChargeResponse {
  _attributes: {
    object: "charge";
    id: string;
    location: string;
    amount: number;
    currency: string;
    status: "pending" | "successful" | "failed";
    created_at: string;
    paid_at: string | null;
    authorized_at: string | null;
    expires_at: string | null;
    source: OmiseSourcesRespone["_attributes"];
    refunds: {
      object: "list";
      data: any[];
      limit: number;
      offset: number;
      total: number;
      location: string;
      order: string;
      from: string;
      to: string;
    };
    transaction_fees: {
      fee_flat: string;
      fee_rate: string;
      vat_rate: string;
    };
    platform_fee: {
      fixed: number | null;
      amount: number | null;
      percentage: number | null;
    };
    card: unknown | null;
    description: string | null;
    metadata: Record<string, any>;
    failure_code: string | null;
    failure_message: string | null;
    [key: string]: any;
  };
  _changes: any[];
}

export const ApiPostOmiseCharge = async (
  url: string | null,
  arg: ApiPostOmiseChargeType
): Promise<OmiseChargeResponse> => {
  const validated = await ZChargeSchema.parseAsync(arg);

  const response = await fetch(
    `${url ?? env.NEXT_PUBLIC_SITE_URL}/api/omise/charges`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validated),
    }
  );

  return response.json();
};
