import { env } from "@/env";
import _ from "lodash";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
const loggedMessages = new Set<string>();
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
      if (
        env.NEXT_PUBLIC_NODE_ENV === "development" &&
        !loggedMessages.has(message)
      ) {
        console.warn("⚠️ Please set messages:", message);
        loggedMessages.add(message);
      }
      return text;
    }

    return t(message);
  }, [has, namespace, t, text]);
  if (!memoText) {
    return;
  }
  return memoText;
}
