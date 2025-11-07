import { Loader2 } from "lucide-react";

export default function RootLoading() {
  return (
    <section className="max-w-xl grow place-content-center place-items-center">
      <Loader2 className="size-40 animate-spin text-secondary-foreground/50" />
    </section>
  );
}
