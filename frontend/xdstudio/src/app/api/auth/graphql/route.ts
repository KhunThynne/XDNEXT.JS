import { env } from "@/env";
import { getToken } from "next-auth/jwt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(`${env.API_BACKEND_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const errorText = await res.text();
      return new Response(errorText, {
        status: res.status,
        statusText: res.statusText,
      });
    }

    const json = await res.json();
    if (json.errors) {
      return Response.json({ errors: json.errors }, { status: 400 });
    }

    return Response.json(json);
  } catch (_) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
