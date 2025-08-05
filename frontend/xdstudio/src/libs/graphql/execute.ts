import { env } from "@/env";
import { TypedDocumentString } from "./generates/graphql";

async function executeWithEndpoint<TResult, TVariables>(
  endpoint: string,
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json() as Promise<{ data: TResult }>;
}

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...variables: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return executeWithEndpoint(
    `${env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
    query,
    ...variables
  );
}

export async function executeAuth<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...variables: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  return executeWithEndpoint(
    `${env.NEXT_PUBLIC_BASE_URL}/api/auth/graphql`,
    query,
    ...variables
  );
}
