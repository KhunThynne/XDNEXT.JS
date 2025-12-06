import CartOrdersAction from "./_components/CartOrdersAction";
import { CardCartOrdersSummaryForm } from "./_components/forms/CardCartOrdersSummaryForm";
import { FormOrdersSummary } from "./_components/forms/FormOrdersSummary";

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
