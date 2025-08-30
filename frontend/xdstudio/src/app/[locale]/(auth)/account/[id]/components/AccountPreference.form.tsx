"use client";

import { User } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Form } from "@/libs/shadcn/ui/form";
import { Input } from "@/libs/shadcn/ui/input";
import AvatarForm from "@/shared/components/ui/form/AvatarForm";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

export default function AccountPreferenceForm(props: User) {
  const { data } = useSession();

  const method = useForm<User>({
    defaultValues: {
      ...props,
    },
  });
  const { control, register, formState } = method;
  const { isDirty, isValid } = formState;
  return (
    <Form {...method}>
      <form className="space-y-4">
        {/* <AvatarForm
          onSubmit={() => {}}
          currentImageUrl={
            data?.user.image ?? method.getValues("avartar.src.url")
          }
        /> */}

        <InputForm
          name="email"
          disabled
          label="Email"
          className="max-w-2xs grow"
          placeholder="you@example.com"
        />

        <div className="flex gap-3 max-md:flex-col">
          <InputForm
            className="max-w-50 grow"
            name="username"
            label="Username"
            disabled
            placeholder="your_username"
            control={control}
          />
        </div>
        {/* <InputForm
          name="avartar.src.url"
          label="Image URL"
          placeholder="https://..."
          control={control}
        /> */}

        {/* <Input {...register("email")} /> */}

        <section className="flex justify-end gap-3">
          <Button
            type="button"
            className="cursor-pointer"
            variant={"secondary"}
            onClick={() => method.reset(props)}
            disabled={!isDirty}
          >
            Reset
          </Button>
          <Button
            disabled={!isDirty && isValid}
            type="button"
            className="cursor-pointer"
          >
            Update
          </Button>
        </section>
      </form>
    </Form>
  );
}
