import { stripe } from "@/libs/stripe/stripe";
import CheckoutForm from "./_components/CheckoutForm";
import { auth } from "@/auth";
import PaymentForm from "./_components/CheckoutForm";
import { cacheTag } from "next/cache";

export default async function PlusPaymentPage() {
  const session = await auth();

  // Create PaymentIntent as soon as the page loads

  if (session)
    return (
      <div id="checkout" className="">
        <PaymentForm session={session} />
      </div>
    );
}
