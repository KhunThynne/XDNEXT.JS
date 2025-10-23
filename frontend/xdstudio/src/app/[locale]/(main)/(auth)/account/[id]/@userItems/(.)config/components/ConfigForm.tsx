"use client";

import { MotionTransition } from "@/shared/components/MotionTransition";
import { Button } from "@/libs/shadcn/ui/button";
import { useRouter } from "@navigation";
import { Form } from "@/libs/shadcn/ui/form";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import { ContainerSection } from "@/shared/components/ui/ContainerSection";
import { TextareaForm } from "@/shared/components/ui/form/TextareaForm";
import { Textarea } from "@/libs/shadcn/ui/textarea";
import { InputForm } from "@/shared/components/ui/form/InputForm";

const MenuConfigForm = ({ children }: WithChildren) => {
  const router = useRouter();
  return (
    <div className="space-y-3">
      <Button
        onClick={router.back}
        size="icon"
        className="cursor-pointer"
        variant={"ghost"}
      >
        <ArrowLeft />
      </Button>
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export const ConfigForm = () => {
  const method = useForm({ defaultValues: { config: `{test}` } });
  return (
    <Form {...method}>
      <MenuConfigForm>
        <MotionTransition>
          <ContainerSection title="Setting" classNames={{ title: "text-sm" }}>
            <form className="flex flex-col gap-3.5">
              <TextareaForm
                rows={10}
                className="h-50"
                control={method.control}
                name="config"
                label="Config"
                description="Can set config json data"
              />

              <InputForm
                label={"This ip"}
                name=""
                description="Set your default ip for use the item"
                className="max-w-xs"
                placeholder={`0.0.0.0`}
              />

              <section className="place-self-end">
                <Button>Update</Button>
              </section>
            </form>
          </ContainerSection>
        </MotionTransition>
      </MenuConfigForm>
    </Form>
  );
};
