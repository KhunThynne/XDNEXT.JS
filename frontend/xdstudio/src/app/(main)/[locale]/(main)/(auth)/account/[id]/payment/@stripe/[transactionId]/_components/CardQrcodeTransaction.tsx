"use client";
import {
  Card,
  CardDescription,
  CardContent,
  CardAction,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import _ from "lodash";
import { QrCodePreview } from "../../../_components/QrCodePreview";
import type { FromTypePointTransactionStripe } from "../../../_shared/types/FromTypePointTransactionStripe";
import PaymentExpriedCountDown from "./PaymentExpriedCountDown";
import { useState } from "react";
import { QrCode } from "lucide-react";

export const CardQrcodeTransaction = (
  props: Partial<FromTypePointTransactionStripe> & {
    qrCodeUrl?: string;
    client_secret?: string | null | undefined;
  }
) => {
  const { metaData, createdAt, qrCodeUrl, client_secret, status } = props;
  const [isTimeOut, setIsTimeOut] = useState(false);

  const qrCodeSvgUrl =
    qrCodeUrl ??
    metaData?.next_action?.promptpay_display_qr_code?.image_url_svg;
  if (isTimeOut || status !== "requires_action") {
    return null;
  }
  return (
    <Card className="grow bg-secondary">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-xl text-primary">
          <QrCode className="size-6" />
          <span>Scan to Pay (PromptPay)</span>
        </CardTitle>
        <CardDescription>
          Scan this QR code using your mobile banking application to complete
          the payment.
        </CardDescription>
      </CardHeader>
      {qrCodeSvgUrl && (
        <CardContent className="@container">
          <CardDescription className="rounded-lg p-3">
            <div className="relative mx-auto size-50">
              <QrCodePreview
                image={{
                  src: qrCodeSvgUrl,
                  alt: client_secret ?? metaData?.client_secret ?? "unknown",
                }}
              />
            </div>
          </CardDescription>
        </CardContent>
      )}

      <CardAction className="w-full place-items-center">
        <div className="text-3xl">
          <PaymentExpriedCountDown
            {...props}
            createdAt={createdAt}
            onTimeOut={setIsTimeOut}
          />
        </div>
      </CardAction>
    </Card>
  );
};
