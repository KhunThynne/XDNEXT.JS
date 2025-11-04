import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import type {
  Image as ImageType,
  Maybe,
  Product,
} from "@/libs/graphql/generates/graphql";
import { Button } from "@/libs/shadcn/ui/button";
import { Separator } from "@radix-ui/react-separator";
import clsx from "clsx";
import _ from "lodash";
import { ImageOff, SquarePlay } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

interface MediaRelationship {
  media: {
    discriminant: "relationship";
    value: {
      id: string;
      label: string;
      data: ImageType;
    };
  };
}

interface MediaUrlType {
  media: {
    discriminant: "url";
    value: string;
  };
}

type MediaItem = MediaRelationship | MediaUrlType;

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

const UrlMediaTypeComponent = ({
  media,
  className,
  preview,
}: MediaUrlType & WithClassName & { preview?: true }) => {
  const url = media.value;
  const mediaType = getUrlMediaType(url);
  const [valid, setValid] = useState(true);
  const embedUrl = useMemo(() => getEmbedUrlHandle(url), [url]);
  if (!url || !valid) return "error url please delete or fix this item";
  // helper แปลง YouTube URL เป็น embed URL

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
          className={className}
          style={{ width: "100%", borderRadius: 8 }}
        />
      );
    }
  }

  return (
    <>
      {embedUrl.type === "video" && (
        <SquarePlay className="absolute right-4 bottom-4 size-8 text-xd/80" />
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
const RalationMediaTypeComponent = ({
  id,
  media,
  ...imageProps
}: MediaRelationship & Partial<React.ComponentProps<typeof Image>>) => {
  const { altText, name, src } = media.value.data;
  if (src?.url)
    return <Image fill src={src?.url} alt={altText ?? ``} {...imageProps} />;
  return <ImageOff className={imageProps.className} />;
};
const MediaComponent = (
  props: MediaItem & WithClassNames<"relation" | "url"> & { preview?: true }
) => {
  const { media } = props;
  if (media?.discriminant === "relationship")
    return (
      <RalationMediaTypeComponent
        media={media}
        className={props.classNames?.relation}
      />
    );
  if (media?.discriminant === "url")
    return (
      <UrlMediaTypeComponent
        media={media}
        className={props.classNames?.url}
        preview={props.preview}
      />
    );
  return null;
};

export const MediaDocument = (props: Maybe<Product["media"]>) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  if (!props) {
    return;
  }
  const { document } = props;
  const [block] = document.filter((b: any) => b.type === "component-block");
  const items = block?.props?.items as MediaItem[];

  return (
    <div className="flex grow flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-lg border">
        {_.isArray(items) && (
          <MediaComponent
            preview
            {...(items[mediaIndex] as MediaItem)}
            classNames={{ relation: "object-contain" }}
          />
        )}
      </div>
      <Separator />
      {_.isArray(items) && (
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
          {items?.map((item, index) => {
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
                    ? `scale-105 opacity-100 ring-2 ring-primary`
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
