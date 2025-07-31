"use client";

import { CodeBlock } from "@/libs/shiki/CodeBlock";
import { Button } from "@/shared/components/shadcn/button";
import { useDialogGallery } from "@/shared/components/ui/ImageGallery";
import clsx from "clsx";

export default function ProvePage() {
  const { openDialog } = useDialogGallery();
  return (
    <section
      id="content-section"
      className={clsx("flex h-full flex-col gap-2 border")}
    >
      <div>
        <CodeBlock lang="ts">
          {[
            `
        import type { BundledLanguage } from "shiki";
        import { codeToHtml } from "shiki";

          interface Props {
            children: string;
            lang: BundledLanguage;
          }
          export async function CodeBlock(props: Props) {
            const out = await codeToHtml(props.children, {
              lang: props.lang,
              theme: "dark-plus",
            });
            return <div dangerouslySetInnerHTML={{ __html: out }} />;
`,
          ].join("\n")}
        </CodeBlock>
      </div>

      <div className={clsx("@container size-1/2 border")}>
        <Button onClick={() => openDialog({ content: "test" })}>Test</Button>
        <div className="@xl:size-80 @md:size-20 @sm:size-10 aspect-square size-8 border" />
      </div>
    </section>
  );
}
