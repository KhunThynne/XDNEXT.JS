"use client";

import { Form } from "@/shared/components/shadcn/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { useForm } from "react-hook-form";

type AccountFormData = {
  email: string;
  name: string;
  username: string;
  providers: string;
  image: string;
  role: string;
  password: string;
};

export default function AccountPreferenceForm() {
  const method = useForm<AccountFormData>({
    defaultValues: {
      email: "",
      name: "",
      username: "",
      providers: "",
      image: "",
      role: "",
      password: "",
    },
  });

  return (
    <Form {...method}>
      <form className="space-y-4">
        <InputForm name="email" label="Email" placeholder="you@example.com" />

        <div className="flex gap-3 max-md:flex-col">
          <InputForm
            name="name"
            label="Name"
            placeholder="Full Name"
            className="grow"
          />
          <InputForm
            className="grow"
            name="username"
            label="Username"
            placeholder="your_username"
          />
        </div>

        <InputForm
          name="providers"
          label="Providers"
          disabled
          value={"Credentail"}
        />
        <InputForm name="image" label="Image URL" placeholder="https://..." />
        <InputForm name="role" label="Role" placeholder="admin / user" />
        <InputForm
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
        />
      </form>
    </Form>
  );
}
