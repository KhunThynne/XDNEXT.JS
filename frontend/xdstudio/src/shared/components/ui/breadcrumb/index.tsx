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
import { Fragment } from "react";

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
export function BreadcrumbComponent({ pathNames }: { pathNames?: string[] }) {
  const pathname = usePathname();
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
                href={href}
                segment={
                  breadcrumbeStore.current && isLast
                    ? breadcrumbeStore.current
                    : segment
                }
                disable={isLast}
              />
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
