import { Spinner } from "@/libs/shadcn/ui/spinner";

export default function PaymentLoading() {
  return (
    <div className="h-full place-content-center place-items-center border">
      <Spinner className="size-16" />
    </div>
  );
}
