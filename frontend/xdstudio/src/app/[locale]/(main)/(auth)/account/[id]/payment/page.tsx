import { stripe } from "@/libs/stripe/stripe";
import CheckoutForm from "./_components/CheckoutForm";
import { auth } from "@/auth";

export default async function PlusPaymentPage() {
  const session = await auth();
  const calculateOrderAmount = (items: any) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

  // Create PaymentIntent as soon as the page loads
  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: calculateOrderAmount([{ id: "xl-tshirt" }]),
    currency: "thb",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    // automatic_payment_methods: {
    //   enabled: true,
    // },
    payment_method_types: ["promptpay"],
  });
  if (clientSecret)
    return (
      <div id="checkout" className="">
        <CheckoutForm clientSecret={clientSecret} />
      </div>
    );
}
