"use client";

import { MotionTransition } from "@/shared/components/MotionTransition";
import { Button } from "@/libs/shadcn/ui/button";
import { useRouter } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";

import { ArrowLeft } from "lucide-react";
import { Card, CardAction, CardContent } from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { TextareaForm } from "@/shared/components/ui/form/TextareaForm";
import { Textarea } from "@/libs/shadcn/ui/textarea";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { useAppForm } from "@/libs/shadcn/libs/tanstack-react-form";
import type { UserItem } from "@/libs/graphql/generates/graphql";
import { toast } from "sonner";
import { useStore } from "@tanstack/react-form";

const MenuConfigForm = ({ children }: WithChildren) => {
  const router = useRouter();
  return <CardContent>{children}</CardContent>;
};

export const ConfigForm = () => {
  const form = useAppForm({
    defaultValues: { config: `{test}`, name: "" },
    onSubmit({ value }) {
      toast(JSON.stringify(value));
    },
  });
  const store = useStore(form.store, (store) => store);
  const nonPersistentIsDirty = store.isDefaultValue;
  return (
    <form
      className="contents"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <MenuConfigForm>
        <form.AppField name={"name"}>
          {(field) => {
            return (
              <field.TextArea
                rows={60}
                classNames={{ textarea: "h-50 max-h-[50vh]" }}
                name="config"
                label="Config"
                description="Can set config json data"
              />
            );
          }}
        </form.AppField>

        <form.AppField name={"name"}>
          {(field) => {
            return (
              <field.Input
                label={"This ip"}
                description="Set your default ip for use the item"
                className="max-w-xs"
                placeholder={`0.0.0.0`}
              />
            );
          }}
        </form.AppField>
      </MenuConfigForm>
      <CardAction className="mt-auto self-end px-5">
        <form.AppForm>
          <section className="place-self-end">
            <Button disabled={nonPersistentIsDirty}>Update</Button>
          </section>
        </form.AppForm>
      </CardAction>
    </form>
  );
};
