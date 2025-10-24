"use client";

import type { User } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Form } from "@/libs/shadcn/ui/form";
import { Separator } from "@/libs/shadcn/ui/separator";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { useForm } from "react-hook-form";

import { FormInput, Lock } from "lucide-react";
import React from "react";
import { useAuthDocument } from "@/shared/hooks/useAuthDocument";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useDialogContext } from "@/libs/dialog/DialogInstance";
import { DialogFooterAction, useDialogGlobal } from "@/shared/components/ui";
const ZEmailSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});
const SendResetForm = ({ email }: { email?: User["email"] }) => {
  const method = useForm({
    resolver: zodResolver(ZEmailSchema),
    defaultValues: { email: email! },
  });
  const { closeDialog } = useDialogContext();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = method;
  const { useSendTokenResetMutation } = useAuthDocument();
  const sendReset = useSendTokenResetMutation();
  const ConfirmHandle = async (form: z.infer<typeof ZEmailSchema>) => {
    await sendReset
      .mutateAsync(form.email)
      .then((res) => {
        if (res.data.sendUserPasswordResetLink) {
          toast.success(`We're send token for reset password to your email`);
          closeDialog();
          return;
        }
      })
      .catch((res) => {
        toast.error(res ?? `Can't to send token try again please`);
        return;
      });
  };
  return (
    <Form {...method}>
      <form onSubmit={handleSubmit(ConfirmHandle)}>
        <InputForm
          control={control}
          name="email"
          label="Email"
          disabled={!!email}
          placeholder="Insert your email"
        />
        <DialogFooterAction
          className="mt-4"
          buttonCancel={{ type: "button" }}
          loading={isSubmitting}
          onCancel={closeDialog}
        />
      </form>
    </Form>
  );
};

export default function AccountPreferenceForm(props: User) {
  const { openDialog } = useDialogGlobal();
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

        <InputForm
          className="max-w-50 grow"
          name="username"
          label="Username"
          disabled
          placeholder="your_username"
          control={control}
        />

        <Separator className="my-7" />
        <div className="flex gap-4 divide-x">
          <section className="flex gap-2 pe-3">
            <Lock className="text-muted-foreground size-4 self-center" />
          </section>
          <Button
            variant="outline"
            className="cursor-pointer"
            type="button"
            onClick={() =>
              openDialog({
                title: "Confirm Reset",
                description:
                  "Are you sure you want to reset? This action cannot be undone.",
                content: <SendResetForm email={method.watch("email")} />,
              })
            }
          >
            Send email reset password
          </Button>
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
