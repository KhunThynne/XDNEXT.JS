"use client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/libs/shadcn/ui/breadcrumb";

import { usePathname } from "@navigation";
import _ from "lodash";
import { useBreadBrumbStore } from "./useBreadBrumb.store";

const BreadcrumbItemComponent = ({
  href,
  segment,
  disable,
}: {
  href: string;
  segment: string;
  disable: boolean;
}) => {
  const startCase = _.startCase(segment);
  return (
    <BreadcrumbItem className="capitalize">
      {disable ? (
        <BreadcrumbPage>{startCase}</BreadcrumbPage>
      ) : (
        <BreadcrumbLink asChild>
          <Link href={href}>{startCase}</Link>
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
  );
};
export function BreadcrumbComponent() {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);
  const { breadcrumbeStore } = useBreadBrumbStore();
  if (breadcrumbeStore.disable) return false;
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        <BreadcrumbItemComponent
          href={"/"}
          segment={"Home"}
          disable={pathNames.length === 0}
        />

        {pathNames.map((segment, index) => {
          const href = "/" + pathNames.slice(0, index + 1).join("/");
          const isLast = index === pathNames.length - 1;

          return (
            <div key={href} className="flex items-center gap-1">
              <BreadcrumbSeparator>
                <ChevronRight className="size-4" />
              </BreadcrumbSeparator>

              <BreadcrumbItemComponent
                href={href}
                segment={
                  breadcrumbeStore.current && isLast
                    ? breadcrumbeStore.current
                    : segment
                }
                disable={isLast}
              />
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
