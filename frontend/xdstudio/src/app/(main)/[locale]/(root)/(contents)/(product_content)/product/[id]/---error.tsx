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
import { BreadcrumbComponent } from "@/shared/components/ui/breadcrumb";
import { useEffect } from "react";

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Product layout error:", error);
  }, [error]);

  return (
    <>
      <BreadcrumbComponent pathNames={["products", "Error"]} />
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center p-4">
        <Empty className="max-w-md border-none p-0">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <AlertCircle className="size-6 text-destructive" />
            </EmptyMedia>
            <EmptyTitle>Product Not Found</EmptyTitle>
            <EmptyDescription>
              {error.message ||
                "We couldn't load the product you are looking for. Please try again."}
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
    </>
  );
}
