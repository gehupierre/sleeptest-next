"use client";

import React from "react";
import { Variants } from "framer-motion";
import { useAnimatedList } from "@app/hooks/use-animated-list";
import { SliderControls } from "./slider-controls";
import { SliderText } from "./slider-text";
import { SliderImages } from "./slider-images";

export type SliderProps = {
  images: {
    alt: string;
    src: string;
  }[];
  variants: Variants;
  duration?: number;
  showControls?: boolean;
  texts?: any[];
  TextComp?: any;
};
export const Slider: React.FC<SliderProps> = ({
  images,
  variants,
  duration = 5,
  showControls = false,
  texts,
  TextComp,
}) => {
  const { index: slide, showIndex } = useAnimatedList({
    duration,
    total: images.length,
  });

  return (
    <>
      <SliderImages images={images} variants={variants} slide={slide} />
      <SliderControls
        items={images}
        slide={slide}
        showIndex={showIndex}
        show={showControls}
      />
      <SliderText texts={texts} slide={slide} TextComp={TextComp} />
    </>
  );
};
