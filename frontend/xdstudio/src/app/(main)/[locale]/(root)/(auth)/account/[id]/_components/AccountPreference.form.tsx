"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@/libs/shadcn/ui/separator";
import z from "zod";
import { useAppForm } from "@/shared/hooks/useAppForm";
import { formOptions, revalidateLogic, useField } from "@tanstack/react-form";
import { useI18n } from "@/libs/i18n/hooks/useI18n";
import type { User } from "@/payload-types";
const ZEmailSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  username: z.string({ message: "Invalid email address" }),
});
// const SendResetForm = ({ email }: { email?: User["email"] }) => {
//   const method = useForm({
//     resolver: zodResolver(ZEmailSchema),
//     defaultValues: { email: email! },
//   });
//   const { closeDialog } = useDialogContext();
//   const {
//     control,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = method;
//   const { useSendTokenResetMutation } = useAuthDocument();
//   const sendReset = useSendTokenResetMutation();
//   const ConfirmHandle = async (form: z.infer<typeof ZEmailSchema>) => {
//     await sendReset
//       .mutateAsync(form.email)
//       .then((res) => {
//         if (res.data.sendUserPasswordResetLink) {
//           toast.success(`We're send token for reset password to your email`);
//           closeDialog();
//           return;
//         }
//       })
//       .catch((res) => {
//         toast.error(res ?? `Can't to send token try again please`);
//         return;
//       });
//   };
//   return (
//     <Form {...method}>
//       <form onSubmit={handleSubmit(ConfirmHandle)}>
//         <InputForm
//           control={control}
//           name="email"
//           label="Email"
//           disabled={!!email}
//           placeholder="Insert your email"
//         />
//         <DialogFooterAction
//           className="mt-4"
//           buttonCancel={{ type: "button" }}
//           loading={isSubmitting}
//           onCancel={closeDialog}
//         />
//       </form>
//     </Form>
//   );
// };

export default function AccountPreferenceForm(props: User) {
  const preferencesOption = formOptions({
    defaultValues: { email: props.email, username: props.username },
    validationLogic: revalidateLogic(),
    validators: { onDynamic: ZEmailSchema },
    onSubmit(props) {},
  });
  const form = useAppForm({
    ...preferencesOption,
  });
  const field = useField({ name: "email", form });
  const { isDefaultValue } = field.state.meta;
  const nonPersistentIsDirty = !isDefaultValue;
  const t = useI18n("");
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        await form.handleSubmit();
      }}
    >
      <form.AppField
        name="email"
        children={(field) => {
          return (
            <field.Input
              label="Email"
              className="max-w-2xs grow"
              placeholder="you@example.com"
              disabled
            />
          );
        }}
      />

      <form.AppField
        name="username"
        children={(field) => {
          return (
            <field.Input
              label="Username"
              disabled
              placeholder="your_username"
              className="max-w-50 grow"
            />
          );
        }}
      />

      <Separator className="my-7" />

      <form.Subscribe>
        <section className="flex justify-end gap-3">
          <Button
            type="button"
            className="cursor-pointer capitalize"
            variant={"secondary"}
            onClick={() => form.reset()}
            disabled={!nonPersistentIsDirty}
          >
            {t("common.reset")}
          </Button>
          <Button
            disabled={!nonPersistentIsDirty}
            type="button"
            className="cursor-pointer capitalize"
          >
            {t("common.update")}
          </Button>
        </section>
      </form.Subscribe>
    </form>
  );
}
