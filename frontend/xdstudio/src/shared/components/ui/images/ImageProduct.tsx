import type {
  Image as ImageType,
  Maybe,
} from "@/libs/graphql/generates/graphql";
import clsx from "clsx";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export const ImageProduct = ({
  image,
  classNames,
  ...prop
}: Partial<React.ComponentProps<typeof Image>> & {
  image: Maybe<ImageType> | undefined;
} & WithClassNames<"error" | "image">) => {
  const [hasImageError, setHasImageError] = useState(false);

  const imageUrl = image?.src?.url ?? "";
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
        height: image.src?.height,
        width: image.src?.width,
      };
  return (
    <Image
      {...prop}
      {...sizeProps}
      src={imageUrl}
      className={clsx(
        `border bg-accent object-contain`,
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
