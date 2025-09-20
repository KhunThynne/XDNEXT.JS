import { NextResponse } from "next/server";

export function handleError(error: unknown): NextResponse {
  let apiError: string | object =
    error instanceof Error ? error.message : String(error);
  try {
    apiError = JSON.parse(apiError as string);
  } catch {}
  console.error("Unexpected Error:", error);
  return NextResponse.json(apiError, { status: 500 });
}
