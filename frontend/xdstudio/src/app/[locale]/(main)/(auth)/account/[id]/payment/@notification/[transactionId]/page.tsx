import NotificationPage from "../page";

export default async function NotificationTransactionIdPage(
  props: PageProps<"/[locale]/account/[id]/payment/[transactionId]">
) {
  return <NotificationPage {...props} />;
}
