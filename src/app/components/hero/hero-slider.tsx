"use client";

import React from "react";
import Image from "next/image";

import { SliderTextCentered } from "@components/ui/slider/slider-text-centered";
import { Slider } from "@components/ui/slider/slider";
import { ANIMATION } from "@components/hero/config";

export function HeroSlider() {
  return (
    <section>
      <Image
        src="/images/banner2-sm.jpg"
        alt="Take free risk assessment test"
        className="mx-auto lg:hidden"
        width={640}
        height={480}
      />
      <div className="hidden lg:block relative h-[480px]">
        <Slider
          images={ANIMATION.IMAGES}
          variants={ANIMATION.VARIANTS}
          duration={ANIMATION.DURATION}
        />
        <SliderTextCentered
          duration={ANIMATION.DURATION}
          texts={ANIMATION.TEXTS}
        />
      </div>
    </section>
  );
}
