"use client";

import { SLIDESHOW } from "@components/screens/step-1/config";
import { SlideshowText } from "@components/screens/step-1/slideshow-text";
import { SliderImages } from "@components/ui/slider/slider-images";
import { ANIMATION } from "@components/hero/config";

export function ScreenStepOne() {
  return (
    <section>
      <div id="step-1" className="flex w-full bg-white px-40 py-6">
        <h2 className="flex-1 text-4xl font-extralight text-ion-blue">
          sleep better. live better.
        </h2>
        <div className="flex-1">
          <h3 className="text-xl font-light text-ion-blue mb-3">
            Live life the way it was meant to be...
            <br /> starting with a good night&apos;s sleep!
          </h3>
          <p className="text-slate-600">
            43 million people suffer from Sleep Disordered Breathing, the most
            common is Obstructive Sleep Apnea (OSA) and 80% remain undiagnosed.
            People with untreated sleep apnea stop breathing during sleep, which
            means the brain and body may not get enough oxygen to function
            normally. This erodes your quality-of-life and can cause related
            health problems like diabetes, stroke, cancer and heart failure.
          </p>
        </div>
      </div>
      <div className="relative-">
        <SliderImages
          variants={ANIMATION.VARIANTS}
          duration={ANIMATION.DURATION}
          images={SLIDESHOW.images}
          texts={SLIDESHOW.texts}
          TextComp={SlideshowText}
          showControls={true}
        />
      </div>
      <div className="h-96"></div>
    </section>
  );
}
