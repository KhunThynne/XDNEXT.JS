"use client";
import Link from "next/link";
import { ChevronRight, RefreshCw } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/libs/shadcn/ui/breadcrumb";

import _ from "lodash";
import { useBreadBrumbStore } from "./useBreadBrumb.store";
import { Fragment } from "react";
import { revalidatePathAction } from "@/shared/actions/cache";
import { usePathname as usePathnameNext } from "next/navigation";
import { usePathname } from "@navigation";
import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";
import clsx from "clsx";
const BreadcrumbItemComponent = ({
  href,
  segment,
  disable,
  children,
  loading,
  ...breadcrumbItem
}: {
  href: string;
  segment: string;
  disable: boolean;
  children?: React.ReactNode;
  loading?: boolean;
} & React.ComponentProps<typeof BreadcrumbItem>) => {
  const startCase = _.startCase(segment);
  const skeletonWidth = `${startCase.length * 0.85}rem`;
  return (
    <BreadcrumbItem className="capitalize" {...breadcrumbItem}>
      {loading ? (
        <Skeleton className="h-5" style={{ width: skeletonWidth }} />
      ) : disable ? (
        <BreadcrumbPage>{startCase}</BreadcrumbPage>
      ) : (
        <BreadcrumbLink asChild>
          <Link href={href}>{startCase}</Link>
        </BreadcrumbLink>
      )}
      {children}
    </BreadcrumbItem>
  );
};
export function BreadcrumbComponent({
  pathNames,
  loading,
  searchParams,
}: {
  pathNames?: string[];
  loading?: boolean;
  searchParams?: string | string[] | undefined;
}) {
  const pathname = usePathname();
  const realPathname = usePathnameNext();
  pathNames = pathNames ?? pathname.split("/").filter((path) => path);
  const { breadcrumbeStore } = useBreadBrumbStore();
  if (breadcrumbeStore.disable) return false;
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItemComponent
          loading={loading}
          href={"/"}
          segment={"Home"}
          disable={pathNames.length === 0}
        />

        {pathNames.map((segment = "unkhown", index) => {
          const href =
            "/" +
            pathNames.slice(0, index + 1).join("/") +
            (searchParams?.toString() ? `?${searchParams.toString()}` : "");
          const isLast = index === pathNames.length - 1;

          return (
            <Fragment key={`${segment}-${index}`}>
              <BreadcrumbSeparator>
                <ChevronRight
                  className={clsx("size-4", loading && "opacity-25")}
                />
              </BreadcrumbSeparator>

              <BreadcrumbItemComponent
                loading={loading}
                className="group cursor-pointer"
                href={href}
                segment={
                  breadcrumbeStore.current && isLast
                    ? breadcrumbeStore.current
                    : segment
                }
                disable={isLast}
                {...(isLast && {
                  onClick: async () => {
                    await revalidatePathAction(realPathname);
                  },
                })}
              >
                {isLast && (
                  <RefreshCw className="hidden size-3 group-hover:block group-hover:animate-spin" />
                )}
              </BreadcrumbItemComponent>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
