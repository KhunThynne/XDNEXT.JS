📂 File Structure & Responsibilities

1. typs.ts (Core Definitions)
   The "Contract" of the module. It defines the TypeScript interfaces and types shared across the entire module.

Defines CacheKeyResult and KeyRegistry to ensure consistency between Server-side tags and Client-side query keys.

Centralizes payload and domain-specific types.

2. keys.ts (Single Source of Truth)
   The core of the caching strategy. This file manages all keys for both TanStack Query (queryKey) and Next.js Cache (cacheTag).

Centralized: One change here updates both client and server caching.

Hierarchical: Uses a base all key for broad revalidation and specific keys for targeted updates.

Self-referencing: Utilizes this.all patterns to maintain a clean, DRY (Don't Repeat Yourself) structure.

3. action.ts (Server Logic)
   Handles all Server-side operations.

Data Fetching: Contains use cache functions (e.g., getUserCreditCache) that interact with the database/Payload CMS.

Mutations: Server Actions for updating user data.

Cache Management: Executes revalidateTag using the definitions from keys.ts.

4. query.ts (TanStack Query Configurations)
   Defines Query Options for client-side data fetching.

Exports userQueries object containing queryOptions and infiniteQueryOptions.

Connects the Server Actions in action.ts to the TanStack Query lifecycle.

Ensures type-safety by consuming keys.ts for its queryKey.

5. hook.ts (Custom React Hooks)
   Abstraction layer for the UI.

Wraps userQueries into easy-to-use custom hooks (e.g., useUserCredit, useUserItems).

Handles loading states, error handling, and local-first synchronization logic if necessary.

6. index.ts (Public API)
   The entry point for the module.

Exports only what is necessary for the rest of the application to consume.

Prevents "import soup" by providing a clean interface.

🔄 Data Flow Example
Definition: Define a new data requirement in typs.ts and its keys in keys.ts.

Server: Create a fetcher in action.ts and tag it with cacheTag(...keys.profile(id).tag).

Bridge: Define the queryOptions in query.ts using that action.

UI: Consume the data in a component using a hook from hook.ts.

Revalidation: When data changes, call a mutation in action.ts which triggers revalidateTag(keys.profile(id).tag[1]).

Note: This structure is designed to be Scalable and Predictable, making it easy to track where data is coming from and how the cache is being invalidated across the stack.
