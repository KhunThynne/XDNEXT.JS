"use client";

import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Link } from "@navigation";

interface ErrorResetPasswordProps {
  error: Error & { digest?: string; code?: string };
  reset: () => void;
}

export default function ErrorResetPassword({
  error,
  reset,
}: ErrorResetPasswordProps) {
  return (
    <div className="h-screen place-content-center place-items-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>{error?.code ?? `Error`}</CardTitle>
          <CardDescription>
            An error occurred while resetting the password.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <p className="font-medium text-destructive">{error.message}</p>
          <Button variant="default" className="cursor-pointer" onClick={reset}>
            Try again
          </Button>

          <Button variant={"link"} className="cursor-pointer p-0" asChild>
            <Link href={"/"} className="">
              Go to home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
