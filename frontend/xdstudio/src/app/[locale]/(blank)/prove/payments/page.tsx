import React from "react";
import QRPaymentDecoderDemo from "./components/SlipDecode";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/libs/shadcn/ui/tabs";

// shadcn/ui Tabs (assumes you have the shadcn tabs component at this path)

export default function PagePaymentsTabs() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Payments</h1>

      <Tabs defaultValue="generate" className="rounded-2xl bg-white p-4 shadow">
        <div className="mb-4 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="generate">Generate QR</TabsTrigger>
            <TabsTrigger value="decode">Decode Slip</TabsTrigger>
          </TabsList>
        </div>

        <div>
          <TabsContent value="generate">
            <div className="space-y-4">{/* <PromptPayQRPage /> */}</div>
          </TabsContent>

          <TabsContent value="decode">
            <div className="space-y-4">
              <QRPaymentDecoderDemo />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
