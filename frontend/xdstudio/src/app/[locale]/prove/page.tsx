"use client";
import { useDialogExample } from "@/libs/dialog/example/clientHook";
import { useUsers } from "@/libs/graphql/operations/user/getUser.query";

import { Button } from "@/shared/components/shadcn/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/shadcn/dialog";
import { Form } from "@/shared/components/shadcn/form";
import { Input } from "@/shared/components/shadcn/input";
import { InputForm } from "@/shared/components/ui/form/InputForm";
import { Description } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
export default function Page() {
  // const { openDialog: openTest } = useDialogExample({ mode: "static" });

  const { data, status, error } = useUsers();
  const method = useForm();
  return (
    <Form {...method}>
      <Dialog open={false}>
        <DialogTrigger>test</DialogTrigger>

        <DialogOverlay />

        <DialogPortal>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <p className="line-clamp-3">
                Nulla dolor velit adipisicing duis excepteur esse in duis
                nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt
                laborum ex occaecat eu tempor labore enim adipisicing minim ad.
                Est in quis eu dolore occaecat excepteur fugiat dolore nisi
                aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est
                ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor
                magna pariatur. Dolor et ad sint voluptate sunt elit mollit
                officia ad enim sit consectetur enim.
              </p>
              <InputForm
                name={""}
                description=" Nulla dolor velit adipisicing duis excepteur esse in duis
                nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt
                laborum ex occaecat eu tempor labore enim adipisicing minim ad.
                Est in quis eu dolore occaecat excepteur fugiat dolore nisi
                aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est
                ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor
                magna pariatur. Dolor et ad sint voluptate sunt elit mollit
                officia ad enim sit consectetur enim."
                label="assssssssssssssssssssssssssssssssssssssssssssssssssss"
              />
              {/* <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                <Description>testsssssssssssssssssssssssssssssssssssssssssssssssssssscscsscscscsscsc</Description>
              </div> */}
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>

        {/* <DialogContentInstance {...propsDialog} ref={refContent} /> */}
      </Dialog>
    </Form>
  );
}
