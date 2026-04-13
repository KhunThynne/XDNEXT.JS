import { Card, CardContent } from "@/shared/libs/shadcn/ui/card";
import { PaymentForm } from "@/shared/components/forms/payment/Payment.form";

import { ContainerSection } from "@/shared/components/ContainerSection";

export default function AddPointPage() {
  return (
    <ContainerSection title="Buy point">
      <Card className="max-w-xl">
        <CardContent>
          <PaymentForm />
        </CardContent>
      </Card>
    </ContainerSection>
  );
}
