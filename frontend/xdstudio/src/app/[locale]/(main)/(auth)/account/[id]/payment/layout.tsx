import { Separator } from "@/libs/shadcn/ui/separator";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { TransactionCilent } from "./_components/TransactionCilent";

export default async function PlusPaymentLayout({
  children,
  stripe,
}: NextJSReactNodes<"stripe">) {
  return (
    <>
      <ContainerSection
        classNames={{ content: "flex gap-6 max-xl:flex-col" }}
        className="mx-4 grow"
      >
        <section className="relative flex-3 overflow-auto">
          <div className="absolute inset-0 flex flex-col">{stripe}</div>
        </section>
        <Separator orientation="vertical" className="max-xl:hidden" />

        <TransactionCilent />
      </ContainerSection>
      {children}
    </>
  );
}
