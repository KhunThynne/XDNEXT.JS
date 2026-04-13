import type { Config } from "@/payload-types";
import type { BasePayload } from "payload";

type PayloadMethods = {
  [K in keyof BasePayload]: BasePayload[K] extends (...args: any[]) => any
    ? K
    : never;
}[keyof BasePayload];

type PayloadArgs<
  M extends PayloadMethods,
  C extends keyof Config["collections"],
> = Parameters<Extract<BasePayload[M], (...args: never) => any>>[0] & {
  collection: C;
  select?: Config["collectionsSelect"][C];
};
type PayloadArgsWithoutCollection<
  M extends PayloadMethods,
  C extends keyof Config["collections"],
> = Omit<PayloadArgs<M, C>, "collection">;
export type { PayloadArgs, PayloadMethods, PayloadArgsWithoutCollection };
