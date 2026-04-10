"use client";

import { Button } from "@/libs/shadcn/ui/button";
import { useRouter } from "@navigation";

import { useAppForm } from "@/shared/hooks/useAppForm";

import { toast } from "sonner";
import { useStore } from "@tanstack/react-form";
import { CardContent } from "@/libs/shadcn/ui/card";

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
      <form.AppForm>
        <section className="place-self-end">
          <Button disabled={nonPersistentIsDirty}>Update</Button>
        </section>
      </form.AppForm>
    </form>
  );
};
