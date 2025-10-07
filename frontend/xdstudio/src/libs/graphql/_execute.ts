import { env } from "@/env";
import type { TypedDocumentString } from "./generates/graphql";
import getBaseUrl from "@/utils/getBaseUrl";

type ExecuteArgs<TVariables> = {
  variables?: TVariables;
  next?: NextFetchRequestConfig;
};
export async function executeWithEndpoint<TResult, TVariables>(
  endpoint: string,
  query: TypedDocumentString<TResult, TVariables>,
  args?: ExecuteArgs<TVariables>
): Promise<{ data: TResult }> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query.toString(),
      variables: args?.variables ?? {},
    }),
    next: args?.next,
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json() as Promise<{ data: TResult }>;
}
export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables
): Promise<{ data: TResult }>;

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  args?: ExecuteArgs<TVariables>
): Promise<{ data: TResult }>;

// -------------------------------
// Implement of execute
// -------------------------------
export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  arg?: TVariables | ExecuteArgs<TVariables>
): Promise<{ data: TResult }> {
  const baseUrl = getBaseUrl();
  let executeArgs: ExecuteArgs<TVariables>;
  if (arg && !("variables" in (arg as any))) {
    executeArgs = { variables: arg as TVariables };
  } else {
    executeArgs = (arg as ExecuteArgs<TVariables>) ?? {};
  }
  return executeWithEndpoint(
    `${baseUrl ?? env.NEXT_PUBLIC_SITE_URL}/api/graphql`,
    query,
    executeArgs
  );
}

export async function executeAuth<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  arg?: TVariables | ExecuteArgs<TVariables>
): Promise<{ data: TResult }> {
  const baseUrl = getBaseUrl();
  let executeArgs: ExecuteArgs<TVariables>;
  if (arg && !("variables" in (arg as any))) {
    executeArgs = { variables: arg as TVariables };
  } else {
    executeArgs = (arg as ExecuteArgs<TVariables>) ?? {};
  }

  return executeWithEndpoint(
    `${baseUrl ?? env.NEXT_PUBLIC_SITE_URL}/api/graphql`,
    query,
    executeArgs
  );
}
