"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <html key="global-not-found">
      <body>
        <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4 text-center">
          <h1 className="text-foreground mb-4 text-6xl font-extrabold">404</h1>
          <p className="text-muted-foreground mb-6 max-w-md text-lg">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link href="/">
            <Button variant="default">Go back home</Button>
          </Link>
        </div>
      </body>
    </html>
  );
}
