"use client";

import { Button } from "@/libs/shadcn/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/libs/shadcn/ui/empty";
import { Icon } from "lucide-react";
import { ErrorProps } from "next/error";

export default function ErrorProducts(err: ErrorProps) {
  return (
    <Empty key={"error"}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Icon iconNode={[]} />
        </EmptyMedia>
        <EmptyTitle>No data</EmptyTitle>
        <EmptyDescription>No data found</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add data</Button>
      </EmptyContent>
    </Empty>
  );
}
