"use client";

import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  Variants,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";

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
  const [slide, setSlide] = useState<number>(0);
  const sliderPos = useMotionValue(slide);
  const lastIndex = images.length - 1;

  useEffect(() => {
    const sliding = animate(sliderPos, slide, {
      duration,
      onComplete: () => {
        if (slide === images.length - 1) {
          setSlide(0);
        } else {
          setSlide(slide + 1);
        }
      },
    });

    return () => {
      sliding.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide]);

  return images.map((img, i) => {
    return (
      <AnimatePresence key={i}>
        <motion.img
          custom={
            // Note: Determine current and next index to mimic cross-fade
            i === slide || i + 1 === slide || (slide === 0 && i === lastIndex)
          }
          width={1280}
          height={480}
          alt={img.alt}
          src={img.src}
          variants={variants}
          initial={{ opacity: 1 }}
          animate="show"
          className="absolute"
        />
      </AnimatePresence>
    );
  });
};
