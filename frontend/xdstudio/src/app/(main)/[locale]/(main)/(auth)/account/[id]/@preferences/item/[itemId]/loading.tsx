import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <section className="max-w-lg flex-1 place-content-center place-items-center lg:min-w-lg">
      <Loader2 className="size-40 animate-spin text-secondary-foreground/50" />
    </section>
  );
}
