import { BreadcrumbComponent } from "@/shared/components/breadcrumb";
import { ContainerSection } from "@/shared/components/ContainerSection";
import { Separator } from "@/shared/libs/shadcn/ui/separator";
import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";
import { Fragment } from "react/jsx-runtime";

export default function ProductLoading() {
  return (
    <Fragment>
      <BreadcrumbComponent loading />
      <ContainerSection title="Product">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Image Section */}
          <div className="space-y-4">
            <Skeleton className="h-[500px] w-full rounded-lg" />
            <div className="flex gap-2">
              <Skeleton className="size-20 rounded-lg" />
              <Skeleton className="size-20 rounded-lg" />
              <Skeleton className="size-20 rounded-lg" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-6 w-48" />
            </div>

            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-40 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="flex gap-4">
              <Skeleton className="h-12 w-full flex-1" />
              <Skeleton className="h-12 w-full flex-1" />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Separator className="my-5" />
        <div>
          <div className="flex gap-4">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>
          <div className="mt-6 space-y-4">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </ContainerSection>
    </Fragment>
  );
}
