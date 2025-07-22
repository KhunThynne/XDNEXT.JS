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
// Mock product list (จริง ๆ คุณอาจจะ fetch มาจาก API)
const productOptions = [
  {
    id: "prod_a",
    name: "Product A",
    imageUrl: "/images/product-a.jpg",
  },
  {
    id: "prod_b",
    name: "Product B",
    imageUrl: "/images/product-b.jpg",
  },
  {
    id: "prod_c",
    name: "Product C",
    imageUrl: "/images/product-c.jpg",
  },
  {
    id: "prod_d",
    name: "Product D",
    imageUrl: "/images/product-d.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },

  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
  {
    id: "prod_e",
    name: "Product E",
    imageUrl: "/images/product-e.jpg",
  },
];

type PurchasedProductsForm = {
  email: string;
  name: string;
  username: string;
  providers: string;
  image: string;
  role: string;
  password: string;
  product_id: string[];
};

export default function PurchasedProductsForm() {
  const method = useForm<PurchasedProductsForm>({
    defaultValues: {
      providers: "Credential",
      product_id: [],
    },
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

      <form className="mt-3 space-y-4">
        <AnimatePresence mode="wait">
          {styleForm === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="xs:grid-cols-3 grid grid-cols-2 gap-3 lg:grid-cols-4"
            >
              {productOptions.map((product, index) => (
                <CardProduct
                  key={`grid-${index}`}
                  className="max-w-full"
                  product={{ href: `${pathname}/config`, ...product }}
                />
              ))}
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
                    {productOptions.map((product, index) => (
                      <li
                        key={`list-${index}`}
                        className="flex items-center gap-4 pb-3"
                      >
                        <div className="size-15 relative aspect-square overflow-hidden rounded-lg border bg-gray-100">
                          <Image
                            src={product?.imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover"
                            fill
                          />
                        </div>
                        <span>{product.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Form>
  );
}
