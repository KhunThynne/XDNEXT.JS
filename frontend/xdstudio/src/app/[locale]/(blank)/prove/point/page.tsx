import React from "react";
import { FormPoint } from "./components/FormPoint";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";

export default function PagePoint() {
  return (
    <Card className="w-lg mx-auto">
      <CardHeader>
        <h1 className="">Payments</h1>
      </CardHeader>

      <CardContent>
        <FormPoint />
      </CardContent>
    </Card>
  );
}
