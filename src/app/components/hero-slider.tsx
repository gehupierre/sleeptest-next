"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  Variants,
  animate,
  motion,
  useMotionValue,
} from "framer-motion";

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
  DURATION: 2.5,
};

export function HeroSlider() {
  const [slide, setSlide] = useState<number>(0);
  const sliderPos = useMotionValue(slide);

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

  return (
    <div>
      <div className="hidden">
        <Image
          src="/images/loading.gif"
          alt="loading..."
          width={150}
          height={150}
        />
      </div>
      <div>
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
      </div>
      <div className="title-wrapper hidden">
        <div className="title-holder">
          <strong className="title">remember sleeping like this?</strong>
          <strong className="title">what happened?</strong>
          <strong className="title">know now for little or no cost...</strong>
          <strong className="title">...with a home sleep apnea test!</strong>
          <strong className="title home-sleep-test-slide">
            <Image
              width={640}
              height={160}
              alt="Banner CTA"
              src="/images/call-to-action-banner.png"
            />
          </strong>
        </div>
      </div>
    </div>
  );
}
