import Image from "next/image";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/libs/shadcn/ui/popover";
import { ShoppingBag } from "lucide-react";
import { Link } from "@navigation";

const ShoppingCount = () => {
  return (
    <div className="bg-primary text-secondary absolute flex size-3 -translate-y-2 translate-x-2 items-center justify-center rounded-full">
      <small className="text-[0.5rem]">1</small>
    </div>
  );
};

const OrderItem = ({
  name,
  image,
  qty,
  price,
}: {
  name: string;
  image: string;
  qty: number;
  price: number;
}) => (
  <div className="flex items-center gap-3 border-b py-2 last:border-b-0">
    <div className="relative size-12 overflow-hidden rounded">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-muted-foreground text-xs">
        {qty} × ฿{price.toFixed(2)}
      </p>
    </div>
    <div className="text-sm font-semibold">฿{(qty * price).toFixed(2)}</div>
  </div>
);

export const ShoppingPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="group relative">
          <ShoppingBag />
          <ShoppingCount />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="max-h-[400px] w-[300px] space-y-4 overflow-auto p-4"
      >
        <h4 className="text-sm font-semibold">รายการของคุณ</h4>

        <div className="space-y-2">
          {/* ตัวอย่างรายการ */}
          <OrderItem
            name="เสื้อยืดสีขาว"
            image="/images/item1.jpg"
            qty={1}
            price={299}
          />
          <OrderItem
            name="รองเท้าแตะ"
            image="/images/item2.jpg"
            qty={2}
            price={199}
          />
        </div>

        <div className="flex justify-between border-t pt-2 text-sm font-semibold">
          <span>รวม</span>
          <span>฿697.00</span>
        </div>

        <Button className="w-full" size="sm" variant="default" asChild>
          <Link href={`/account/cart/${`teets`}`}> Go to cart. </Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
