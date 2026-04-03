import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import z from "zod";
import { handleError } from "@/utils/handleError";

import _ from "lodash";

import { env } from "@/env";
import type { ApiPostOmiseSourcesType } from "./services/ApiPostOmiseSources";
import { ApiPostOmiseSources } from "./services/ApiPostOmiseSources";
import type { ApiPostOmiseChargeType } from "./services/ApiPostOmiseCharge";
import { ApiPostOmiseCharge } from "./services/ApiPostOmiseCharge";

const resourceSchema = z.enum(["charges", "sources"]);
type typeResource = z.infer<typeof resourceSchema>;
type ParamsType = { params: Promise<{ resource?: string[] }> };

export async function GET(request: NextRequest, { params }: ParamsType) {
  const { resource: rawResource } = await params;
  await resourceSchema.parseAsync(rawResource?.[0]);
  const resource = rawResource?.[0];

  switch (resource as typeResource) {
    case "sources":
      break;
    case "charges":
      const chargeId = rawResource?.[1];
      const response = await fetch(`https://api.omise.co/charges/${chargeId}`, {
        headers: {
          Authorization: `Basic ${Buffer.from(env.OMISE_SECRET_KEY + ":").toString("base64")}`,
        },
      });
      console.log(response);
      return NextResponse.json(await response.json());
    default:
      throw new Error(`Unsupported resource: ${resource}`);
  }
}
export async function POST(request: NextRequest, { params }: ParamsType) {
  try {
    const body = await request.json();
    if (_.isEmpty(body)) {
      throw new Error("Request body is empty");
    }
    const { resource: rawResource } = await params;
    await resourceSchema.parseAsync(rawResource?.[0]);
    const resource = rawResource?.[0];
    let response;
    switch (resource as typeResource) {
      case "sources":
        response = await ApiPostOmiseSources(
          env.XD_CORE_API,
          body as ApiPostOmiseSourcesType
        );
        break;
      case "charges":
        response = await ApiPostOmiseCharge(
          env.XD_CORE_API,
          body as ApiPostOmiseChargeType
        );
        break;
      default:
        throw new Error(`Unsupported resource: ${resource}`);
    }
    return NextResponse.json(response);
  } catch (error) {
    return handleError(error);
  }
}
