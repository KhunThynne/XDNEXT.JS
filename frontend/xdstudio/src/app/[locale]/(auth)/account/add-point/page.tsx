import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { PaymentForm } from "../[id]/@payment/components/Payment.form";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";

export default function AddPointPage() {
  return (
    <ContainerSection title="Buy point">
      <Card className="max-w-5xl">
        <CardContent>
          <PaymentForm />
        </CardContent>
      </Card>
    </ContainerSection>
  );
}
