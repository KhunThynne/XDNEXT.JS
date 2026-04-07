"use client";
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
import { updateTagClient } from "@/shared/utils/m";

import { PackageOpen } from "lucide-react";

import { Fragment } from "react/jsx-runtime";

export default function EmptyProducts() {
  return (
    <Fragment>
      <BreadcrumbComponent />
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center p-4">
        <Empty className="max-w-md border-none p-0">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <PackageOpen className="size-6 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>No Products Found</EmptyTitle>
            <EmptyDescription>
              We couldn&apos;t find any products at the moment. Please check
              back later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              onClick={async () => {
                await updateTagClient("products");
              }}
            >
              Refresh
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </Fragment>
  );
}
