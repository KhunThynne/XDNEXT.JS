"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  CreditCard,
  Building2,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/libs/shadcn/ui/form";
import { Badge } from "@/libs/shadcn/ui/badge";
import { Button } from "@/libs/shadcn/ui/button";
import { Input } from "@/libs/shadcn/ui/input";

import { RadioGroup, RadioGroupItem } from "@/libs/shadcn/ui/radio-group";
import { Label } from "@/libs/shadcn/ui/label";
import { Separator } from "@/libs/shadcn/ui/separator";

// Form schemas for each step
const paymentMethodSchema = z.object({
  paymentMethod: z.enum(["promptpay", "banking"]),
});

const promptpaySchema = z.object({
  cardNumber: z
    .string()
    .min(16, "Card number must be 16 digits")
    .max(19, "Invalid card number"),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date (MM/YY)"),
  cvv: z
    .string()
    .min(3, "CVV must be 3-4 digits")
    .max(4, "CVV must be 3-4 digits"),
  cardholderName: z.string().min(2, "Cardholder name is required"),
});

const bankingSchema = z.object({
  bankName: z.string().min(2, "Bank name is required"),
  accountNumber: z
    .string()
    .min(10, "Account number must be at least 10 digits"),
  accountName: z.string().min(2, "Account holder name is required"),
  routingNumber: z
    .string()
    .min(9, "Routing number must be 9 digits")
    .max(9, "Routing number must be 9 digits"),
});

const billingSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(2, "Full name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  amount: z.string().min(1, "Amount is required"),
});

type PaymentMethodData = z.infer<typeof paymentMethodSchema>;
type promptpayData = z.infer<typeof promptpaySchema>;
type BankingData = z.infer<typeof bankingSchema>;
type BillingData = z.infer<typeof billingSchema>;

