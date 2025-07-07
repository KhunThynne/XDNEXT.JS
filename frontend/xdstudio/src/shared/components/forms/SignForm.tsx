import { useForm } from "react-hook-form";
import { Input } from "../shadcn/input";
import { Button } from "../shadcn/button";
import { createHookDialog } from "@/libs/dialog/createHookDialog";
import Image from "next/image";
import { Label } from "../shadcn/label";

const SignForm = () => {
  const {} = useForm();
  return (
    <form className="flex flex-col gap-3">
      <Image
        alt="sign-logo"
        className="mx-auto aspect-square"
        width={200}
        height={200}
        src={"/img/XD_STUDIO.png"}
      />
      <div>
        <Label>DDD </Label>
        <Input />
      </div>

      <Input />
      <Button> Login</Button>
    </form>
  );
};

export const useSignDialog = createHookDialog({
  title: "Sign in",
  description: "Welcome to xd studio",
  content: <SignForm />,
});
