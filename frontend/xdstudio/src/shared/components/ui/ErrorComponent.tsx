"use client";
import { Fragment } from "react";

import { Link } from "@navigation";
import { Button } from "../shadcn/button";
import Translations from "@/libs/i18n/Translations";
import Error from "next/error";

export const ErrorComponent = ({
  buttonText,
  description,
  status,
}: {
  status?: string;
  description?: string;
  buttonText?: string;
} & GlobalPropsClassNames) => {
  return (
    <div className="h-full place-content-center place-items-center text-center">
      <h1 className="text-foreground mb-4 text-6xl font-extrabold">
        <Translations text={status ?? "unknown"} ignore />
      </h1>
      <p className="text-muted-foreground mb-6 max-w-md text-lg">
        <Translations text={description ?? "unknown"} />
      </p>
      <Link href="/">
        <Button variant="default">
          <Translations text={buttonText ?? "unknown"} />
        </Button>
      </Link>
    </div>
  );
};
