import { Loader2 } from "lucide-react";

export default function RootLoading() {
  return (
    <section className="max-w-xl flex-1 place-content-center place-items-center lg:min-w-xl">
      <Loader2 className="size-40 animate-spin text-secondary-foreground/50" />
    </section>
  );
}
