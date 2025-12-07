"use client";
import { use } from "react";

export function Message({
  messagePromise,
}: {
  messagePromise: Promise<string>;
}) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}
