"use client";

import type { RedeemUserPasswordResetTokenResultMutation } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Card, CardContent, CardHeader } from "@/libs/shadcn/ui/card";
import { Form } from "@/libs/shadcn/ui/form";
import { Separator } from "@/libs/shadcn/ui/separator";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { useAuthDocument } from "@/shared/hooks/useAuthDocument";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useRouter } from "@navigation";
import _ from "lodash";
import {
  CheckCircle,
  EyeIcon,
  EyeOff,
  Loader2,
  Lock,
  RefreshCw,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import z from "zod";

const ResetPasswordSchema = z
  .object({
    email: z.email("กรุณาใส่อีเมลที่ถูกต้อง"),
    token: z.string().min(6, "โทเค็นต้องมีอย่างน้อย 6 ตัวอักษร"),
    newPassword: z.string().min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
    confirmPassword: z.string().min(8, "กรุณายืนยันรหัสผ่าน"),
    status: z.string().optional(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });
type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;

export type RestFormProps = Pick<ResetPasswordFormData, "email" | "token">;
export const ResetPasswordForm = (props: RestFormProps) => {
  const method = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: { ...props, confirmPassword: "", newPassword: "" },
  });
  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting, isLoading },
  } = method;

  const {
    useRedeemUserPasswordResetTokenResultMutation,
    useSendTokenResetMutation,
  } = useAuthDocument();

  const sendReset = useSendTokenResetMutation();
  const router = useRouter();

  const methodSendReset = useForm();
  const onClickSendAgain = async () => {
    await sendReset
      .mutateAsync(props.email)
      .then((res) => {
        if (res.data.sendUserPasswordResetLink) {
          toast.success(
            `We're send token for reset password to  ${props.email}`
          );
          router.replace("/");
          return;
        }
      })
      .catch((res) => {
        toast.error(res ?? `Can't to send token try again please`);
        return;
      });
  };

  const mutationRedeem = useRedeemUserPasswordResetTokenResultMutation();
  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      const res = await mutationRedeem.mutateAsync({
        email: data.email,
        password: data.newPassword,
        token: data.token,
      });

      if (res.data.redeemUserPasswordResetToken?.code) {
        throw res.data.redeemUserPasswordResetToken;
      }
      router.replace("/");
    } catch (e) {
      const err =
        e as RedeemUserPasswordResetTokenResultMutation["redeemUserPasswordResetToken"];
      setError("status", {
        type: "server",
        message: err?.message ?? "Unknown error",
      });

      toast.error(
        <span>
          {err?.code ?? `Unknow`}{" "}
          <p className="text-destructive">{err?.message ?? `error.`}</p>
        </span>
      );
    }
  };
  const [hidePasswordAndConfirm, setHidePasswordAndConfirm] = useState(false);
  const fields: ("newPassword" | "confirmPassword")[] = [
    "newPassword",
    "confirmPassword",
  ];
  const buttonMute = fields.some((f) => !method.watch(f));
  return (
    <Card className="mx-auto w-full max-w-md shadow-lg">
      <CardHeader className="space-y-2 text-center">
        <div className="flex flex-col items-center gap-2">
          {/* Icon แสดงหัวข้อ */}

          {/* Title */}
          <h2 className="text-xl font-semibold">รีเซ็ตรหัสผ่าน</h2>

          {/* Description */}
          <p className="text-muted-foreground flex items-center gap-1 text-sm">
            <Lock className="h-4 w-4" />
            กรุณากรอกข้อมูลเพื่อรีเซ็ตรหัสผ่านของคุณ
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...method}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            {/* Email Field */}
            {/* Token Field */}
            <div className="flex gap-3">
              <InputForm
                id="email"
                type="email"
                label="Email"
                placeholder="your@email.com"
                name="email"
                disabled
                className="flex-2"
              />
              <InputForm className="flex-1" type="text" name="token" disabled />
            </div>
            <Separator className="my-3" />
            <div className="flex items-center gap-3">
              <section className="my-auto flex-1 space-y-3">
                <InputForm
                  id="newPassword"
                  type={hidePasswordAndConfirm ? "text" : "password"}
                  name="newPassword"
                  placeholder="New password"
                  control={method.control}
                  classNames={{ container: "gap-2" }}
                />
                <InputForm
                  id="confirmPassword"
                  type={hidePasswordAndConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  control={method.control}
                  classNames={{ container: "gap-2" }}
                />
              </section>

              <aside className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="z-0"
                  type="button"
                  onClick={() => setHidePasswordAndConfirm((pre) => !pre)}
                >
                  {!hidePasswordAndConfirm ? <EyeOff /> : <EyeIcon />}
                </Button>
              </aside>
            </div>
            <Separator className="my-2" />
            <section className="flex flex-col gap-3">
              <Button
                type="submit"
                className="grow cursor-pointer"
                disabled={
                  buttonMute || !!errors.status?.message || isSubmitting
                }
              >
                {isLoading ? (
                  <>
                    <Loader2 />
                    กำลังรีเซ็ต...
                  </>
                ) : (
                  <>
                    <RefreshCw className="" />
                    รีเซ็ตรหัสผ่าน
                  </>
                )}
              </Button>
            </section>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
