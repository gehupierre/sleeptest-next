"use client";

import React from "react";
import { Variants } from "framer-motion";
import { ANIMATION } from "@components/hero/config";
import {
  SliderImages,
  SliderImagesProps,
} from "@components/hero/slider-images";

type SlideshowImagesProps = Omit<SliderImagesProps, "variants"> & {
  variants?: Variants;
};
export const SlideshowImages: React.FC<SlideshowImagesProps> = ({
  images,
  variants = ANIMATION.VARIANTS,
  duration = ANIMATION.DURATION,
}) => {
  return (
    <SliderImages images={images} variants={variants} duration={duration} />
  );
};
