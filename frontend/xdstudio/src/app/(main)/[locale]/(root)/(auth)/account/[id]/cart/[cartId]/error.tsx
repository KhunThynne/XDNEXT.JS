"use client";

import { AlertCircle } from "lucide-react";

import type { ErrorProps } from "next/error";
import { EmptyComponent } from "@/shared/components/EmptyComponent";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
} & ErrorProps) {
  return (
    <EmptyComponent
      description={
        error.message ||
        "An unexpected error occurred while loading this page. Please try again."
      }
      icon={<AlertCircle className="text-destructive size-6" />}
      className="min-h-[50vh]"
      onClickAction={() => reset()}
      title={`Something went wrong!`}
    />
  );
}
