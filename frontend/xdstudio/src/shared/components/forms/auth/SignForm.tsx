"use client";
import { useForm } from "react-hook-form";
import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { createDialog } from "@/libs/dialog/createDialog";
import { EyeIcon, EyeOff, Lock, LogInIcon, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { InputForm } from "../../ui/form/InputForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZSignInSchema } from "./auth.zod";
import { OAuthLoginButtonsGrupe } from "./OAuthLoginButtonsGrupe.component";
import { usePathname } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";
import { Button } from "@/libs/shadcn/ui/button";

import { useSearchParams } from "next/navigation";
import { authenticate } from "./actions/Login.action";

export const SignForm = () => {
  const method = useForm({
    resolver: zodResolver(ZSignInSchema),
    defaultValues: { password: "", email: "" },
  });
  const searchParams = useSearchParams();
  const { formState } = method;
  const callbackUrl = searchParams.get("callbackUrl") ?? "";
  const [hidePassword, setHidePassword] = useState(false);
  const onSubmit = method.handleSubmit(async (data) => {
    await authenticate("", {
      redirectTo: callbackUrl,
      ...data,
    }).then((res) => {
      if (res) {
        toast.error(String(res));
        return;
      }
    });
  });
  return (
    <Form {...method}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        {/* <div className="bg-primary-foreground mx-auto aspect-square w-full max-w-60 rounded-full border" /> */}
        <header className="space-y-2 text-center">
          <div className="bg-primary mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl">
            <Lock className="text-primary-foreground size-8" />
          </div>
          <h1 className="text-foreground text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </header>
        <InputForm
          label={
            <section className="flex items-center gap-2">
              <Mail className="text-muted-foreground size-4 self-center" />
              Email
            </section>
          }
          control={method.control}
          name="email"
          type="email"
          className="relative"
          classNames={{ container: "gap-3" }}
          placeholder="Enter your email address"
          description="Please enter a valid email address (e.g. name@example.com)."
        ></InputForm>

        <InputForm
          label={
            <section className="flex items-center gap-2">
              <Lock className="text-muted-foreground size-4 self-center" />
              Password
            </section>
          }
          control={method.control}
          name="password"
          type={hidePassword ? "text" : "password"}
          description="Password must be 6-10 characters, include uppercase and number."
          classNames={{ container: "gap-2" }}
          placeholder="Enter your password"
          maxLength={20}
          // pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$"
        >
          <Button
            variant={"outline"}
            size="icon"
            type="button"
            onClick={() => setHidePassword((pre) => !pre)}
          >
            {!hidePassword ? <EyeOff /> : <EyeIcon />}
          </Button>
        </InputForm>
        <section className="flex flex-col">
          <Button disabled={formState.isSubmitting}>Login</Button>
          <OAuthLoginButtonsGrupe className="mt-5" callbackUrl={callbackUrl} />
        </section>
      </form>
    </Form>
  );
};

export const useSignDialog = createHookDialog({
  title: "Sign in",
  description: "Welcome to xd studio",
  mode: "static",
  content: <SignForm />,
  variant: "fullscreen",
});

export const SignDialog = createDialog({
  title: "Sign in",
  description: "Welcome to xd studio",
  content: <SignForm />,
  mode: "static",
  variant: "fullscreen",
  trigger: (
    <Button variant="ghost" size="icon">
      <LogInIcon />
    </Button>
  ),
});
