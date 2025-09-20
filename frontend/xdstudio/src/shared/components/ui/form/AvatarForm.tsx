"use client";

import * as React from "react";
import { useCallback, useRef, useState } from "react";
import { z } from "zod";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImagePlus, Upload, X } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/libs/shadcn/ui/form";
import { Button } from "@/libs/shadcn/ui/button";

import { Input } from "@/libs/shadcn/ui/input";
import { cn } from "@/libs/shadcn/utils";

import { FormI18nMessage } from "@/libs/i18n/form/FormI18nMessage";

// ⛳️ NOTE: Adjust these import paths to match your project structure.
// If you use shadcn with the default path, keep as "@/components/ui/*".
// If your project uses "@/libs/shadcn/ui/*" (as in your example), change accordingly.

// --- Schema -----------------------------------------------------------------
const ACCEPTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
] as const;
const MAX_MB = 5;
const KB = 1024;
const MB = 1024 * KB;

const ImageSchema = z
  .custom<File | undefined>()
  .refine(
    (file) =>
      !file ||
      (file &&
        ACCEPTED_TYPES.includes(file.type as (typeof ACCEPTED_TYPES)[number])),
    "Supported formats: PNG, JPG, WEBP, GIF"
  )
  .refine(
    (file) => !file || file.size <= MAX_MB * MB,
    `Max file size is ${MAX_MB}MB`
  );

const FormSchema = z.object({
  image: ImageSchema.optional(),
});

type FormValues = z.infer<typeof FormSchema>;

// --- Props -------------------------------------------------------------------
export interface UserAvatarFormProps {
  currentImageUrl?: string | null; // existing avatar src
  userInitials?: string; // fallback initials for Avatar
  onSubmit: (payload: {
    file: File | null;
    previewUrl?: string | null;
  }) => void | Promise<void>;
  onRemove?: () => void | Promise<void>; // remove existing image
  className?: string;
  label?: string; // optional label for the input
}

// --- Helpers -----------------------------------------------------------------
async function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// --- Component ---------------------------------------------------------------
export default function AvatarForm({
  currentImageUrl,
  userInitials = "US",
  onSubmit,
  onRemove,
  className,
  label = "Profile image",
}: UserAvatarFormProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    currentImageUrl ?? null
  );
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { image: undefined },
    mode: "onChange",
  });

  const hasCurrent = Boolean(currentImageUrl);
  const hasNew = Boolean(previewUrl);

  const pickFile = useCallback(() => fileInputRef.current?.click(), []);

  const clearNew = useCallback(() => {
    form.setValue("image", undefined, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [form]);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file) {
        form.setValue("image", file, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
        const url = await fileToDataURL(file);
        setPreviewUrl(url);
      }
    },
    [form]
  );

  const handlePaste = useCallback(
    async (e: React.ClipboardEvent) => {
      const item = Array.from(e.clipboardData.items || []).find((i) =>
        i.type.startsWith("image/")
      );
      if (!item) return;
      const file = item.getAsFile();
      if (file) {
        form.setValue("image", file, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
        const url = await fileToDataURL(file);
        setPreviewUrl(url);
      }
    },
    [form]
  );

  const internalSubmit = form.handleSubmit(async (values) => {
    const file = values.image ?? null;
    await onSubmit({ file, previewUrl });
  });

  const removeCurrent = async () => {
    if (!onRemove) return;
    await onRemove();
  };

  // useEffect(() => {
  //   const sub = form.watch(async (value) => {
  //     const f = value.image as File | undefined;
  //     if (f) setPreviewUrl(await fileToDataURL(f));
  //   });
  //   return () => sub.unsubscribe();
  // }, [form]);

  return (
    <Form {...form}>
      <form
        onSubmit={internalSubmit}
        className="space-y-6"
        onPaste={handlePaste}
      >
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-medium">{label}</FormLabel>
              {/* <FormDescription>
                PNG, JPG, WEBP, GIF up to {MAX_MB}MB. You can click, drop, or
                paste an image.
              </FormDescription> */}
              <FormControl>
                <div
                  className={cn(
                    "flex flex-col gap-4 sm:flex-row sm:items-start",
                    dragActive &&
                      "ring-primary rounded-2xl ring-2 ring-offset-2"
                  )}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                >
                  <div className="flex-1">
                    <label
                      htmlFor="avatar-input"
                      className={cn(
                        "relative flex size-40 cursor-pointer items-center justify-center rounded-2xl border border-dashed",
                        "transition-all hover:border-solid hover:shadow-sm"
                      )}
                    >
                      {!hasNew ? (
                        <div className="flex flex-col items-center justify-center gap-2 px-3 text-center">
                          <ImagePlus className="size-6" />
                          <div className="text-muted-foreground text-xs leading-tight">
                            Click to upload, drag & drop, or paste
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={previewUrl!}
                            alt="New image preview"
                            className="absolute inset-0 size-full rounded-2xl object-cover"
                          />
                          <div className="absolute inset-0 flex items-end justify-end gap-2 p-2">
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={pickFile}
                              className="supports-[backdrop-filter]:bg-background/70 backdrop-blur"
                            >
                              <Upload className="size-4" />
                            </Button>
                            <Button
                              type="button"
                              className="z-10 cursor-pointer hover:brightness-110"
                              variant="destructive"
                              size={"icon"}
                              onClick={clearNew}
                            >
                              <X />
                            </Button>
                          </div>
                        </>
                      )}
                      <Input
                        id="avatar-input"
                        ref={fileInputRef}
                        type="file"
                        accept={ACCEPTED_TYPES.join(",")}
                        className="hidden"
                        onChange={async (e) => {
                          const f = e.target.files?.[0];
                          field.onChange(f);
                          if (f) setPreviewUrl(await fileToDataURL(f));
                        }}
                      />
                    </label>
                    <FormI18nMessage />
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* <div className="flex items-center gap-2">
          <Button type="submit" className="min-w-28">
            Save
          </Button>
          {hasCurrent && onRemove && !hasNew ? (
            <Button type="button" variant="outline" onClick={removeCurrent}>
              <Trash2 className="mr-1 size-4" /> Remove current
            </Button>
          ) : null}
        </div> */}
      </form>
    </Form>
  );
}

// --- Usage -------------------------------------------------------------------
/*
import UserAvatarForm from "./UserAvatarForm";

export default function SettingsPage() {
  return (
    <div className="p-6">
      <UserAvatarForm
        currentImageUrl="/avatars/me.jpg"
        userInitials="TN"
        onSubmit={async ({ file }) => {
          // 1) upload file to your storage
          // 2) save returned URL to your user profile
          console.log("submit", file);
        }}
        onRemove={async () => {
          // remove existing avatar from profile
          console.log("remove current");
        }}
      />
    </div>
  );
}
*/
