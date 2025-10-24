"use client";
import { auth } from "@/auth";
import { Form } from "@/libs/shadcn/ui/form";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function PageNavBar() {
  const method = useForm({ defaultValues: { test: "" } });
  return (
    <Form {...method}>
      {/* <Image
        src={`http://localhost:3001/images/HFWiyZcdNHRKuy-9MZ0VOA.gif`}
        alt="test"
        height={100}
        width={100}
      /> */}
      <InputForm name="test" />
      {method.watch("test")}
    </Form>
  );
}
