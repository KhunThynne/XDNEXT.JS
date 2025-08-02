"use client";
import React, { memo, useEffect } from "react";
import clsx from "clsx";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { ChevronLeftIcon, ChevronRightIcon, EyeClosed } from "lucide-react";
import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import { Image } from "@/libs/graphql/generates/graphql";
import { createDialog } from "@/libs/dialog/createDialog";
import { createHookDialog } from "@/libs/dialog/createHookDialog";
import { Button } from "@/libs/shadcn/ui/button";

interface ImageGalleryProps {
  files: Partial<Image>[];
  open: boolean;
}

interface ImageGalleryProps {
  files: Partial<Image>[];
  selectedIndex?: number;
  open: boolean;
  handleClose?: () => void;
}

const NavigationGallerry = ({ children }: { children: React.ReactNode }) => {
  const { watch, setValue } = useFormContext<ImageGalleryProps>();
  const files = watch("files") || [];
  const selectImage = watch("selectedIndex") || 0;
  const handleNavigation = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? selectImage > 0
          ? selectImage - 1
          : files.length - 1
        : selectImage < files.length - 1
          ? selectImage + 1
          : 0;
    setValue("selectedIndex", newIndex);
  };

  const Navigation = memo(function Navigation(props: any) {
    return <Button variant="ghost" {...props} />;
  });

  return (
    <span className="flex grow justify-between">
      <Navigation onClick={() => handleNavigation("prev")}>
        <ChevronLeftIcon className="size-6 lg:size-8" />{" "}
      </Navigation>

      {children}

      <Navigation onClick={() => handleNavigation("next")}>
        <ChevronRightIcon className="size-6 lg:size-8" />
      </Navigation>
    </span>
  );
};

export const ImageGallery = ({ files, selectedIndex }: ImageGalleryProps) => {
  const method = useForm<ImageGalleryProps>({
    defaultValues: {
      files: files || [],
      selectedIndex: selectedIndex,
    },
  });
  const { watch, setValue } = method;
  useEffect(() => {
    files && setValue("files", files);
    selectedIndex !== undefined &&
      selectedIndex >= 0 &&
      setValue("selectedIndex", selectedIndex);
  }, [files, selectedIndex, setValue]);
  const imageFile = watch("files") || [];
  const selectImage = watch("selectedIndex") || 0;
  return (
    <FormProvider {...method}>
      <Button
        className="absolute right-0 top-4 z-30 p-0 lg:right-20"
        variant="ghost"
        // onClick={}
      >
        <EyeClosed className="size-10 brightness-105" />
      </Button>
      {/* <TabGroup
        //   defaultIndex={selectImage}
        selectedIndex={selectImage}
        className="flex h-screen max-h-screen w-full flex-col"
        onChange={(index) => setValue("selectedIndex", index)}
      >
        <NavigationGallerry>
          <TabPanels className={"z-20 grow"}>
            {imageFile ? (
              imageFile.map((image, index) => (
                <TabPanel
                  key={index}
                  className="size-full border-0 outline-none ring-0 focus:outline-none"
                >
                  <div className="relative h-full place-content-center place-items-center">
                    <img
                      alt={image.name}
                      src={image?.url}
                      width={image.width}
                      height={image.height}
                      className="z-10 max-h-[80vh] object-contain sm:rounded-lg lg:max-w-3xl"
                    />
                  </div>
                </TabPanel>
              ))
            ) : (
              <PhotoIcon className="m-auto size-72 text-zinc-500" />
            )}
          </TabPanels>
        </NavigationGallerry>
        <EmblaCarousel
          options={{
            dragFree: true,
            containScroll: "trimSnaps",
            align: "center",
          }}
          className="backdrop-blur-xs z-20 flex-none"
          selectedIndex={selectImage}
        >
          <TabList className="flex gap-4 p-2">
            {imageFile ? (
              imageFile.map((image, index) => (
                <Tab
                  as="div"
                  key={index}
                  className={clsx(
                    "group relative flex aspect-auto cursor-pointer items-center justify-center",
                    "min-w-30 h-20 max-w-40 rounded-md text-sm font-medium uppercase",
                    "bg-primary/50 hover:brightness-90",
                    "focus:outline-none group-data-[selected]:brightness-100"
                  )}
                >
                  <span className="sr-only">{image?.name}</span>
                  <img
                    alt={image.name}
                    src={image?.url || image?.formats?.thumbnail.url}
                    className="max-h-full object-contain brightness-50 group-data-[selected]:brightness-100"
                  />
                </Tab>
              ))
            ) : (
              <div className="h-full grow text-center">Not found Images</div>
            )}
          </TabList>
        </EmblaCarousel>
      </TabGroup> */}
    </FormProvider>
  );
};

const GalleryProvider = () => {
  return <></>;
};
export const useDialogGallery = createHookDialog({
  content: <GalleryProvider />,
});
