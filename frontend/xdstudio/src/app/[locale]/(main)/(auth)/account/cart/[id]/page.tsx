import { CardCartSummary } from "./components/CardCartSummary";
import { CardPromoCodeCartForm } from "./components/CardPromoCodeCartForm";
import CartOrdersAction from "./components/CartOrdersAction";
import { CardCartOrdersSummaryForm } from "./components/forms/CardCartOrdersSummaryForm";
import { CardOrderPointForm } from "./components/forms/CardOrderPointForm";
import { FormOrdersSummary } from "./components/forms/FormOrdersSummary";

export default async function CartOrderPage() {
  return (
    <FormOrdersSummary>
      <CardCartOrdersSummaryForm className="grow" />
      <CardPromoCodeCartForm className="" />
      {/* <CardCartSummary /> */}
      <CartOrdersAction />
    </FormOrdersSummary>
  );
}
