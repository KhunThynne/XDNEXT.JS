"use client";
import { Metadata } from "next";

 // Error boundaries must be Client Components
export const metadata: Metadata = {
  title: "Xdstudio-Error",
  description: "This is a static description for all locales",
};
export default function GlobalError({
  // error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html key="global-error">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
