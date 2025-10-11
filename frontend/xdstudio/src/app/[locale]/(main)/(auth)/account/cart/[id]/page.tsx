import { CardCartSummary } from "./components/CardCartSummary";
import CartOrdersAction from "./components/CartOrdersAction";
import { CardCartOrdersSummaryForm } from "./components/forms/CardCartOrdersSummaryForm";
import { CardOrderPointForm } from "./components/forms/CardOrderPointForm";
import { FormOrdersSummary } from "./components/forms/FormOrdersSummary";

export default async function CartOrderPage() {
  return (
    <FormOrdersSummary>
      <CardOrderPointForm className="" />

      <CardCartOrdersSummaryForm className="" />

      <CardCartSummary />
      <CartOrdersAction />
    </FormOrdersSummary>
  );
}
