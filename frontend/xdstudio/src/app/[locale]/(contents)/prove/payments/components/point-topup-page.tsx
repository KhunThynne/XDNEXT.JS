"use client";

import type React from "react";

import { useState } from "react";

import { Smartphone, CreditCard, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Badge } from "@/libs/shadcn/ui/badge";

interface PointPackage {
  id: string;
  points: number;
  price: number;
  bonus?: number;
  popular?: boolean;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const pointPackages: PointPackage[] = [
  { id: "1", points: 100, price: 50 },
  { id: "2", points: 500, price: 200, bonus: 50 },
  { id: "3", points: 1000, price: 350, bonus: 150, popular: true },
  { id: "4", points: 2000, price: 650, bonus: 400 },
];

const paymentMethods: PaymentMethod[] = [
  {
    id: "mobile-banking",
    name: "Mobile Banking",
    icon: <Smartphone className="h-6 w-6" />,
    description: "ธนาคารกสิกรไทย, ธนาคารไทยพาณิชย์, ธนาคารกรุงเทพ",
  },
  {
    id: "promptpay",
    name: "PromptPay",
    icon: <CreditCard className="h-6 w-6" />,
    description: "โอนเงินผ่าน QR Code หรือเบอร์โทรศัพท์",
  },
];

export function PointTopupPage() {
  const [step, setStep] = useState<"packages" | "payment" | "confirmation">(
    "packages"
  );
  const [selectedPackage, setSelectedPackage] = useState<PointPackage | null>(
    null
  );
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(
    null
  );

  const handlePackageSelect = (pkg: PointPackage) => {
    setSelectedPackage(pkg);
    setStep("payment");
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method);
    setStep("confirmation");
  };

  const handleConfirm = () => {
    // Handle payment confirmation
    console.log("Processing payment...", { selectedPackage, selectedPayment });
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto max-w-md px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          {step !== "packages" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setStep(step === "confirmation" ? "payment" : "packages")
              }
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <div>
            <h1 className="text-foreground text-2xl font-bold">เติม Point</h1>
            <p className="text-muted-foreground text-sm">
              เลือกแพ็คเกจและวิธีการชำระเงิน
            </p>
          </div>
        </div>

        {/* Step 1: Package Selection */}
        {step === "packages" && (
          <div className="space-y-4">
            <div className="mb-6 text-center">
              <h2 className="text-foreground mb-2 text-lg font-semibold">
                เลือกแพ็คเกจ Point
              </h2>
              <p className="text-muted-foreground text-sm">
                เลือกจำนวน Point ที่ต้องการเติม
              </p>
            </div>

            <div className="grid gap-3">
              {pointPackages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`cursor-pointer border-2 transition-all hover:shadow-md ${
                    pkg.popular
                      ? "border-primary bg-card"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handlePackageSelect(pkg)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-foreground text-lg font-bold">
                            {pkg.points.toLocaleString()} Points
                          </span>
                          {pkg.popular && (
                            <Badge
                              variant="secondary"
                              className="bg-accent text-accent-foreground"
                            >
                              <Star className="mr-1 h-3 w-3" />
                              ยอดนิยม
                            </Badge>
                          )}
                        </div>
                        {pkg.bonus && (
                          <p className="text-primary text-sm font-medium">
                            + โบนัส {pkg.bonus} Points ฟรี!
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-foreground text-xl font-bold">
                          ฿{pkg.price}
                        </div>
                        {pkg.bonus && (
                          <div className="text-muted-foreground text-xs line-through">
                            ฿{Math.round(pkg.price * 1.2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Payment Method Selection */}
        {step === "payment" && selectedPackage && (
          <div className="space-y-4">
            <div className="mb-6 text-center">
              <h2 className="text-foreground mb-2 text-lg font-semibold">
                เลือกวิธีการชำระเงิน
              </h2>
              <p className="text-muted-foreground text-sm">
                {selectedPackage.points.toLocaleString()} Points - ฿
                {selectedPackage.price}
              </p>
            </div>

            <div className="grid gap-3">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className="border-border hover:border-primary/50 cursor-pointer border-2 transition-all hover:shadow-md"
                  onClick={() => handlePaymentSelect(method)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-foreground font-semibold">
                          {method.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === "confirmation" && selectedPackage && selectedPayment && (
          <div className="space-y-6">
            <div className="mb-6 text-center">
              <h2 className="text-foreground mb-2 text-lg font-semibold">
                ยืนยันการชำระเงิน
              </h2>
              <p className="text-muted-foreground text-sm">
                ตรวจสอบรายละเอียดก่อนชำระเงิน
              </p>
            </div>

            <Card className="border-primary/20 border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">
                  รายละเอียดการสั่งซื้อ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Points</span>
                  <span className="font-semibold">
                    {selectedPackage.points.toLocaleString()}
                  </span>
                </div>
                {selectedPackage.bonus && (
                  <div className="text-primary flex items-center justify-between">
                    <span>โบนัส Points</span>
                    <span className="font-semibold">
                      +{selectedPackage.bonus}
                    </span>
                  </div>
                )}
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-foreground">รวม Points ที่ได้รับ</span>
                  <span className="text-primary text-lg font-bold">
                    {(
                      selectedPackage.points + (selectedPackage.bonus || 0)
                    ).toLocaleString()}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-foreground">วิธีการชำระเงิน</span>
                  <span className="font-semibold">{selectedPayment.name}</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="text-foreground font-semibold">ยอดชำระ</span>
                  <span className="text-primary font-bold">
                    ฿{selectedPackage.price}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleConfirm}
              className="bg-primary hover:bg-primary/90 h-12 w-full text-base font-semibold"
            >
              ยืนยันการชำระเงิน ฿{selectedPackage.price}
            </Button>

            <div className="text-center">
              <p className="text-muted-foreground text-xs">
                การชำระเงินจะปลอดภัยและเข้ารหัส
                <br />
                Points จะเข้าสู่บัญชีทันทีหลังชำระเงินสำเร็จ
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
