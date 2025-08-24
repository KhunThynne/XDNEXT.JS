import { create } from "zustand";
import { devtools } from "zustand/middleware";
type StoreWrapper<T, K extends string> = {
  [key in `${Lowercase<K>}Store`]: T;
} & {
  [key in `set${Capitalize<K>}`]: (data: T) => void;
};

/**
 * A generic Zustand helper to create a typed store with named key and setter.
 *
 * @template T The shape of the state.
 * @template K The name of the key (default is "data").
 *
 * @param {Object} config - Configuration object.
 * @param {K} [config.key="data"] - Optional state key name. Will appear as `keyStore` in the store.
 * @param {T} config.initial - Initial value of the store.
 *
 * @returns A Zustand store with shape:
 * - `{ [key.toLowerCase() + 'Store']: T }`
 * - `set${Capitalize<key>}(data: T)`
 *
 * @example
 * // With key
 * const useUserStore = createHookStore({
 *   key: "user",
 *   initial: { name: "Thynne", email: "me@example.com" },
 * });
 *
 * // Without key (defaults to "data")
 * const useDataStore = createHookStore({
 *   initial: { id: 1, status: "active" },
 * });
 */

export function createHookStore<T, K extends string = "data">({
  key,
  initial,
}: {
  key?: K;
  initial: T;
}) {
  const finalKey = (key ?? "data") as K;

  type StoreType = StoreWrapper<T, K>;

  const lowerKey = finalKey.toLowerCase() as Lowercase<K>;
  const setKey =
    `set${finalKey.charAt(0).toUpperCase() + finalKey.slice(1)}` as `set${Capitalize<K>}`;

  return create<StoreType>()(
    devtools((set, get) => ({
      [`${lowerKey}Store`]: initial,
      [setKey]: (data: T | Partial<T>) => {
        const current = get()[`${lowerKey}Store`];
        const next =
          Array.isArray(current) && Array.isArray(data)
            ? data // ถ้าเป็น array assign ตรง ๆ
            : { ...current, ...data }; // ถ้าเป็น object merge
        set({ [`${lowerKey}Store`]: next } as any, false, `${finalKey}/set`);
      },
    }))
  );
}
