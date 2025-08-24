import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export async function CodeBlock(props: Props) {
  const rawHtml = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "dark-plus",
  });
  const cleanedHtml = rawHtml.replace(
    /(<pre[^>]*) style="[^"]*"([^>]*>)/,
    "$1$2"
  );

  return <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />;
}
