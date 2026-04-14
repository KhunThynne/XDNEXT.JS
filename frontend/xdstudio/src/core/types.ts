export interface CacheKeyResult {
  queryKey: readonly unknown[];
  tag: string[];
}

export type KeyFactoryFn = (...args: any[]) => CacheKeyResult;

export type KeyRegistry = {
  all: readonly string[];
} & Record<string, KeyFactoryFn | readonly string[]>;
