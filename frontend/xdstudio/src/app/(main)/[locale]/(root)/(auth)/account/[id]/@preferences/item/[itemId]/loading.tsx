import { Skeleton } from "@/shared/libs/shadcn/ui/skeleton";
import { CardContent } from "@/shared/libs/shadcn/ui/card";

export default function Loading() {
  return (
    <div className="contents">
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-50 w-full" />
          <Skeleton className="h-4 w-40" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-10 max-w-xs" />
          <Skeleton className="h-4 w-52" />
        </div>
      </CardContent>
      <div className="p-6 pt-0">
        <section className="place-self-end">
          <Skeleton className="h-10 w-24" />
        </section>
      </div>
    </div>
  );
}
