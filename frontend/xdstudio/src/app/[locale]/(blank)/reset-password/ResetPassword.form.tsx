"use client";

import { Alert, AlertDescription } from "@/libs/shadcn/ui/alert";
import { Button } from "@/libs/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/libs/shadcn/ui/card";
import { Form } from "@/libs/shadcn/ui/form";
import { Input } from "@/libs/shadcn/ui/input";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { error } from "console";
import { CheckCircle, Key, Loader2, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import z from "zod";

const ResetPasswordSchema = z
  .object({
    email: z.string().email("กรุณาใส่อีเมลที่ถูกต้อง"),
    token: z.string().min(6, "โทเค็นต้องมีอย่างน้อย 6 ตัวอักษร"),
    newPassword: z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
    confirmPassword: z.string().min(8, "กรุณายืนยันรหัสผ่าน"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });
type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;

export const ResetPasswordForm = () => {
  const method = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isLoading },
    reset,
  } = method;
  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock success response
      console.log("[v0] Password reset data:", data);

      reset();
    } catch (err) {
    } finally {
    }
  };

  if (isSubmitSuccessful) {
    return (
      <Card className="mx-auto w-full max-w-md shadow-lg">
        <CardContent className="pt-6">
          <div className="space-y-4 text-center">
            <CheckCircle className="text-primary mx-auto h-16 w-16" />
            <h2 className="text-foreground text-2xl font-bold">สำเร็จ!</h2>
            <p className="text-muted-foreground">
              รหัสผ่านของคุณได้รับการรีเซ็ตเรียบร้อยแล้ว
            </p>
            {/* <Button onClick={() => setIsSuccess(false)} className="w-full">
              รีเซ็ตรหัสผ่านอีกครั้ง
            </Button> */}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-foreground text-2xl font-bold">
          รีเซ็ตรหัสผ่าน
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          กรุณากรอกข้อมูลเพื่อรีเซ็ตรหัสผ่านของคุณ
        </p>
      </CardHeader>
      <CardContent>
        <Form {...method}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <InputForm
              id="email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className="w-full"
              //   disabled={isLoading}
            />
            {/* Token Field */}
            <div className="space-y-2">
              <Label
                htmlFor="token"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Key className="h-4 w-4" />
                โทเค็นรีเซ็ต
              </Label>
              <Input
                id="token"
                type="text"
                placeholder="ใส่โทเค็นที่ได้รับทางอีเมล"
                {...register("token")}
                className="w-full"
                disabled={isLoading}
              />
              {errors.token && (
                <p className="text-destructive text-sm">
                  {errors.token.message}
                </p>
              )}
            </div>

            {/* New Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="newPassword"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Lock className="h-4 w-4" />
                รหัสผ่านใหม่
              </Label>
              <InputForm
                id="newPassword"
                type="password"
                placeholder="รหัสผ่านใหม่"
                {...register("newPassword")}
              />
              {errors.newPassword && (
                <p className="text-destructive text-sm">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Lock className="h-4 w-4" />
                ยืนยันรหัสผ่าน
              </Label>
              <InputForm
                id="confirmPassword"
                type="password"
                placeholder="ยืนยันรหัสผ่านใหม่"
                {...register("confirmPassword")}
                className="w-full"
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="bg-primary hover:bg-secondary w-full transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  กำลังรีเซ็ต...
                </>
              ) : (
                "รีเซ็ตรหัสผ่าน"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
