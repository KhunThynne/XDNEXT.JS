"use client";

import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/libs/shadcn/ui/card";
import Content from "@/shared/components/ui/Content";
import { Metadata } from "next";

// Error boundaries must be Client Components
export const metadata: Metadata = {
  title: "Xdstudio - Error",
  description: "This is a static description for all locales",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html key="global-error">
      <body className="bg-secondary flex min-h-screen flex-col place-content-center">
        <Content
          classNames={{
            content: "max-w-md mx-auto grow place-content-center px-4",
          }}
        >
          <Card>
            <CardHeader>
              <h2>Something went wrong!</h2>
            </CardHeader>
            <CardContent>
              {error?.message && (
                <p style={{ color: "red" }}>{error.message}</p>
              )}
              {error?.digest && (
                <small style={{ opacity: 0.6 }}>Error ID: {error.digest}</small>
              )}
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant={"outline"} onClick={() => reset()}>
                Try again
              </Button>
            </CardFooter>
          </Card>
        </Content>
      </body>
    </html>
  );
}
