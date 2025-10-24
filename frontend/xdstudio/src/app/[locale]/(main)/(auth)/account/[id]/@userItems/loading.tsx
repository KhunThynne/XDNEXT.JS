import { LoadingDots } from "@/shared/components/ui/Loading";

export default function UserProductLoading() {
  return (
    <div className="absolute inset-0 place-content-center place-items-center">
      <LoadingDots />
    </div>
  );
}
