import { PackageX, ArrowLeft } from "lucide-react";
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
import Link from "next/link";

export default function NotFoundLocale() {
  return (
    <>
      <BreadcrumbComponent pathNames={["products", "unknown"]} />
      <div className="flex h-full min-h-[50vh] flex-col items-center justify-center p-4">
        <Empty className="max-w-md border-none p-0">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <PackageX className="size-6 text-muted-foreground" />
            </EmptyMedia>
            <EmptyTitle>Product Not Found</EmptyTitle>
            <EmptyDescription>
             {`We couldn't find the product you're looking for. It might have been removed,
              renamed, or didn't exist in the first place.`}
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="mt-4 flex justify-center">
            <Button asChild variant="default">
              <Link href="/products">
                <ArrowLeft className="mr-2 size-4" />
                Back to Products
              </Link>
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
}
