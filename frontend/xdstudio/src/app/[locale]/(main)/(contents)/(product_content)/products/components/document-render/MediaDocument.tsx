import EmblaCarousel from "@/libs/embla-carousel/EmblaCarousel";
import type {
  Image as ImageType,
  Maybe,
  Product,
  Product_Media_Document,
} from "@/libs/graphql/generates/graphql";
import { Separator } from "@radix-ui/react-separator";
import clsx from "clsx";
import { ImageOff } from "lucide-react";
import Image from "next/image";

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

const Gallery = () => {
  return (
    <EmblaCarousel className="h-25">
      {/* <div className="min-w-xs h-full border bg-amber-400" />
      <div className="min-w-xs size-40 border" /> */}
      <p className="mx-auto place-self-center text-3xl opacity-30">
        Comming soon ..
      </p>
    </EmblaCarousel>
  );
};
function getUrlMediaType(url: string): "image" | "video" | "unknown" {
  if (/youtube\.com|youtu\.be/.test(url)) return "video";

  const ext = url?.split(".").pop()?.toLowerCase().split("?")[0] ?? "";

  const imageExts = ["jpg", "jpeg", "png", "gif", "webp", "avif"];
  const videoExts = ["mp4", "webm", "ogg", "mov", "m4v"];

  if (imageExts.includes(ext)) return "image";
  if (videoExts.includes(ext)) return "video";
  return "unknown";
}

const UrlMediaTypeComponent = ({
  media,
  className,
}: MediaUrlType & WithClassName) => {
  const url = media.value;
  const mediaType = getUrlMediaType(url);

  // helper แปลง YouTube URL เป็น embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  // ตรวจสอบประเภท
  const isExternalVideo =
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("vimeo.com");

  if (mediaType === "image") {
    return (
      <img
        src={url}
        alt=""
        className={className}
        style={{ objectFit: "cover", borderRadius: 8 }}
      />
    );
  }

  if (isExternalVideo) {
    const embedUrl = getEmbedUrl(url);
    return (
      <iframe
        src={embedUrl}
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

  return (
    <a href={url} target="_blank" rel="noreferrer" className={className}>
      Open Media
      {url}
    </a>
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
  props: MediaItem & WithClassNames<"relation" | "url">
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
      <UrlMediaTypeComponent media={media} className={props.classNames?.url} />
    );
  return null;
};

export const MediaDocument = (props: Maybe<Product["media"]>) => {
  if (!props) {
    return;
  }
  const { document } = props;
  const [block] = document.filter((b: any) => b.type === "component-block");
  const Items = block.props.items;
  return (
    <div className="flex grow flex-col gap-3">
      <div className="relative aspect-video overflow-hidden rounded-lg border">
        <MediaComponent
          {...(Items[0] as MediaItem)}
          classNames={{ relation: "object-contain" }}
        />

        {/* <iframe
                  className="absolute top-0 left-0 h-full w-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${props.youtubeId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                /> */}
      </div>
      {/* {JSON.stringify(block)} */}
      <Separator />
      <EmblaCarousel className="h-25">
        <MediaComponent {...(Items as MediaItem)} />
      </EmblaCarousel>
    </div>
  );
};
