"use client";
import {
  revalidateTagClient,
  updateTagClient,
} from "@/app/[locale]/(main)/(contents)/(product_content)/products/shared/updateTagClient";
import { Button } from "@/libs/shadcn/ui/button";
import { Card, CardContent } from "@/libs/shadcn/ui/card";

export const CardTransactionPointForm = async ({ children }: WithChildren) => {
  return (
    <Card>
      <Button
        onClick={async () => {
          await revalidateTagClient("test-2");
        }}
      >
        Test
      </Button>
      {children}
      <CardContent></CardContent>
    </Card>
  );
};
