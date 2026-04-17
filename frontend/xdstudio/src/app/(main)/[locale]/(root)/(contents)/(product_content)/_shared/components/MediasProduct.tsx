import EmblaCarousel from "@/shared/libs/embla-carousel/EmblaCarousel";
import { Button } from "@/shared/libs/shadcn/ui/button";
import type { Media, Product } from "@/payload-types";
import { ImageProduct } from "@/shared/components/images/ImageProduct";
import { Separator } from "@radix-ui/react-separator";
import clsx from "clsx";
import _ from "lodash";
import { ImageOff, SquarePlay } from "lucide-react";
import type Image from "next/image";

import { useDeferredValue, useMemo, useState } from "react";
import { EmptyComponent } from "@/shared/components/EmptyComponent";

function getUrlMediaType(url: string): "image" | "video" | "unknown" {
  if (/youtube\.com|youtu\.be/.test(url)) return "video";

  const ext = url?.split(".").pop()?.toLowerCase().split("?")[0] ?? "";

  const imageExts = ["jpg", "jpeg", "png", "gif", "webp", "avif"];
  const videoExts = ["mp4", "webm", "ogg", "mov", "m4v"];

  if (imageExts.includes(ext)) return "image";
  if (videoExts.includes(ext)) return "video";
  return "unknown";
}

const getEmbedUrlHandle = (url: string) => {
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = new URL(url).searchParams.get("v");
    return {
      url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      video: `https://www.youtube.com/embed/${videoId}`,
      type: "video",
    };
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    return {
      url,
      video: `https://www.youtube.com/embed/${videoId}`,
      type: "video",
    };
  }
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1];
    return {
      url,
      video: `https://player.vimeo.com/video/${videoId}`,
      type: "video",
    };
  }
  return { url, video: "", type: "image" };
};
type ExternalMediaBlock = Extract<
  NonNullable<Product["media"]>[number],
  { blockType: "externalMedia" }
>;

const ExternalMediaTypeComponent = ({
  media,
  className,
  preview,
}: { media: ExternalMediaBlock } & WithClassName & { preview?: true }) => {
  const url = media.url;
  const mediaType = getUrlMediaType(url);
  const [valid, setValid] = useState(true);
  const embedUrl = useMemo(() => getEmbedUrlHandle(url), [url]);
  if (!url || !valid) return "error url please delete or fix this item";
  const isExternalVideo =
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com");
  if (preview) {
    if (isExternalVideo) {
      return (
        <iframe
          src={embedUrl.video}
          className={clsx(`size-full`, className)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (mediaType === "video") {
      return (
        <video
          src={url}
          controls
          preload="metadata"
          className={className}
          style={{ width: "100%", borderRadius: 8 }}
        />
      );
    }
  }

  return (
    <>
      {embedUrl.type === "video" && (
        <SquarePlay className="text-xd/80 absolute right-4 bottom-4 size-8" />
      )}
      <img
        src={embedUrl.url}
        alt={`image`}
        className={className}
        style={{ objectFit: "cover", borderRadius: 8 }}
        onError={() => setValid(false)}
      />
    </>
  );
};
type InternalMediaBlock = Extract<
  NonNullable<Product["media"]>[number],
  { blockType: "internalMedia" }
>;

const InternalMediaTypeComponent = ({
  id,
  media,
  ...imageProps
}: {
  media: InternalMediaBlock;
} & Partial<React.ComponentProps<typeof Image>>) => {
  const mediaData = typeof media === "object" ? media : null;

  if (!mediaData) return null;

  return (
    <ImageProduct
      image={mediaData.file as unknown as Media}
      className={clsx(imageProps.className, "border-none")}
    />
  );
};

const MediaComponent = (
  props: NonNullable<Product["media"]>[number] &
    WithClassNames<"relation" | "url"> & { preview?: true }
) => {
  const media = useDeferredValue(props);

  if (!media) return null;
  const { blockType } = media;
  if (blockType === "internalMedia")
    return (
      <InternalMediaTypeComponent
        media={media}
        className={props.classNames?.relation}
      />
    );
  if (blockType === "externalMedia")
    return (
      <ExternalMediaTypeComponent
        media={media}
        className={props.classNames?.url}
        preview={props.preview}
      />
    );
  return null;
};

export const MediaProduct = (props: Product["media"]) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  if (!props) {
    return;
  }
  const mediaArray = Object.values(props);

  return (
    <div className="flex grow flex-col gap-3">
      <div className="relative aspect-video place-content-center place-items-center overflow-hidden rounded-lg border">
        {_.isArray(mediaArray) && mediaArray.length > 0 ? (
          <MediaComponent
            preview
            {...mediaArray[mediaIndex]}
            classNames={{ relation: "object-contain" }}
          />
        ) : (
          <EmptyComponent
            title="No media"
            button={{ hidden: true }}
            icon={<ImageOff />}
          />
        )}
      </div>
      <Separator />
      {_.isArray(mediaArray) && mediaArray.length > 0 && (
        <EmblaCarousel
          options={{
            loop: true,
            duration: 30,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          selectedIndex={mediaIndex}
          className="h-40"
          classNames={{ container: "gap-4 mx-5 py-2", view: "" }}
        >
          {mediaArray?.map((item, index) => {
            return (
              <Button
                key={`item-image-${index}`}
                variant={"ghost"}
                onClick={() => {
                  setMediaIndex(index);
                }}
                className={clsx(
                  "aspect-video h-full p-0",
                  `cursor-pointer select-none`,
                  `relative overflow-hidden transition-all duration-300`,
                  index === mediaIndex
                    ? `ring-primary scale-105 opacity-100 ring-2`
                    : `opacity-60 hover:opacity-100`
                )}
              >
                <MediaComponent
                  {...item}
                  classNames={{ relation: "object-cover size-full " }}
                />
              </Button>
            );
          })}
        </EmblaCarousel>
      )}
    </div>
  );
};
