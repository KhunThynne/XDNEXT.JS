"use client";

import { Form } from "@/shared/components/shadcn/form";
import { SelectionForm } from "@/shared/components/ui/form/SelectionForm";
import { useForm } from "react-hook-form";

export default function PageTest() {
  const method = useForm();
  return (
    <Form {...method}>
      <div className="mx-5">
        <SelectionForm
          name={"test"}
          label="test"
          description="asdsadsacascasc"
          options={[
            {
              label: "test",
              items: [
                { label: "sadasd", value: "test" },
                { label: "xx", value: "xxx" },
              ],
            },
          ]}
        />
      </div>
    </Form>
  );
}
