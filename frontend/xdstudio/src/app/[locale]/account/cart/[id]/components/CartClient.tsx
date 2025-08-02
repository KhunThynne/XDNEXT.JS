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
    <ContainerSection title="Your Shopping Cart">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-6 lg:col-span-2">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground text-sm">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    ฿{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    (฿{item.price.toLocaleString()} each)
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div>
          <Card>
            <CardHeader className="text-lg font-semibold">
              Order Summary
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>฿{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (7%)</span>
                <span>฿{tax.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>฿{total.toLocaleString()}</span>
              </div>

              <Button className="mt-4 w-full">Proceed to Checkout</Button>
              <Button variant="ghost" className="mt-2 w-full text-sm">
                Continue Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ContainerSection>
  );
}
