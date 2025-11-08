"use client";

import { Form } from "@/libs/shadcn/ui/form";

import {
  Grid3X3,
  List,
  MessageSquareX,
  Package,
  PackageOpen,
  X,
} from "lucide-react";

import clsx from "clsx";
import Image from "next/image";
import { Link, usePathname } from "@navigation";
import type {
  GetUserItemQuery,
  Product,
  User,
  UserItem,
} from "@/libs/graphql/generates/graphql";
import { GetUserItemDocument } from "@/libs/graphql/generates/graphql";
import { useQuery } from "@tanstack/react-query";
import { execute } from "@/libs/graphql/execute";
import type { Session } from "next-auth";
import { TabsComponent } from "@/shared/components/ui/TabsComponent";
import { MotionTransition } from "@/shared/components/MotionTransition";
import { Badge } from "@/libs/shadcn/ui/badge";
import _ from "lodash";
import { CardProduct } from "@/app/[locale]/(main)/(contents)/(product_content)/products/components/ProductCard";

import { useAppForm } from "@/libs/shadcn/libs/tanstack-react-form";
import { InputForm } from "@/libs/shadcn/libs/tanstack-react-form/Input";
import { useForm, formOptions, useField } from "@tanstack/react-form";
import { DataTableGridItemsInfiniteScroll } from "./DataTableUserItemsInfiniteScroll";
import {
  InputGroupAddon,
  InputGroupButton,
} from "@/libs/shadcn/ui/input-group";
import { Button } from "@/libs/shadcn/ui/button";
import { useParams } from "next/navigation";

const GridItems = ({
  items,
}: {
  items: NonNullable<NonNullable<GetUserItemQuery["user"]>["items"]>;
}) => {
  const pathname = usePathname();
  return (
    <MotionTransition
      animationKey="grid"
      className={clsx(
        `grid`,
        "@min-xl:grid-col-5 gap-3 @min-3xs:grid-cols-2 @min-lg:grid-cols-4 xl:@min-lg:grid-cols-5"
      )}
    >
      {_.isEmpty(items) ? (
        <section className="col-span-full flex min-h-[50vh] flex-col items-center justify-center gap-4">
          <PackageOpen className="size-40 opacity-40" />
          <div className="text-xl font-semibold">No items found</div>
          <p className="brightness-50">
            You haven’t purchased any products yet.
          </p>
        </section>
      ) : (
        items?.map((props, index) => {
          const product = props!.item?.product as Product;
          return (
            <CardProduct
              footer={false}
              key={`grid-${index}`}
              className="hover:animate-pop relative aspect-square max-w-full pb-0 duration-300 hover:scale-105 hover:shadow-xl"
              classNames={{
                title:
                  "text-sm place-self-end hover:underline hover:brightness-125 ",
                header: "absolute inset-0 ",
                containerImage: "max-h-full ",
                image: "object-cover rounded-lg",
                content:
                  "z-1 absolute bottom-0 shadow w-full p-5 bg-primary-foreground/50",

                containerDetail: "hidden",
              }}
              product={{
                href: `${pathname}/config`,
                ...product,
              }}
              session={null}
            />
          );
        })
      )}
    </MotionTransition>
  );
};

export const purchasedProductsOptions = formOptions({
  defaultValues: {
    providers: "Credential",
    product_id: [],
    search: "",
  },
});

export default function PurchasedProductsForm({
  session,
}: {
  session: Session;
}) {
  const form = useAppForm({
    ...purchasedProductsOptions,
  });

  const search = useField({ name: "search", form });
  return (
    <section className="@container flex h-full grow flex-col space-y-6">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await form.handleSubmit();
        }}
      >
        <form.AppField
          name="search"
          children={(field) => {
            return (
              <field.Input
                label="Search"
                className="max-w-md"
                placeholder="Search .."
                type="search"
              />
            );
          }}
        />
      </form>
      <section className="relative h-full">
        <DataTableGridItemsInfiniteScroll
          session={session}
          filterText={search.state.value}
        />
      </section>
    </section>
  );
}
