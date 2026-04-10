import CartOrdersAction from "./_shared/_components/CartOrdersAction";
import { CardCartOrdersSummaryForm } from "./_shared/_components/forms/CardCartOrdersSummaryForm";
import { FormOrdersSummary } from "./_shared/_components/forms/FormOrdersSummary";

export default async function CartOrderPage() {
  return (
    <FormOrdersSummary>
      <CardCartOrdersSummaryForm className="grow" />
      {/* <CardPromoCodeCartForm className="" /> */}
      {/* <CardCartSummary /> */}
      <CartOrdersAction />
    </FormOrdersSummary>
  );
}
