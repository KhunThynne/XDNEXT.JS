import { useForm } from "react-hook-form";
import { Input } from "../shadcn/input";
import { Button } from "../shadcn/button";
import { createHookDialog } from "@/libs/dialog/createHookDialog";
import Image from "next/image";
import { Label } from "../shadcn/label";
import { createDialog } from "@/libs/dialog/createDialog";
import { EyeIcon, EyeOff, LogInIcon } from "lucide-react";
import { InputForm } from "../ui/form/InputForm";
import { Form } from "../shadcn/form";
import { useState } from "react";
import { toast } from "sonner";

interface SignInInterface {
  username: string;
  password: string;
}
const SignForm = () => {
  const method = useForm<SignInInterface>({
    defaultValues: { password: "", username: "" },
  });
  const [hidePassword, setHidePassword] = useState(false);
  const onSubmit = (form: SignInInterface) => {
    console.log(form);
    toast.success("Login successful!", { position: "top-center" });
  };
  const password = method.watch("password");
  return (
    <Form {...method}>
      <form
        className="flex flex-col gap-4"
        onSubmit={method.handleSubmit(onSubmit)}
      >
        {/* <Image
        alt="sign-logo"
        className="mx-auto aspect-square"
        width={200}
        height={200}
        src={"/img/XD_STUDIO.png"}
      /> */}
        <div className="size-50 mx-auto rounded-full border" />
        <InputForm
          label="Username"
          name="username"
          placeholder="Enter your username"
          description="Username must be 3-16 characters, letters, numbers, and underscores only."
          pattern="^[a-zA-Z0-9_]{3,16}$"
        />

        <InputForm
          label="Password"
          name="password"
          type={hidePassword ? "text" : "password"}
          description="Password must be 6-10 characters, include uppercase and number."
          classNames={{ container: "gap-2" }}
          placeholder="Enter your password"
          maxLength={10}
          pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,10}$"
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

        <section className="mt-6 flex flex-col">
          <Button>Login</Button>
        </section>
      </form>
    </Form>
  );
};

export const useSignDialog = createHookDialog({
  title: "Sign in",
  description: "Welcome to xd studio",
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
