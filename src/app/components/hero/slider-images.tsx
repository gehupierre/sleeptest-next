"use client";

import React from "react";
import { Variants } from "framer-motion";
import { AnimatedItem } from "@components/ui/animated-item";
import { useAnimatedList } from "@app/hooks/use-animated-list";

type SliderImagesProps = {
  images: {
    alt: string;
    src: string;
  }[];
  variants: Variants;
  duration?: number;
};
export const SliderImages: React.FC<SliderImagesProps> = ({
  images,
  variants,
  duration = 5,
}) => {
  const { index: slide } = useAnimatedList({
    duration,
    total: images.length,
  });

  return images.map((img, i) => {
    return (
      <AnimatedItem
        key={i}
        width={1280}
        height={480}
        alt={img.alt}
        src={img.src}
        initial={{ opacity: 1 }}
        itemType="img"
        className="absolute"
        variants={variants}
        custom={
          // Note: Determine current and next index to mimic cross-fade
          i === slide || i + 1 === slide || (slide === 0 && i === images.length)
        }
      />
    );
  });
};
