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
} from "@/libs/shadcn/ui/breadcrumb";

import _ from "lodash";
import { useBreadBrumbStore } from "./useBreadBrumb.store";
import { Fragment } from "react";
import { revalidatePathAction } from "@/shared/actions/cache";
import { usePathname as usePathnameNext } from "next/navigation";
import { usePathname } from "@navigation";
const BreadcrumbItemComponent = ({
  href,
  segment,
  disable,
  children,
  ...breadcrumbItem
}: {
  href: string;
  segment: string;
  disable: boolean;
  children?: React.ReactNode;
} & React.ComponentProps<typeof BreadcrumbItem>) => {
  const startCase = _.startCase(segment);
  return (
    <BreadcrumbItem className="capitalize" {...breadcrumbItem}>
      {disable ? (
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
export function BreadcrumbComponent({ pathNames }: { pathNames?: string[] }) {
  const pathname = usePathname();
  const realPathname = usePathnameNext();
  pathNames = pathNames ?? pathname.split("/").filter((path) => path);
  const { breadcrumbeStore } = useBreadBrumbStore();
  if (breadcrumbeStore.disable) return false;
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItemComponent
          href={"/"}
          segment={"Home"}
          disable={pathNames.length === 0}
        />

        {pathNames.map((segment = "unkhown", index) => {
          const href = "/" + pathNames.slice(0, index + 1).join("/");
          const isLast = index === pathNames.length - 1;

          return (
            <Fragment key={`${segment}-${index}`}>
              <BreadcrumbSeparator>
                <ChevronRight className="size-4" />
              </BreadcrumbSeparator>

              <BreadcrumbItemComponent
                className="group cursor-pointer"
                href={href}
                segment={
                  breadcrumbeStore.current && isLast
                    ? breadcrumbeStore.current
                    : segment
                }
                disable={isLast}
                onClick={async () => {
                  await revalidatePathAction(realPathname);
                }}
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
