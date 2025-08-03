"use client";

import { Card, CardContent } from "@/libs/shadcn/ui/card";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { Form } from "@/libs/shadcn/ui/form";
import { Button } from "@/libs/shadcn/ui/button";

import { CheckboxForm } from "@/shared/components/ui/form/CheckBoxForm";
import clsx from "clsx";
import { Heart, Minus, Trash } from "lucide-react";
import { Separator } from "@/libs/shadcn/ui/separator";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { Checkbox } from "@/libs/shadcn/custtom/checkbox";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  selected: boolean;
};

type FormValues = {
  cartItems: CartItem[];
};

const defaultItems: CartItem[] = [
  {
    id: "1",
    name: "Red Hoodie",
    price: 890,
    quantity: 2,
    imageUrl: "/images/red-hoodie.jpg",
    selected: true,
  },
  {
    id: "2",
    name: "Sneakers",
    price: 1500,
    quantity: 1,
    imageUrl: "/images/sneakers.jpg",
    selected: true,
  },
];

export const OrdersForm = () => {
  const method = useForm<FormValues>({
    defaultValues: {
      cartItems: defaultItems,
    },
  });
  const { control, watch, setValue } = method;
  const { fields, remove } = useFieldArray({
    control,
    name: "cartItems",
  });

  const cartItems = watch("cartItems");
  const selectedItems = cartItems.filter((item) => item.selected);

  const allChecked = cartItems.every((item) => item.selected);
  const someChecked = cartItems.some((item) => item.selected);
  const handleToggleAll = (checked: boolean) => {
    cartItems.forEach((_, index) => {
      setValue(`cartItems.${index}.selected`, checked);
    });
  };

  const subtotal = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  return (
    <Form {...method}>
      <ContainerSection
        title="Orders"
        classNames={{ separator: "hidden" }}
        description={
          <section className="flex items-center gap-2">
            <CheckboxForm
              name={""}
              disabled={cartItems.length < 1}
              checked={cartItems.length < 1 ? false : allChecked || someChecked}
              onCheckedChange={(val) => {
                handleToggleAll(!!val);
              }}
              {...(allChecked
                ? {}
                : { indicator: <Minus className="size-3.5" /> })}
              data-state={clsx({
                checked: allChecked,
                indeterminate: !allChecked && someChecked,
                unchecked:
                  (!allChecked && !someChecked) || cartItems.length < 1,
              })}
            />
          </section>
        }
      >
        <ul className="divide-y">
          {fields.map((item, index) => {
            const selected = watch(`cartItems.${index}.selected`);
            return (
              <li key={item.id} className={clsx("flex items-center gap-5 p-4")}>
                <CheckboxForm
                  label="TESTSS"
                  description="ascasas"
                  control={control}
                  name={`cartItems.${index}.selected`}
                />
                <div className="size-10 rounded-md border px-3" />
                <div className="grow px-3">
                  <p className="font-medium">{item.name}</p>
                </div>
                <div className="px-3 text-right">
                  <p className="font-medium">
                    ฿{(item.price * cartItems[index].quantity).toLocaleString()}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    (฿{item.price.toLocaleString()} each)
                  </p>
                </div>

                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => remove(index)}
                >
                  <Trash />
                </Button>
              </li>
            );
          })}
        </ul>
      </ContainerSection>
    </Form>
  );
};
