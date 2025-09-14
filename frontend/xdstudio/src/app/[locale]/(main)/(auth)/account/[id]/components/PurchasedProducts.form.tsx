"use client";

import { Form } from "@/libs/shadcn/ui/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { Grid3X3, List, Package, PackageOpen } from "lucide-react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "@navigation";
import {
  GetUserItemDocument,
  GetUserItemQuery,
  Product,
} from "@/libs/graphql/generates/graphql";
import { useQuery } from "@tanstack/react-query";
import { execute } from "@/libs/graphql/execute";
import { Session } from "next-auth";
import { TabsComponent } from "@/shared/components/ui/TabsComponent";
import { MotionTransition } from "@/shared/components/MotionTransition";
import UserProductLoading from "../@userProducts/loading";
import { Badge } from "@/libs/shadcn/ui/badge";
import _ from "lodash";
import { CardProduct } from "@/app/[locale]/(main)/(contants)/products/components/ProductCard";

const ListItems = ({
  items,
}: {
  items: NonNullable<NonNullable<GetUserItemQuery["user"]>["items"]>;
}) => {
  return (
    <MotionTransition animationKey="list">
      <ul className="space-y-3 divide-y">
        {items?.map((props, index) => {
          const product = props.item?.product as Product;
          return (
            <li key={`list-${index}`} className="flex items-center gap-4">
              <div className="size-15 relative aspect-square overflow-hidden rounded-lg border bg-gray-100">
                {product?.images?.[0] && (
                  <Image
                    src={product?.images[0].src?.url ?? ""}
                    alt={product.images[0]?.altText ?? ""}
                    className="h-full w-full object-cover"
                    fill
                  />
                )}
              </div>
              <div className="flex-grow">
                <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
                <p className="mb-2 text-sm">{product.description}</p>
                <p className="text-xs font-light">Update: {props.updateAt}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-accent mb-2 text-xl font-bold">
                  {product.price?.price}
                </p>
                <Badge>test</Badge>
              </div>
            </li>
          );
        })}
      </ul>
    </MotionTransition>
  );
};

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
        "@min-3xs:grid-cols-2 @min-lg:grid-cols-4 xl:@min-lg:grid-cols-5 @min-xl:grid-col-5 gap-3"
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
          const product = props.item?.product as Product;
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

export default function PurchasedProductsForm({
  session,
}: {
  session: Session;
}) {
  const method = useForm({
    defaultValues: {
      providers: "Credential",
      product_id: [],
      search: "",
    },
  });
  const { data, status } = useQuery({
    queryKey: ["user-items", session.user.id],
    queryFn: async () => {
      const res = await execute(GetUserItemDocument, {
        where: { id: session.user.id },
      });
      return res;
    },
    enabled: !!session.user.id,
  });

  return (
    <Form {...method}>
      <InputForm
        label="Search"
        name="search"
        placeholder="Search .."
        classNames={{
          input: " bg-primary-foreground dark:bg-secondary",
          container: "max-w-md",
        }}
        type="search"
      />

      {status === "success" ? (
        <form className="@container mt-3 space-y-4">
          <TabsComponent
            tabs={[
              {
                label: <Grid3X3 />,
                value: "grid",
              },
              // {
              //   label: <List />,
              //   value: "list",
              // },
            ]}
          >
            <TabsComponent.Content value="grid">
              <GridItems items={data?.data?.user?.items ?? []} />
            </TabsComponent.Content>
            <TabsComponent.Content value="list">
              <ListItems items={data?.data?.user?.items ?? []} />
            </TabsComponent.Content>
          </TabsComponent>
        </form>
      ) : (
        <UserProductLoading />
      )}
    </Form>
  );
}
