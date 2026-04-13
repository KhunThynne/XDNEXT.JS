import { env } from "@/env";
import _ from "lodash";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

const loggedMessages = new Set<string>();

export default function Translations({
  text,
  namespace,
  ignore,
}: {
  text: string | undefined;
  namespace?: string;
  ignore?: boolean;
}) {
  const t = useTranslations();
  const { has } = t;

  const memoText = useMemo(() => {
    if (!text) return text;
    const keyPart = text.includes(".") ? text : _.snakeCase(text);
    const message = namespace ? `${namespace}.${keyPart}` : keyPart;
    if (!has(message)) {
      if (
        env.NEXT_PUBLIC_NODE_ENV === "development" &&
        !loggedMessages.has(message)
      ) {
        !ignore && console.warn("⚠️ Please set messages:", message);
        loggedMessages.add(message);
      }
      return text;
    }

    return t(message);
  }, [has, ignore, namespace, t, text]);

  if (!memoText) {
    return null;
  }

  return memoText;
}
