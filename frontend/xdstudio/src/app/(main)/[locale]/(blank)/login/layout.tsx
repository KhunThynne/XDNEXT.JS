import { Card, CardContent, CardHeader } from "@/shared/libs/shadcn/ui/card";
import { Lock } from "lucide-react";
import clsx from "clsx";

export default async function LayoutLogin({ children }: WithChildren) {
  return (
    <section className="flex min-h-screen place-content-center md:place-items-center">
      <Card
        className={clsx(
          "grow md:max-w-md",
          "max-sm:p-0",
          "max-sm:border-0 max-sm:shadow-none max-sm:ring-0"
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
        <CardContent className="h-full place-content-center">
          {children}
        </CardContent>
      </Card>
    </section>
  );
}
