"use client";

import { CardProduct } from "@/app/[locale]/(contents)/products/components/ProductCard";
import { Button } from "@/shared/components/shadcn/button";
import { Form } from "@/shared/components/shadcn/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { Grid3X3, List } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Card, CardContent } from "@/shared/components/shadcn/card";
import Image from "next/image";
import { usePathname } from "@navigation";
import { useGetProductsQuery } from "@/app/[locale]/(contents)/products/hooks/useGetProductsQuery";
import { OrderDirection, Product } from "@/libs/graphql/generates/graphql";
// Mock product list (จริง ๆ คุณอาจจะ fetch มาจาก API)

export default function PurchasedProductsForm() {
  const method = useForm({
    defaultValues: {
      providers: "Credential",
      product_id: [],
      search: "",
    },
  });
  const { data, status } = useGetProductsQuery({
    orderBy: { name: OrderDirection.Asc },
    skip: 0,
    take: 10,
  });
  const pathname = usePathname();
  const [styleForm, setStyleForm] = useState<"list" | "grid">("grid");
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
        className="mb-3"
        type="search"
      />
      <div className="group flex gap-2" data-state={styleForm}>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setStyleForm("grid")}
          className={clsx(
            "transition-colors duration-200 group-data-[state=grid]:border"
          )}
        >
          <Grid3X3 />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => setStyleForm("list")}
          className={clsx(
            "transition-colors duration-200 group-data-[state=list]:border"
          )}
        >
          <List />
        </Button>
      </div>
      {status === "success" && (
        <form className="@container mt-3 space-y-4">
          <AnimatePresence mode="wait">
            {styleForm === "grid" && (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className={clsx(
                  `grid`,
                  "@min-3xs:grid-cols-2 @min-lg:grid-cols-4 xl:@min-lg:grid-cols-5 @min-xl:grid-col-5 gap-3"
                )}
              >
                {data?.products?.map((props, index) => {
                  const product = props as Product;
                  return (
                    <CardProduct
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
                    />
                  );
                })}
              </motion.div>
            )}
            {styleForm === "list" && (
              <motion.div
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <Card>
                  <CardContent>
                    <ul className="space-y-3 divide-y">
                      {data?.products?.map((props, index) => {
                        const product = props as Product;
                        return (
                          <li
                            key={`list-${index}`}
                            className="flex items-center gap-4 pb-3"
                          >
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
                            <span>{product.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </Form>
  );
}
