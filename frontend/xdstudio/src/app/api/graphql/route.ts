import { env } from "@/env";

export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch(`${env.API_BACKEND_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.CODEGEN_TOKEN}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return Response.json(data);
}
