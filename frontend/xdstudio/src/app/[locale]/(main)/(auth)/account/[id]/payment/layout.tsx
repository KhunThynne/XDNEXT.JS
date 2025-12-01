import { TransactionPaymentSection } from "./_components/TransactionPaymentSection";
import { auth } from "@/auth";

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
