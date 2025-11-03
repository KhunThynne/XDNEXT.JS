"use client";
import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import type { Image, ImageFieldOutput } from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Card, CardContent } from "@/libs/shadcn/ui/card";
import type { GalleryMediaProps } from "@/shared/components/ui/GalleryImage/GalleryImageProvider";
import { GalleryImageProvider } from "@/shared/components/ui/GalleryImage/GalleryImageProvider";
import { useGalleryImage } from "@/shared/components/ui/GalleryImage/useGalleryImage";
import { TabsComponent } from "@/shared/components/ui/TabsComponent";
import { useRouter } from "@navigation";
import clsx from "clsx";
import { X } from "lucide-react";

import React from "react";
const mockGallery = [
  {
    id: "0",
    altText: "0",
    type: "image",
    item: {
      width: 5000,
      height: 3333,
      url: "https://picsum.photos/id/0/5000/3333",
      id: "",
    },
  },

  {
    id: "1",
    altText: "1",
    type: "image",
    item: {
      width: 5000,
      height: 3333,
      url: "https://picsum.photos/id/1/5000/3333",
      id: "",
    },
  },
  {
    id: "2",
    altText: "2",
    type: "image",
    item: {
      width: 5000,
      height: 3333,
      url: "https://picsum.photos/id/2/5000/3333",
      id: "",
    },
  },
  {
    id: "3",
    altText: "3",
    type: "image",
    item: {
      width: 5000,
      height: 3333,
      url: "https://picsum.photos/id/3/5000/3333",
      id: "",
    },
  },
  {
    id: "4",
    altText: "4",
    type: "image",
    item: {
      width: 5000,
      height: 3333,
      url: "https://picsum.photos/id/4/5000/3333",
      id: "",
    },
  },
] satisfies GalleryMediaProps[];

export const GalleryComponent = ({ children }: WithChildren) => {
  return (
    <GalleryImageProvider medias={mockGallery}>
      <article className="relative flex h-full flex-col">
        <section className="relative grow">
          <PreviewGallery />
        </section>
        <section className="flex-none">
          <GalleryCarousel />
        </section>

        {children}
      </article>
    </GalleryImageProvider>
  );
};

const ButtonCloseGallery = (props: React.ComponentProps<typeof Button>) => {
  const router = useRouter();
  return (
    <Button {...props} onClick={router.back}>
      <X />
    </Button>
  );
};
const PreviewGallery = () => {
  return (
    <div className="absolute inset-0">
      <img
        className="size-full object-contain"
        src={"https://picsum.photos/id/3/5000/3333"}
        alt="test"
      />
    </div>
  );
};

const GalleryCarousel = () => {
  const { medias } = useGalleryImage();
  return (
    <EmblaCarousel
      options={{}}
      selectedIndex={4}
      className="h-60"
      classNames={{ container: "gap-4 mx-5 py-2", view: "" }}
    >
      {medias.map(({ type, item, altText }, key) => {
        return (
          <Button
            key={key}
            variant={"ghost"}
            // className={`group relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
            //   index === currentIndex
            //     ? "h-24 w-32 ring-2 ring-primary"
            //     : "h-20 w-28 opacity-60 hover:opacity-100"
            // }`}
            className={clsx(
              "h-full w-80 p-0",
              `opacity-60 hover:opacity-100`,
              `overflow-hidden transition-all duration-300`
            )}
          >
            {type === "image" ? (
              <img
                src={item.url}
                className="aspect-video size-full object-cover"
              />
            ) : (
              <iframe />
            )}
          </Button>
        );
      })}
    </EmblaCarousel>
  );
};
