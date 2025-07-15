import { useForm } from "react-hook-form";
import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { createDialog } from "@/libs/dialog/createDialog";
import { EyeIcon, EyeOff, LogInIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useDialoguseContext } from "@/libs/dialog/DialogInstance";
import { Button } from "../../shadcn/button";
import { InputForm } from "../../ui/form/InputForm";
import { Form } from "../../shadcn/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeSignInInterface, ZSignInSchema } from "./auth.zod";
import { OAuthLoginButtonsGrupe } from "./OAuthLoginButtonsGrupe.component";
import { usePathname } from "@navigation";

export const SignForm = () => {
  const method = useForm({
    resolver: zodResolver(ZSignInSchema),
    defaultValues: { password: "", email: "" },
  });
  const [hidePassword, setHidePassword] = useState(false);
  const { closeDialog } = useDialoguseContext();
  const pathname = usePathname();
  const onSubmit = async (data: TypeSignInInterface) => {
    try {
      const res = await signIn("credentials", {
        callbackUrl: pathname,
        // redirect: false,
        email: data.email,
        password: data.password,
      });
      // if (res?.ok) {
      //   if (res?.error) throw new Error("Login failed");
      //   toast.success("Login success!");
      //   closeDialog();
      //   console.log("User logged in:", res);
      // }
    } catch (_) {
      toast.error("Login failed! user or password invalidate");
      return;
    }
  };

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

        <InputForm
          label="Password"
          control={method.control}
          name="password"
          type={hidePassword ? "text" : "password"}
          description="Password must be 6-10 characters, include uppercase and number."
          classNames={{ container: "gap-2" }}
          placeholder="Enter your password"
          maxLength={10}
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
