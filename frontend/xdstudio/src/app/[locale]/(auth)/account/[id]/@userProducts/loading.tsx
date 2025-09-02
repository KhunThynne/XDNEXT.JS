import { Loader2 } from "lucide-react";

export default function UserProductLoading() {
  return (
    <div className="absolute inset-0 place-content-center place-items-center">
      <Loader2 className="text-secondary-foreground/50 size-40 animate-spin" />
    </div>
  );
}
