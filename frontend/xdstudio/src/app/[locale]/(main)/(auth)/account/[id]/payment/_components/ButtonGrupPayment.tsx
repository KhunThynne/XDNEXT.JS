"use client";
import { Button } from "@/libs/shadcn/ui/button";
import { ButtonGroup } from "@/libs/shadcn/ui/button-group";
import { Separator } from "@/libs/shadcn/ui/separator";

import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Link } from "@navigation";
import clsx from "clsx";
import { Wallet, List } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

export const ButtonGrupPayment = ({
  children,
  payment,
  dataTable,
}: WithChildren & { payment: React.ReactNode; dataTable: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const segments = searchParams.get("paymentSegment") as
    | "data-table"
    | "payment";
  return (
    <Fragment>
      <ButtonGroup className="mx-4 xl:hidden">
        <Button
          size={"icon-sm"}
          variant={segments !== "data-table" ? "default" : "outline"}
          disabled={segments !== "data-table"}
        >
          <Link href={`?paymentSegment=payment`} replace>
            <Wallet />
          </Link>
        </Button>
        <Button
          size={"icon-sm"}
          variant={segments === "data-table" ? "default" : "outline"}
          disabled={segments === "data-table"}
        >
          <Link href={`?paymentSegment=data-table`} replace>
            <List />
          </Link>
        </Button>
      </ButtonGroup>
      <ContainerSection
        classNames={{ content: "flex gap-6 max-xl:flex-col" }}
        className="mx-4 grow"
      >
        <section
          className={clsx(
            "relative flex-2 xl:overflow-auto",
            segments !== "data-table" ? `visible` : `max-xl:hidden`
          )}
        >
          <div className="inset-0 flex flex-col xl:absolute">{payment}</div>
        </section>

        <section
          className={clsx(
            `contents`,
            segments === "data-table"
              ? `visible`
              : `max-xl:invisible max-xl:hidden`
          )}
        >
          <Separator orientation="vertical" className="max-xl:hidden" />
          {dataTable}
        </section>
      </ContainerSection>
      {children}
    </Fragment>
  );
};
