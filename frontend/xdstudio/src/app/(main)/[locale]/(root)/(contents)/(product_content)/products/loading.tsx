import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";

export default function ContentsProductLoading() {
  return (
    <div className="contents">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="h-90 w-full" />
      ))}
    </div>
  );
}
