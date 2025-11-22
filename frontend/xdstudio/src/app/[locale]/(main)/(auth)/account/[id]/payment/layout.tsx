import { Separator } from "@/libs/shadcn/ui/separator";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { TransactionPaymentSection } from "./_components/TransactionPaymentSection";
import { auth } from "@/auth";
import { ButtonGroup } from "@/libs/shadcn/ui/button-group";
import { Button } from "@/libs/shadcn/ui/button";
import { List, Wallet } from "lucide-react";
import { ButtonGrupPayment } from "./_components/ButtonGrupPayment";
import { SocketProvider } from "@/libs/socket-io/socket";

export default async function PlusPaymentLayout({
  children,
  stripe,
  notification,
}: LayoutProps<`/[locale]/account/[id]/payment`>) {
  const session = await auth();

  return (
    <SocketProvider>
      <ButtonGrupPayment
        payment={stripe}
        dataTable={
          session && (
            <TransactionPaymentSection
              session={session}
              lastTransactionChildren={notification}
            />
          )
        }
      >
        {children}
      </ButtonGrupPayment>
    </SocketProvider>
  );
}
