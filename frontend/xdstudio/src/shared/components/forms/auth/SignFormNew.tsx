"use client";

import { EyeIcon, EyeOff, Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ZSignInSchema } from "./auth.zod";
import { OAuthLoginButtonsGrupe } from "./OAuthLoginButtonsGrupe.component";
import { Button } from "@/shared/libs/shadcn/ui/button";

import { useSearchParams } from "next/navigation";
import { signIn } from "./actions/Login.action";
import { useAppForm } from "@/shared/hooks/useAppForm";
import { revalidateLogic, useStore } from "@tanstack/react-form";
import { InputGroupAddon } from "@/shared/libs/shadcn/ui/input-group";
import { FieldGroup, FieldSet } from "@/shared/libs/shadcn/ui/field";

export const SignFormNew = ({
  searchParams,
}: {
  searchParams: { error: string; callbackUrl: string };
}) => {
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
      await signIn("credentials", {
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
  useEffect(() => {
    if (searchParams.error) {
      toast.error(searchParams.error);
    }
  }, [searchParams.error]);
  const store = useStore(form.store, (state) => state);
  const callbackUrl = searchParams.callbackUrl || "/";
  const [hidePassword, setHidePassword] = useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
 
      <FieldSet>
        <form.AppField
          name="email"
          children={(field) => {
            return (
              <field.Input
                label={
                  <section className="flex items-center gap-2">
                    <Mail className="text-muted-foreground size-4 self-center" />
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
                    <Lock className="text-muted-foreground size-4 self-center" />
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
      </FieldSet>
      <form.AppForm>
        <section className="flex flex-col">
          <Button disabled={store.isSubmitting}>Login</Button>
          <fieldset disabled={!!searchParams.error}>
            <OAuthLoginButtonsGrupe
              className="mt-5"
              callbackUrl={callbackUrl}
            />
          </fieldset>
        </section>
      </form.AppForm>
    </form>
  );
};
