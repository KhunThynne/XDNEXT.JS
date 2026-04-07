"use client";

import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/libs/shadcn/ui/empty";
import type { ErrorProps } from "next/error";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
} & ErrorProps) {
  return (
    <div className="flex h-full min-h-[50vh] flex-col items-center justify-center p-4">
      <Empty className="max-w-md border-none p-0">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AlertCircle className="size-6 text-destructive" />
          </EmptyMedia>
          <EmptyTitle>Something went wrong!</EmptyTitle>
          <EmptyDescription>
            {error.message ||
              "An unexpected error occurred while loading this page. Please try again."}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="mt-4 flex justify-center">
          <Button onClick={() => reset()} variant="default">
            <RotateCcw className="mr-2 size-4" />
            Try again
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}
