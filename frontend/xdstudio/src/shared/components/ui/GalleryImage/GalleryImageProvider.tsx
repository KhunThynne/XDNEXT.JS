import type { ImageFieldOutput } from "@/libs/graphql/generates/graphql";
import { createContext, useContext, useState } from "react";
export interface GalleryMediaProps {
  id: string;
  altText: string;
  item: Partial<ImageFieldOutput>;
  type: "image" | "video";
}
type GalleryImageContextType = {
  medias: GalleryMediaProps[];
};
const GalleryImageContext = createContext<GalleryImageContextType | undefined>(
  undefined
);

export function GalleryImageProvider({
  children,
  medias,
  defaultIndex = 0,
}: WithChildren & {
  defaultIndex?: number;
} & GalleryImageContextType) {
  const [index, setIndex] = useState<number>(defaultIndex);
  return (
    <GalleryImageContext value={{ medias }}>{children}</GalleryImageContext>
  );
}

export const useGalleryImageDispatcher = () => {
  const ctx = useContext(GalleryImageContext);
  if (!ctx)
    throw new Error(
      "useGalleryImageRenderer must be used within GalleryImageProvider"
    );
  return ctx;
};
