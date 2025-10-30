"use client";
import {
  useStore,
  useField,
  revalidateLogic,
  formOptions,
} from "@tanstack/react-form";
import {
  useAppForm,
  withForm,
} from "@/libs/shadcn/libs/tanstack-react-form/hooks/form";
import { toast } from "sonner";
import z from "zod";
import { FieldGroup, FieldSet } from "@/libs/shadcn/ui/field";
import type { RadioFieldItemProps } from "@/libs/shadcn/libs/tanstack-react-form/components/FieldRadioGroup";
import { useFormContext } from "@/libs/shadcn/libs/tanstack-react-form";
const tasks = [
  {
    id: "push",
    label: "Push notifications",
  },
  {
    id: "email",
    label: "Email notifications",
  },
] as const;

const plans = [
  {
    id: "starter",
    title: "Starter (100K tokens/month)",
    description: "For everyday use with basic features.",
  },
  {
    id: "pro",
    title: "Pro (1M tokens/month)",
    description: "For advanced AI usage with more features.",
  },
  {
    id: "enterprise",
    title: "Enterprise (Unlimited tokens)",
    description: "For large teams and heavy usage.",
  },
] as RadioFieldItemProps[];

const formSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required") // ห้ามว่าง
    .min(3, "Username must be at least 3 characters"), // อย่างน้อย 3 ตัว
  test: z
    .string()
    .min(1, "Username is required") // ห้ามว่าง
    .min(3, "Username must be at least 3 characters"), // อย่างน้อย 3 ตัว
  check: z.boolean(),
  plan: z.string().min(1, "You must select a subscription plan to continue."),
  checks: z
    .array(z.string())
    .min(1, "Please select at least one notification type.")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "Invalid notification type selected.",
      }
    ),
});

const testOption = formOptions({
  defaultValues: {
    username: "",
    test: "",
    check: false,
    checks: [] as string[],
    plan: "",
  },
  validationLogic: revalidateLogic(),
  validators: {
    onSubmitAsync: formSchema,
    // onChangeAsync: formSchema,
  },
});
const ChildForm = withForm({
  ...testOption,
  // Optional, but adds props to the `render` function outside of `form`
  props: {
    title: "Child Form",
  },
  render: ({ form, title }) => {
    return (
      <div>
        <p>{title}</p>
        <form.AppField
          name="check"
          children={(field) => (
            <field.CheckBox
              label="xxxx"
              description="Enter your 16-digit card number"
              className="max-w-xs"
            />
          )}
        />
        <form.AppForm>
          <form.SubscribeButton label="Submit" />
        </form.AppForm>
      </div>
    );
  },
});

export default function PageForm() {
  const form = useAppForm({
    ...testOption,
    onSubmit: ({ value }) => {
      toast(JSON.stringify(value));
    },
  });
  const { state, getFieldValue, AppField, AppForm } = form;
  const store = useStore(form.store, (state) => state);
  const field = useField({ name: "checks", form });

  return (
    <>
      <form
        className="mx-5 space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {JSON.stringify(field.state.value)}
        <AppField
          name="username"
          children={(field) => (
            <field.Input
              disabled
              label="Full Name"
              description="Enter your 16-digit card number"
              className="max-w-xs"
              classNames={{ description: "order" }}
            />
          )}
        />
        <AppField
          name="username"
          children={(field) => (
            <field.TextArea
              label="Full Name"
              description="Enter your 16-digit card number"
              className="max-w-xs"
            />
          )}
        />

        {/* <AppField
          name="plan"
          children={(field) => (
            <>
              {plans.map((plan) => (
                <field.RadioGroup {...plan} />
              ))}
            </>
          )}
        /> */}

        <AppField
          name="plan"
          children={(field) => (
            <>
              <field.RadioGroup items={plans} />
            </>
          )}
        />
        <AppField
          name="test"
          children={(field) => (
            <field.Select
              label="test"
              description="Enter your 16-digit card number"
              className="max-w-xs"
              // placeholder="TESt"
              options={[{ label: "test", value: "s" }]}
            />
          )}
        />

        <AppField name="check">
          {(field) => (
            <field.Switch
              // label="xxxx"
              // description="Enter your 16-digit card number"
              className="max-w-xs"
            />
          )}
        </AppField>

        {/* <AppField
          name="checks"
          mode="array"
          children={(field) => (
            <FieldSet>
              <FieldGroup className="gap-2">
                {tasks.map((task) => {
                  return (
                    <field.CheckBox
                      id={`form-tanstack-checkbox-${task.id}`}
                      label="xxxx"
                      className="max-w-xs"
                      checked={field.state.value.includes(task.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          field.pushValue(task.id);
                        } else {
                          const index = field.state.value.indexOf(task.id);
                          if (index > -1) {
                            field.removeValue(index);
                          }
                        }
                      }}
                    />
                  );
                })}
              </FieldGroup>{" "}
            </FieldSet>
          )}
        /> */}
        <ChildForm form={form} title="" />
      </form>

      {field.state.value}
    </>
  );
}
