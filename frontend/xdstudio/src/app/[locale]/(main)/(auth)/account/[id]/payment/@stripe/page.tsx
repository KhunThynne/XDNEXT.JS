import { auth } from "@/auth";
import { PaymentForm } from "../_components/PaymentForm";

export default async function PlusPaymentPage() {
  // Create PaymentIntent as soon as the page loads
  const session = await auth();
  return <> {session && <PaymentForm session={session} />}</>;
}
