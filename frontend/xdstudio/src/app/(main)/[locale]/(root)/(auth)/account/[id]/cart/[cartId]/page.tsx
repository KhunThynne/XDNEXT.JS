import { CardCartOrdersSummary } from "./_shared/_components/CardCartOrdersSummary";
import CartOrdersAction from "./_shared/_components/CartOrdersAction";

import { FormOrdersSummary } from "./_shared/_components/forms/FormOrdersSummary";

export default async function CartOrderPage() {
  return (
    <FormOrdersSummary>
      <CardCartOrdersSummary className="grow" />
      {/* <CardPromoCodeCartForm className="" /> */}
      {/* <CardCartSummary /> */}
      <CartOrdersAction />
    </FormOrdersSummary>
  );
}
