import { Card, CardContent } from "@/libs/shadcn/ui/card";
import Image from "next/image";

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

export default function PageOrderList() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return cartItems.map((item) => (
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
  ));
}
