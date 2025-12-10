import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import _ from "lodash";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";
import { CardQrcodeTransaction } from "./CardQrcodeTransaction";
import { CardTransactionSummary } from "./CardTransactionSummary";
import { CardCustomerInformation } from "./CardCustomerInformation";
import { ShieldCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/libs/shadcn/ui/alert";
export const DetailPointTransactionForm = ({
  form,
}: {
  form: FromTypePointTransactionStripe;
}) => {
  return (
    <form className="contents">
      <ContainerSection
        className="w-full"
        classNames={{ content: "space-y-6" }}
      >
        <div className="flex gap-6 @max-2xl:flex-col">
          <CardQrcodeTransaction {...form} />
          <CardTransactionSummary {...form} />
        </div>
        {/* <section className="flex flex-col gap-6 @md:flex-row">
          <CardCustomerInformation {...form} />
          <Alert className="h-fit flex-4">
            <ShieldCheck />
            <AlertTitle className="">Secure Transaction</AlertTitle>
            <AlertDescription className="">
              This payment was processed securely with 256-bit encryption.
            </AlertDescription>
          </Alert>
        </section> */}
      </ContainerSection>
    </form>
  );
};
