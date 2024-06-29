"use client";

import React from "react";
import Image from "next/image";

import { SliderText } from "@components/ui/slider/slider-text";
import { SliderImages } from "@components/ui/slider/slider-images";
import { ANIMATION } from "@components/hero/config";

export function HeroSlider() {
  return (
    <section>
      <Image
        src="/images/banner2-sm.jpg"
        alt="Take free risk assessment test"
        className="mx-auto md:hidden"
        width={640}
        height={480}
      />
      <div className="hidden md:block relative h-[480px]">
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
