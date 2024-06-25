"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  Variants,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Loading } from "@ui/loading";

const images = [
  { alt: "Banner step 1", src: "/images/banner0.jpg" },
  { alt: "Banner step 2", src: "/images/banner1.jpg" },
  { alt: "Banner step 3", src: "/images/banner2.jpg" },
  { alt: "Banner step 4", src: "/images/banner1.jpg" },
  { alt: "Banner step 5", src: "/images/banner2.jpg" },
];

const ANIMATION = {
  VARIANTS: {
    item: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.2,
        },
      },
    } as Variants,
  },
  DURATION: 3.5,
};

export function HeroSlider() {
  const [slide, setSlide] = useState<number>(0);
  const sliderPos = useMotionValue(slide);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const titleIndex = rounded.get();
  const baseTitleStyle =
    "h-[56px] w-[640px] text-4xl font-extralight my-12 mx-auto px-14 text-center";

  useEffect(() => {
    const sliding = animate(sliderPos, slide, {
      duration: ANIMATION.DURATION,
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

  useEffect(() => {
    const controls = animate(count, 5, {
      duration: ANIMATION.DURATION * 10,
    });

    return () => controls.stop();
  }, [count]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="relative">
        <AnimatePresence>
          <motion.img
            key={slide}
            custom={slide}
            width={1280}
            height={480}
            alt={images[slide].alt}
            src={images[slide].src}
            variants={ANIMATION.VARIANTS.item}
            initial={{ opacity: 0.5 }}
            animate="show"
          />
        </AnimatePresence>
        {<motion.h1>{rounded}</motion.h1>}

        <div
          className={`absolute ${
            titleIndex === 0 ? "" : "bg-gray-900/75"
          } text-white`}
          style={{
            width: 640,
            height: 160,
            top: 160,
            left: 320,
          }}
        >
          <strong
            className={`${baseTitleStyle} ${
              titleIndex === 1 ? "block" : "hidden"
            }`}
          >
            remember sleeping like this?
          </strong>

          <strong
            className={`${baseTitleStyle} ${
              titleIndex === 2 ? "block" : "hidden"
            }`}
          >
            what happened?
          </strong>
          <strong
            className={`${baseTitleStyle} ${
              titleIndex === 3 ? "block" : "hidden"
            }`}
          >
            know now for little or no cost...
          </strong>
          <strong
            className={`${baseTitleStyle} ${
              titleIndex === 4 ? "block" : "hidden"
            }`}
          >
            ...with a home sleep apnea test!
          </strong>
          <strong
            className={`${baseTitleStyle} my-3 ${
              titleIndex === 5 ? "block" : "hidden"
            } home-sleep-test-slide`}
          >
            <Image
              width={640}
              height={160}
              alt="Banner CTA"
              src="/images/call-to-action-banner.png"
            />
          </strong>
        </div>
      </div>
    </Suspense>
  );
}
