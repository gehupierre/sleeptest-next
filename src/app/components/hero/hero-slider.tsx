"use client";

import React, { Suspense } from "react";

import { Loading } from "@ui/loading";
import { SliderImages } from "@components/hero/slider-images";
import { SliderText } from "@components/hero/slider-text";
import { ANIMATION } from "@components/hero/config";

export function HeroSlider() {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <div className="relative h-[480px]">
          <SliderImages
            images={ANIMATION.IMAGES}
            variants={ANIMATION.VARIANTS}
            duration={ANIMATION.DURATION}
          />
          <SliderText duration={ANIMATION.DURATION} texts={ANIMATION.TEXTS} />
        </div>
      </Suspense>
    </section>
  );
}
