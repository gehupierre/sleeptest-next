"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import { AnimatedItem } from "@components/ui/animated-item";

export type SliderImagesProps = {
  images?: {
    alt: string;
    src: string;
  }[];
  variants: Variants;
  slide?: number;
};
export const SliderImages: React.FC<SliderImagesProps> = ({
  images,
  variants,
  slide,
}) => {
  return (
    images && (
      <motion.div className="relative w-[1280px] h-[480px]">
        {images.map((img, i) => {
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
                i === slide ||
                i + 1 === slide ||
                (slide === 0 && i === images.length)
              }
            />
          );
        })}
      </motion.div>
    )
  );
};
