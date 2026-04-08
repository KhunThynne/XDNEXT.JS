import { env } from "@/env";
import type { Media } from "@/payload-types";
import clsx from "clsx";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export const ImageProduct = ({
  image,
  classNames,
  ...prop
}: Partial<React.ComponentProps<typeof Image>> & {
  image: Media | undefined;
} & WithClassNames<"error" | "image">) => {
  const [hasImageError, setHasImageError] = useState(false);

  const imageUrl = `${env.NEXT_PUBLIC_SITE_URL}/${image?.url}`;

  if (!image || hasImageError)
    return (
      <ImageOff
        className={clsx(
          `self-center rounded border`,
          prop.className,
          classNames?.error
        )}
      />
    );
  const sizeProps = prop.fill
    ? {}
    : {
        height: image.height ?? 0,
        width: image.width ?? 0,
      };
  return (
    <Image
      {...prop}
      {...sizeProps}
      src={imageUrl}
      className={clsx(
        `bg-accent border object-contain`,
        prop.className,
        classNames?.image
      )}
      alt={image.altText ?? `product-image-unkhown`}
      onError={() => {
        setHasImageError(true);
      }}
      key={image.id}
    />
  );
};
