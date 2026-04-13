# 📦 Shared Core Module Architecture

The `src/shared/core` directory centralizes all domain-specific logic, data fetching, and state management for the application. It follows a modular, layer-based architecture designed for **Predictability**, **Type-Safety**, and **Cache Consistency**.

## 🏗️ The 5-Layer Pattern

Each domain (e.g., `user`, `cart`, `product`) is organized into several key files, each with a specific responsibility:

### 1. `types.ts` / `typs.ts` (Core Definitions)
The "Contract" of the module. It defines the TypeScript interfaces and types shared across the domain.
- **KeyRegistry**: Ensures consistency between Server-side tags and Client-side query keys.
- **CacheKeyResult**: Standardized output for key factories.

### 2. `keys.ts` (The Single Source of Truth)
Manages all keys for both **TanStack Query** (queryKey) and **Next.js Cache** (cacheTag).
- **Centralized**: One change here updates both client and server caching.
- **Hierarchical**: Uses an `all` key for broad revalidation and specific keys for targeted updates.
```typescript
export const keys = {
  all: ["user"],
  profile(userId: string) {
    return {
      queryKey: [...this.all, "profile", userId],
      tag: [...this.all, `user-profile-${userId}`],
    };
  },
} satisfies KeyRegistry;
```

### 3. `action.ts` (Server Logic)
Handles all Server-side operations using Payload CMS local API.
- **Data Fetching**: functions marked with `use cache` that interact with the database.
- **Mutations**: Server Actions for updating data.
- **Cache Management**: Executes `revalidateTag` using the definitions from `keys.ts`.

### 4. `query.ts` (TanStack Query Config)
Defines `queryOptions` and `infiniteQueryOptions` for client-side data fetching.
- Connects the Server Actions to the TanStack Query lifecycle.
- Ensures type-safety by consuming `keys.ts` for its `queryKey`.

### 5. `hook.ts` (Custom React Hooks)
The abstraction layer for the UI.
- Wraps `queryOptions` into easy-to-use hooks (e.g., `useUserItems`).
- Handles complex logic like loading states or local-first synchronization.

---

## 🚀 Usage Guide

### 1. Fetching Data in Components
To fetch data on the client or server, use the hooks or the queries object exported from the module.

**Using Hooks (Recommended for Client Components):**
```tsx
import { useUserCredit } from "@/shared/core/user";

const CreditDisplay = ({ userId }: { userId: string }) => {
  const { data: credit, isLoading } = useUserCredit(userId);

  if (isLoading) return <Skeleton />;
  return <div>Credit: {credit?.amount}</div>;
};
```

### 2. Mutating Data & Revalidation
When updating data, use a Server Action that triggers revalidation to keep the UI in sync.

**Inside `action.ts`:**
```typescript
"use server";
import { revalidateTag } from "next/cache";

export async function updateUserProfile(userId: string, data: any) {
  // 1. Perform logic (update database via Payload)
  // ...
  
  // 2. Revalidate using the centralized keys
  revalidateTag(keys.profile(userId).tag[1]); 
}
```

### 3. How to add a new Feature
1.  **Define Keys**: Add the new query key and cache tag to `keys.ts`.
2.  **Create Action**: Add the fetcher/mutation in `action.ts`.
3.  **Register Query**: Define the `queryOptions` in `query.ts`.
4.  **Expose Hook**: (Optional) Wrap the query in a hook in `hook.ts` for UI consumption.
5.  **Export**: Ensure the new assets are exported from the module's `index.ts`.

---

## 🔄 Data Flow Summary

1. **Definition**: `keys.ts` -> Centralized keys.
2. **Server**: `action.ts` -> Fetch data + `cacheTag` from `keys.ts`.
3. **Bridge**: `query.ts` -> Connect fetcher to TanStack Query.
4. **UI**: `hook.ts` -> Provide clean API to components.
5. **Update**: `action.ts` -> Mutate + `revalidateTag` from `keys.ts`.

---

## ✅ Best Practices
- **Never hardcode strings**: Always use `keys.ts` for query keys and cache tags.
- **Isolate Logic**: Logic belonging to a domain should **not** leak into other core modules. Use cross-module imports sparingly.
- **Public API**: Only import from the domain's root `index.ts` (e.g., `import { ... } from "@/shared/core/user"`).
