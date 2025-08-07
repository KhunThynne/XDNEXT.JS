import { ContainerSection } from "@/shared/components/ui/ContainerSection";

export default async function LayoutCart({
  children,
  orderList,
}: NextJSReactNodes<"orderList">) {
  return (
    <ContainerSection title="Your Shopping Cart">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-6 lg:col-span-2"> {orderList} </div>
        {/* Summary */}
        {children}
      </div>
    </ContainerSection>
  );
}
