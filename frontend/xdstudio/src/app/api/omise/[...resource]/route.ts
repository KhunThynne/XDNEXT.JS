import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { handleError } from "@/utils/handleError";

import _ from "lodash";

import { env } from "@/env";
import {
  ApiPostOmiseSources,
  ApiPostOmiseSourcesType,
} from "./services/ApiPostOmiseSources";

const resourceSchema = z.enum(["charge", "sources"]);
type typeResource = z.infer<typeof resourceSchema>;
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ resource?: typeResource[] }> }
) {
  try {
    const body = await request.json();
    if (_.isEmpty(body)) {
      throw new Error("Request body is empty");
    }
    const { resource: rawResource } = await params;
    await resourceSchema.parseAsync(rawResource?.[0]);
    const resource = rawResource?.[0];
    let response;
    switch (resource) {
      case "sources":
        response = await ApiPostOmiseSources(
          env.XDCoreApi,
          body as ApiPostOmiseSourcesType
        );
        break;
      default:
        throw new Error(`Unsupported resource: ${resource}`);
    }
    return NextResponse.json(await response.json());
  } catch (error) {
    return handleError(error);
  }
}
