"use client";

import { EyeIcon, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ZSignInSchema } from "./auth.zod";
import { OAuthLoginButtonsGrupe } from "./OAuthLoginButtonsGrupe.component";
import { Button } from "@/libs/shadcn/ui/button";

import { useSearchParams } from "next/navigation";
import { authenticate } from "./actions/Login.action";
import { useAppForm } from "@/libs/shadcn/libs/tanstack-react-form";
import { revalidateLogic, useStore } from "@tanstack/react-form";
import { InputGroupAddon } from "@/libs/shadcn/ui/input-group";

export const SignFormNew = () => {
  const form = useAppForm({
    defaultValues: {
      password: "",
      email: "",
    },
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: ZSignInSchema,
    },
    onSubmit: async ({ value }) => {
      await authenticate("", {
        redirectTo: callbackUrl,
        ...value,
      }).then((res) => {
        if (res) {
          toast.error(String(res));
          return;
        }
      });
    },
  });
  const store = useStore(form.store, (state) => state);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "";
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <header className="space-y-2 text-center">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-primary">
          <Lock className="size-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
        <p className="text-muted-foreground">
          Sign in to your account to continue
        </p>
      </header>
      <form.AppField
        name="email"
        children={(field) => {
          return (
            <field.Input
              label={
                <section className="flex items-center gap-2">
                  <Mail className="size-4 self-center text-muted-foreground" />
                  Email
                </section>
              }
              name="email"
              type="email"
              className="relative"
              //   classNames={{ container: "gap-3" }}
              placeholder="Enter your email address"
              description="Please enter a valid email address (e.g. name@example.com)."
            />
          );
        }}
      />

      <form.AppField
        name="password"
        children={(field) => {
          return (
            <field.Input
              groupe
              label={
                <section className="flex items-center gap-2">
                  <Lock className="size-4 self-center text-muted-foreground" />
                  Password
                </section>
              }
              name="password"
              type={hidePassword ? "text" : "password"}
              description="Password must be 6-10 characters, include uppercase and number."
              placeholder="Enter your password"
              maxLength={20}
            >
              <InputGroupAddon align="inline-end">
                <Button
                  variant={"ghost"}
                  size="icon"
                  type="button"
                  onClick={() => setHidePassword((pre) => !pre)}
                >
                  {!hidePassword ? <EyeOff /> : <EyeIcon />}
                </Button>
              </InputGroupAddon>
            </field.Input>
          );
        }}
      />

      <form.AppForm>
        <section className="flex flex-col">
          <Button disabled={store.isSubmitting}>Login</Button>
          <OAuthLoginButtonsGrupe className="mt-5" callbackUrl={callbackUrl} />
        </section>
      </form.AppForm>
    </form>
  );
};
