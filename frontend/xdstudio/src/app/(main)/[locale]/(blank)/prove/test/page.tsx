// Page.js
import { Suspense } from "react";
import { Message } from "../Message";
import { cacheLife, cacheTag } from "next/cache";
async function createDelayedMessage() {
  "use cache";
  cacheLife("max");
  cacheTag("test");
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from client after 3 seconds!");
    }, 1000);
  });
}
export default async function Page() {
  return (
    <div className="relative min-h-screen border">
      <h2>การสาธิต Suspense (3 วินาที)</h2>
      <Suspense fallback={"loading... out"}>
        <Message messagePromise={createDelayedMessage()} />
      </Suspense>
    </div>
  );
}
