"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useI18n } from "@/libs/i18n/hooks/useI18n";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/libs/shadcn/ui/card";
import { ErrorComponent } from "@/shared/components/ui/ErrorComponent";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const t = useI18n();
  const errorMessages: Record<string, string> = {
    AccessDenied: "auth.error.accessDenied",
    Configuration: "auth.error.configuration",
    CredentialsSignin: "auth.error.credentialsSignin",
    Default: "auth.error.default",
  };

  const key = error
    ? errorMessages[error] || errorMessages.Default
    : errorMessages.Default;

  return (
    <div className="flex h-full items-center justify-center">
      <ErrorComponent
        status="403"
        description={key}
        buttonText="common.backToLogin"
      />
    </div>
  );
}
