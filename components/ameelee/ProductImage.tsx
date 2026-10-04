"use client";

import { useState } from "react";
import Image from "next/image";
import Garment from "./Garment";

type Props = {
  src?: string;
  alt: string;
  tint: string;
  sizes: string;
  imgClassName?: string;
  garmentClassName?: string;
};

// photo if there is one (and it loads), hanger garment if not. Parent must be position: relative.
export default function ProductImage({
  src,
  alt,
  tint,
  sizes,
  imgClassName,
  garmentClassName,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <Garment colour={tint} className={garmentClassName} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={imgClassName}
      onError={() => setFailed(true)}
    />
  );
}
