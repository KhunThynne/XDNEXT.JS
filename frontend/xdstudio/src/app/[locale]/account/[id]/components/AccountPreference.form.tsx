"use client";

import { User } from "@/libs/graphql/generates/graphql";
import { Form } from "@/libs/shadcn/ui/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { useForm } from "react-hook-form";

export default function AccountPreferenceForm(props: User) {
  const method = useForm<User>({
    defaultValues: {
      ...props,
    },
  });
  const { control } = method;
  return (
    <Form {...method}>
      <form className="space-y-4">
        <div className="flex gap-3 max-md:flex-col">
          <InputForm
            name="email"
            disabled
            label="Email"
            className="grow"
            placeholder="you@example.com"
          />
          <InputForm name="provider" control={control} disabled />
        </div>
        <div className="flex gap-3 max-md:flex-col">
          <InputForm
            name="name"
            label="Name"
            placeholder="Full Name"
            className="grow"
            control={control}
          />
          <InputForm
            className="grow"
            name="username"
            label="Username"
            placeholder="your_username"
            control={control}
          />
        </div>

        <InputForm
          name="avartar.src.url"
          label="Image URL"
          placeholder="https://..."
          control={control}
        />

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
