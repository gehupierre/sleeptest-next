"use client";

import React from "react";

import { SliderText } from "@components/ui/slider/slider-text";
import { SliderImages } from "@components/ui/slider/slider-images";
import { ANIMATION } from "@components/hero/config";

export function HeroSlider() {
  return (
    <section>
      <div className="relative h-[480px]">
        <SliderImages
          images={ANIMATION.IMAGES}
          variants={ANIMATION.VARIANTS}
          duration={ANIMATION.DURATION}
        />
        <SliderText duration={ANIMATION.DURATION} texts={ANIMATION.TEXTS} />
      </div>
    </section>
  );
}
