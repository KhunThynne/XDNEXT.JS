"use client";

import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/libs/shadcn/ui/card";
import Content from "@/shared/components/ui/Content";
import type { Metadata } from "next";

// Error boundaries must be Client Components
export const metadata: Metadata = {
  title: "XD Shop - Error",
  description: "This is a static description for all locales",
};

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Content
      className="min-h-screen place-content-center"
      classNames={{
        content: "max-w-md mx-auto   px-4",
      }}
    >
      <Card>
        <CardHeader>
          <h2>
            Server error
            {`can't`} connect to the server!{" "}
          </h2>
        </CardHeader>
        <CardContent>
          {error?.message && (
            <p className="text-destructive">{error.message}</p>
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
  );
}
