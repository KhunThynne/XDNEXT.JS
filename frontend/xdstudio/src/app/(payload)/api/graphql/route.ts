import { getToken } from "next-auth/jwt";
import { env } from "@/env";
import { NextResponse } from "next/server";
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from "@payload-config";
import { GRAPHQL_POST, REST_OPTIONS } from "@payloadcms/next/routes";

export const POST = GRAPHQL_POST(config);

export const OPTIONS = REST_OPTIONS(config);
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const token = await getToken({ req, secret: env.AUTH_SECRET });

//     const headers: Record<string, string> = {
//       "Content-Type": "application/json",
//     };

//     if (token?.sessionToken) {
//       headers["Authorization"] = `Bearer ${token.sessionToken}`;
//     }
//     const url = `${env.INTERNAL_API_URL}/api/graphql`;
//     const response = await fetch(url, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     });
//     if (!response.ok) {
//       const errorText = await response.text();
//       return NextResponse.json(
//         { error: "GraphQL request failed", message: errorText },
//         { status: response.status }
//       );
//     }

//     const result = await response.json();
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Unexpected Error:", error);
//     return NextResponse.json(
//       {
//         error: "Internal Server Error",
//         message: error instanceof Error ? error.message : String(error),
//       },
//       { status: 500 }
//     );
//   }
// }
