// app/page.tsx
import { Message } from "./Message";

export default async function Page() {
  return (
    <div>
      <h1>Testing use() with client component delayed message</h1>
      <Message />
    </div>
  );
}
