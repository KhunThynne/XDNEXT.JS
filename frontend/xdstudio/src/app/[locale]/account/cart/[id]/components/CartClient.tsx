"use client";

import Image from "next/image";
import clsx from "clsx";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Red Hoodie",
    price: 890,
    quantity: 2,
    imageUrl: "/images/red-hoodie.jpg",
  },
  {
    id: "2",
    name: "Sneakers",
    price: 1500,
    quantity: 1,
    imageUrl: "/images/sneakers.jpg",
  },
];

export function CartClient() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <Card>
      <CardHeader className="text-lg font-semibold">Order Summary</CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>฿tes </span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Tax (7%)</span>
          <span>฿ test</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>฿ test</span>
        </div>

        <Button className="mt-4 w-full">Proceed to Checkout</Button>
        <Button variant="ghost" className="mt-2 w-full text-sm">
          Continue Shopping
        </Button>
      </CardContent>
    </Card>
  );
}
