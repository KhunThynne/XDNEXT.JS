"use client";
import { useTranslations } from "next-intl";
import type { FC } from "react";

const handleReload = () => {
  window.location.assign(window.location.origin);
};
export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
export const AppFallback: FC<ErrorFallbackProps> = ({ error }) => {
  const t = useTranslations("sys");
  return (
    <div
      className={
        "mx-auto flex h-full max-w-screen-lg items-center justify-center"
      }
    >
      <div className="content">
        <div className="flex gap-2">
          <p className={"text-2xl"}>🚨</p>
          <p className={"text-2xl"}>{t("warning")}</p>
        </div>
        <div>
          <p className="my-5 font-light">{error.message}</p>
          <p
            className="link inline-block cursor-pointer"
            onClick={handleReload}
          >
            {t("reload")}
          </p>
        </div>
      </div>
    </div>
  );
};
