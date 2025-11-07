"use client";

import { useForm } from "@tanstack/react-form";

import { z } from "zod";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Button } from "@/libs/shadcn/ui/button";
import { Input } from "@/libs/shadcn/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

const pointPackages = [
  { id: "starter", name: "Starter", points: 100, price: 9.99 },
  { id: "pro", name: "Pro", points: 500, price: 39.99 },
  { id: "elite", name: "Elite", points: 1000, price: 69.99 },
  { id: "ultimate", name: "Ultimate", points: 2500, price: 149.99 },
];

const validationSchema = z.object({
  packageId: z.string().min(1, "Please select a point package"),
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, "Format must be MM/YY"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3-4 digits"),
});

type FormData = z.infer<typeof validationSchema>;

export function AddPointsForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<
    (typeof pointPackages)[0] | null
  >(null);

  const form = useForm({
    defaultValues: {
      packageId: "",
      email: "",
      fullName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validators: {
      onSubmit: validationSchema,
    },
    onSubmit: async (values) => {
      console.log("Form submitted:", values);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
        setSelectedPackage(null);
      }, 3000);
    },
  });

  const handlePackageChange = (packageId: string) => {
    const pkg = pointPackages.find((p) => p.id === packageId);
    setSelectedPackage(pkg || null);
    form.setFieldValue("packageId", packageId);
  };

  const selectedPkgData = selectedPackage || pointPackages[0];

  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Form Section */}
        <div className="md:col-span-2">
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-md">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-2xl text-white">
                Add Points to Your Account
              </CardTitle>
              <CardDescription className="text-slate-400">
                Choose a package and complete your payment
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                {/* Package Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-white">
                    Select Point Package
                  </label>
                  {/* <form.Field
                    name="packageId"
                    children={(field) => (
                      <div>
                        <Select
                          value={field.state.value}
                          onValueChange={handlePackageChange}
                        >
                          <SelectTrigger className="border-slate-600 bg-slate-700 text-white">
                            <SelectValue placeholder="Choose a package" />
                          </SelectTrigger>
                          <SelectContent className="border-slate-600 bg-slate-700">
                            {pointPackages.map((pkg) => (
                              <SelectItem
                                key={pkg.id}
                                value={pkg.id}
                                className="text-white"
                              >
                                {pkg.name} - {pkg.points} points ($
                                {pkg.price.toFixed(2)})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {field.state.meta.errors && (
                          <p className="mt-1 text-sm text-destructive">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}
                </div>

                {/* Personal Information */}
                <div className="space-y-4 border-t border-slate-700 pt-4">
                  <h3 className="text-sm font-semibold text-white">
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* <form.Field
                      name="fullName"
                      children={(field) => (
                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-300">
                            Full Name
                          </label>
                          <Input
                            placeholder="John Doe"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-500"
                          />
                          {field.state.meta.errors && (
                            <p className="mt-1 text-xs text-destructive">
                              {field.state.meta.errors[0]}
                            </p>
                          )}
                        </div>
                      )}
                    /> */}

                    {/* <form.Field
                      name="email"
                      children={(field) => (
                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-300">
                            Email
                          </label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="border-slate-600 bg-slate-700 text-white placeholder:text-slate-500"
                          />
                          {field.state.meta.errors && (
                            <p className="mt-1 text-xs text-destructive">
                              {field.state.meta.errors[0]}
                            </p>
                          )}
                        </div>
                      )}
                    /> */}
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4 border-t border-slate-700 pt-4">
                  <h3 className="text-sm font-semibold text-white">
                    Payment Information
                  </h3>

                  {/* <form.Field
                    name="cardNumber"
                    children={(field) => (
                      <div>
                        <label className="mb-1 block text-xs font-medium text-slate-300">
                          Card Number
                        </label>
                        <Input
                          placeholder="1234 5678 9012 3456"
                          value={field.state.value}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\s+/g, "");
                            field.handleChange(value);
                          }}
                          maxLength={16}
                          className="border-slate-600 bg-slate-700 font-mono text-white placeholder:text-slate-500"
                        />
                        {field.state.meta.errors && (
                          <p className="mt-1 text-xs text-destructive">
                            {field.state.meta.errors[0]}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}

                  <div className="grid grid-cols-2 gap-4">
                    {/* <form.Field
                      name="expiryDate"
                      children={(field) => (
                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-300">
                            Expiry Date (MM/YY)
                          </label>
                          <Input
                            placeholder="12/25"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            maxLength={5}
                            className="border-slate-600 bg-slate-700 font-mono text-white placeholder:text-slate-500"
                          />
                          {field.state.meta.errors && (
                            <p className="mt-1 text-xs text-destructive">
                              {field.state.meta.errors[0]}
                            </p>
                          )}
                        </div>
                      )}
                    /> */}

                    {/* <form.Field
                      name="cvv"
                      children={(field) => (
                        <div>
                          <label className="mb-1 block text-xs font-medium text-slate-300">
                            CVV
                          </label>
                          <Input
                            type="password"
                            placeholder="123"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            maxLength={4}
                            className="border-slate-600 bg-slate-700 font-mono text-white placeholder:text-slate-500"
                          />
                          {field.state.meta.errors && (
                            <p className="mt-1 text-xs text-destructive">
                              {field.state.meta.errors[0]}
                            </p>
                          )}
                        </div>
                      )}
                    /> */}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitted}
                    className="h-12 w-full bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold text-white hover:from-blue-700 hover:to-cyan-700"
                  >
                    {isSubmitted ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Payment Processing...
                      </div>
                    ) : (
                      `Complete Payment - $${selectedPkgData.price.toFixed(2)}`
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card className="sticky top-4 border-slate-700 bg-slate-800/50 backdrop-blur-md">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-lg text-white">
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <p className="text-sm text-slate-400">Selected Package</p>
                <p className="text-xl font-bold text-white">
                  {selectedPkgData.name}
                </p>
                <p className="text-sm text-cyan-400">
                  {selectedPkgData.points.toLocaleString()} Points
                </p>
              </div>

              <div className="space-y-3 border-t border-slate-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-medium text-white">
                    ${selectedPkgData.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Tax</span>
                  <span className="font-medium text-white">
                    ${(selectedPkgData.price * 0.1).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-700 pt-3">
                  <span className="font-semibold text-white">Total</span>
                  <span className="text-xl font-bold text-cyan-400">
                    ${(selectedPkgData.price * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 rounded bg-slate-700/30 p-3 pt-4 text-xs text-slate-400">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                <span>
                  Your points will be added immediately after successful payment
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
