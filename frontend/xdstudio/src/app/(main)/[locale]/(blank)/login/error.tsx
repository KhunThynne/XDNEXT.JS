"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/libs/shadcn/ui/alert";
import { Button } from "@/shared/libs/shadcn/ui/button";
import { Link } from "@navigation";

interface ErrorResetPasswordProps {
  error: Error & { digest?: string; code?: string };
  reset: () => void;
}

export default function ErrorResetPassword({ error }: ErrorResetPasswordProps) {
  return (
    <Alert className="place-items-center">
      <AlertTitle className="">{error?.name}</AlertTitle>
      <AlertDescription className="">
        {error?.message}
        <Link href="/">
          <Button variant="default">Back to home</Button>
        </Link>
      </AlertDescription>
    </Alert>
  );
}
