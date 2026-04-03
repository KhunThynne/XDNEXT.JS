import Image from "next/image";
import React from "react";

export const QrCodePreview = ({
  image,
}: {
  image: React.ComponentPropsWithoutRef<typeof Image>;
}) => {
  return (
    <>
      <Image fill {...image} />
    </>
  );
};
