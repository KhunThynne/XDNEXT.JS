import { Card, CardContent, CardHeader } from "@/shared/libs/shadcn/ui/card";
import { Lock } from "lucide-react";
import clsx from "clsx";

export default async function LayoutLogin({ children }: WithChildren) {
  return (
    <section className="flex min-h-screen place-content-center md:place-items-center">
      <Card
        className={clsx(
          "grow justify-center max-md:border-0 max-md:bg-inherit md:max-w-md"
        )}
      >
        <CardHeader className="space-y-2 text-center">
          <div className="bg-primary mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl">
            <Lock className="text-primary-foreground size-8" />
          </div>
          <h1 className="text-foreground text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </CardHeader>
        <CardContent className="place-content-center max-w-md mx-auto">{children}</CardContent>
      </Card>
    </section>
  );
}
