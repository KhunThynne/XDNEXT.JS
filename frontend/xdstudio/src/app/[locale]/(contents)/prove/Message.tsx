"use client";

import { use, useState } from "react";

function createDelayedMessage() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from client after 3 seconds!");
    }, 100);
  });
}

export function Message() {
  const [messagePromise] = useState(() => createDelayedMessage());
  const message = use(messagePromise);
  return <p>Message: {message}</p>;
}