export const PaymentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<
    "promptpay" | "banking" | null
  >(null);
  const [formData, setFormData] = useState<{
    paymentMethod?: PaymentMethodData;
    promptpay?: promptpayData;
    banking?: BankingData;
    billing?: BillingData;
  }>({});

  // Forms for each step
  const paymentMethodForm = useForm<PaymentMethodData>({
    resolver: zodResolver(paymentMethodSchema),
  });

  const promptpayForm = useForm<promptpayData>({
    resolver: zodResolver(promptpaySchema),
  });

  const bankingForm = useForm<BankingData>({
    resolver: zodResolver(bankingSchema),
  });

  const billingForm = useForm<BillingData>({
    resolver: zodResolver(billingSchema),
  });

  const steps = [
    {
      number: 1,
      title: "Payment Method",
      description: "Choose your payment option",
    },
    {
      number: 2,
      title: "Payment Details",
      description: "Enter your payment information",
    },
    {
      number: 3,
      title: "Billing Info",
      description: "Complete your billing details",
    },
    { number: 4, title: "Review", description: "Confirm your payment" },
  ];

  const onPaymentMethodSubmit = (data: PaymentMethodData) => {
    setFormData((prev) => ({ ...prev, paymentMethod: data }));
    setPaymentMethod(data.paymentMethod);
    setCurrentStep(2);
  };

  const onPaymentDetailsSubmit = (data: promptpayData | BankingData) => {
    if (paymentMethod === "promptpay") {
      setFormData((prev) => ({ ...prev, promptpay: data as promptpayData }));
    } else {
      setFormData((prev) => ({ ...prev, banking: data as BankingData }));
    }
    setCurrentStep(3);
  };

  const onBillingSubmit = (data: BillingData) => {
    setFormData((prev) => ({ ...prev, billing: data }));
    setCurrentStep(4);
  };

  const onFinalSubmit = () => {
    console.log("Final form data:", formData);
    alert("Payment submitted successfully!");
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  currentStep > step.number
                    ? "bg-primary text-primary-foreground"
                    : currentStep === step.number
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              <div className="mt-2 text-center">
                <div className="text-sm font-medium">{step.title}</div>
                <div className="text-muted-foreground text-xs">
                  {step.description}
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`mx-4 h-px flex-1 ${currentStep > step.number ? "bg-primary" : "bg-muted"}`}
              />
            )}
          </div>
        ))}
      </div>
      <section>
        <p className="font-bold">
          Step {currentStep}: {steps[currentStep - 1].title}
        </p>
        <p className="text-sm font-light">
          {steps[currentStep - 1].description}
        </p>
      </section>

      {/* Step 1: Payment Method Selection */}
      {currentStep === 1 && (
        <Form {...paymentMethodForm}>
          <form
            onSubmit={paymentMethodForm.handleSubmit(onPaymentMethodSubmit)}
            className="space-y-6"
          >
            <FormField
              control={paymentMethodForm.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 gap-4"
                    >
                      <div className="hover:bg-accent flex items-center space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="promptpay" id="promptpay" />
                        <Label
                          htmlFor="promptpay"
                          className="flex flex-1 cursor-pointer items-center gap-3"
                        >
                          <CreditCard className="text-primary h-6 w-6" />
                          <div>
                            <div className="font-medium">
                              promptpay (Credit/Debit Card)
                            </div>
                            <div className="text-muted-foreground text-sm">
                              Pay securely with your credit or debit card
                            </div>
                          </div>
                          <Badge variant="secondary">Instant</Badge>
                        </Label>
                      </div>
                      <div className="hover:bg-accent flex items-center space-x-2 rounded-lg border p-4">
                        <RadioGroupItem value="banking" id="banking" />
                        <Label
                          htmlFor="banking"
                          className="flex flex-1 cursor-pointer items-center gap-3"
                        >
                          <Building2 className="text-primary h-6 w-6" />
                          <div>
                            <div className="font-medium">Bank Transfer</div>
                            <div className="text-muted-foreground text-sm">
                              Direct transfer from your bank account
                            </div>
                          </div>
                          <Badge variant="outline">1-3 days</Badge>
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      )}
      {/* Step 2: Payment Details */}
      {currentStep === 2 && paymentMethod === "promptpay" && (
        <Form {...promptpayForm}>
          <form
            onSubmit={promptpayForm.handleSubmit(onPaymentDetailsSubmit)}
            className="space-y-4"
          >
            <div className="mb-4 flex items-center gap-2">
              <CreditCard className="text-primary h-5 w-5" />
              <span className="font-medium">promptpay Card Details</span>
            </div>

            <FormField
              control={promptpayForm.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={promptpayForm.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={promptpayForm.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={promptpayForm.control}
              name="cardholderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardholder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={goBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button type="submit">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      )}
      {currentStep === 2 && paymentMethod === "banking" && (
        <Form {...bankingForm}>
          <form
            onSubmit={bankingForm.handleSubmit(onPaymentDetailsSubmit)}
            className="space-y-4"
          >
            <div className="mb-4 flex items-center gap-2">
              <Building2 className="text-primary h-5 w-5" />
              <span className="font-medium">Bank Account Details</span>
            </div>

            <FormField
              control={bankingForm.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Bank of America" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={bankingForm.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={bankingForm.control}
              name="routingNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Routing Number</FormLabel>
                  <FormControl>
                    <Input placeholder="123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={bankingForm.control}
              name="accountName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Holder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={goBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button type="submit">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      )}
      {/* Step 3: Billing Information */}
      {currentStep === 3 && (
        <Form {...billingForm}>
          <form
            onSubmit={billingForm.handleSubmit(onBillingSubmit)}
            className="space-y-4"
          >
            <div className="mb-4">
              <h3 className="font-medium">Billing Information</h3>
              <p className="text-muted-foreground text-sm">
                Enter your billing details
              </p>
            </div>

            <FormField
              control={billingForm.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="100.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={billingForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={billingForm.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={billingForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main Street" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={billingForm.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={billingForm.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="10001" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={goBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button type="submit">
                Review <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      )}
      {/* Step 4: Review */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div className="mb-4">
            <h3 className="font-medium">Review Your Payment</h3>
            <p className="text-muted-foreground text-sm">
              Please review your information before submitting
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-medium">Payment Method</h4>
              <div className="flex items-center gap-2">
                {paymentMethod === "promptpay" ? (
                  <>
                    <CreditCard className="h-4 w-4" />
                    <span>promptpay (Credit/Debit Card)</span>
                  </>
                ) : (
                  <>
                    <Building2 className="h-4 w-4" />
                    <span>Bank Transfer</span>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <h4 className="mb-2 font-medium">Payment Details</h4>
              {paymentMethod === "promptpay" && formData.promptpay && (
                <div className="space-y-1 text-sm">
                  <p>
                    Card: **** **** ****{" "}
                    {formData.promptpay.cardNumber.slice(-4)}
                  </p>
                  <p>Cardholder: {formData.promptpay.cardholderName}</p>
                </div>
              )}
              {paymentMethod === "banking" && formData.banking && (
                <div className="space-y-1 text-sm">
                  <p>Bank: {formData.banking.bankName}</p>
                  <p>Account: ****{formData.banking.accountNumber.slice(-4)}</p>
                  <p>Account Holder: {formData.banking.accountName}</p>
                </div>
              )}
            </div>

            {formData.billing && (
              <div className="rounded-lg border p-4">
                <h4 className="mb-2 font-medium">Billing Information</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-lg font-medium">
                    Amount: ${formData.billing.amount}
                  </p>
                  <p>{formData.billing.fullName}</p>
                  <p>{formData.billing.email}</p>
                  <p>{formData.billing.address}</p>
                  <p>
                    {formData.billing.city}, {formData.billing.zipCode}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={goBack}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button
              onClick={onFinalSubmit}
              className="bg-green-600 hover:bg-green-700"
            >
              <Check className="mr-2 h-4 w-4" /> Submit Payment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
