import { env } from "@/env";
import _ from "lodash";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Translations({
  text,
  namespace,
}: {
  text: string | undefined;
  namespace?: string;
}) {
  const t = useTranslations();
  const { has } = t;
  const memoText = useMemo(() => {
    const snakeText = _.snakeCase(text);
    const message = namespace ? `${namespace}.${snakeText}` : snakeText;
    if (!has(message)) {
      env.NEXT_PUBLIC_NODE_ENV === "development" &&
        console.warn("Plese set messages", message);
      return text;
    }

    return t(message);
  }, [has, namespace, t, text]);
  if (!memoText) {
    return;
  }
  return memoText;
}
