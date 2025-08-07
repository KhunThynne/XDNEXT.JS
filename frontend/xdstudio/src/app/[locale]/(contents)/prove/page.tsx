// app/page.tsx
import { Message } from "./Message";

export default async function Page() {
  return (
    <div>
      <div>
        <span className="flex items-center gap-2">
          <input type="checkbox"  className="peer" />
          <span>Create a to do list</span>

          <svg
            className="h-4 w-4 text-red-500 peer-checked:border"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
          </svg>
        </span>
      </div>

      <h1>Testing use() with client component delayed message</h1>
      {/* <Message /> */}
    </div>
  );
}
