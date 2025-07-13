import { getToken } from "next-auth/jwt";
import { env } from "@/env";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = await getToken({ req, secret: env.AUTH_SECRET });
    if (!token?.jwt_token) {
      return NextResponse.json(
        { error: "Unauthorized: Missing JWT token" },
        { status: 401 }
      );
    }
    const response = await fetch(`${env.API_BACKEND_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.jwt_token}`,
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("GraphQL Error:", errorText);

      return NextResponse.json(
        { error: "GraphQL request failed", message: errorText },
        { status: response.status }
      );
    }
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
