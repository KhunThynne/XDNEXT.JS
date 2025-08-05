
import { useForm } from "react-hook-form";
import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { createDialog } from "@/libs/dialog/createDialog";
import { EyeIcon, EyeOff, LogInIcon } from "lucide-react";
import { use, useCallback, useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useDialoguseContext } from "@/libs/dialog/DialogInstance";

import { InputForm } from "../../ui/form/InputForm";

import { zodResolver } from "@hookform/resolvers/zod";
import { TypeSignInInterface, ZSignInSchema } from "./auth.zod";
import { OAuthLoginButtonsGrupe } from "./OAuthLoginButtonsGrupe.component";
import { usePathname } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";
import { Button } from "@/libs/shadcn/ui/button";
import loginAction, { test } from "./actions/Login.action";

export const SignForm = () => {
  const pathname = usePathname();

  const onSubmit = useCallback(
    async (data: TypeSignInInterface) => {
      console.log(pathname);
      if (pathname) {
        await loginAction("credentials", {
          callbackUrl: pathname,
          // redirect: false,
          email: data.email,
          password: data.password,
        })
          .then(() => {
            toast.success("Login success!");
          })
          .catch(() => {
            throw new Error("can't login");
          });
        // .finally(() => {
        //   closeDialog();
        // });
      }
    },
    [pathname]
  );
  const method = useForm({
    resolver: zodResolver(ZSignInSchema),
    defaultValues: { password: "", email: "" },
  });
  const [hidePassword, setHidePassword] = useState(false);
  const { closeDialog } = useDialoguseContext();

  return (
    <Form {...method}>
      <form
        className="flex flex-col gap-4"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <div className="bg-primary-foreground mx-auto aspect-square w-full max-w-60 rounded-full border" />
        <InputForm
          label="Email"
          control={method.control}
          name="email"
          type="email"
          placeholder="Enter your email address"
          description="Please enter a valid email address (e.g. name@example.com)."
        />

        <Button type="button" onClick={async () => await test(pathname)}>
          TEst
        </Button>
        <InputForm
          label="Password"
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
          <Button>Login</Button>
          <OAuthLoginButtonsGrupe className="mt-5" callbackUrl={pathname} />
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
});

export const SignDialog = createDialog({
  title: "Sign in",
  description: "Welcome to xd studio",
  content: <SignForm />,
  mode: "static",
  trigger: (
    <Button variant="ghost" size="icon">
      <LogInIcon />
    </Button>
  ),
});
