import { TransactionPaymentSection } from "./_components/TransactionPaymentSection";
import { auth } from "@/auth";
import { ButtonGrupPayment } from "./_components/ButtonGrupPayment";
import { SocketProvider } from "@/libs/socket-io/socket";

export default async function PlusPaymentLayout({
  children,
  stripe,
  notification,
  params,
}: LayoutProps<`/[locale]/account/[id]/payment`>) {
  const session = await auth();
  const { id } = await params;
  return (
    <SocketProvider key={id}>
      <ButtonGrupPayment
        payment={stripe}
        dataTable={
          session && (
            <TransactionPaymentSection session={session}>
              {notification}
            </TransactionPaymentSection>
          )
        }
      >
        {children}
      </ButtonGrupPayment>
    </SocketProvider>
  );
}
