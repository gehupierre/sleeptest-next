"use client";

import React from "react";
import { Variants } from "framer-motion";
import { AnimatedItem } from "@components/ui/animated-item";
import { useAnimatedList } from "@app/hooks/use-animated-list";

export type SliderImagesProps = {
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
export const SliderImages: React.FC<SliderImagesProps> = ({
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
      <div className="relative w-[1280px] h-[480px]">
        {images.map((img, i) => {
          return (
            <AnimatedItem
              key={i}
              width={1280}
              height={480}
              alt={img.alt}
              src={img.src}
              initial={{ opacity: 1 }}
              itemType="img"
              className="absolute"
              variants={variants}
              custom={
                // Note: Determine current and next index to mimic cross-fade
                i === slide ||
                i + 1 === slide ||
                (slide === 0 && i === images.length)
              }
            />
          );
        })}
      </div>

      {showControls && (
        <div className="relative bottom-10 flex justify-end right-0 px-6">
          {images.map((_, i) => (
            <button
              key={i}
              className={`h-4 w-4 mx-2 rounded-full ${
                i === slide ? "bg-ion-bluesky" : "bg-black/50"
              }`}
              onClick={() => showIndex(i)}
            />
          ))}
        </div>
      )}

      {texts && (
        <div className="relative w-[640px] h-40 bottom-[340px] left-0">
          {texts.map((textProps, i) => (
            <AnimatedItem
              key={i}
              className={`absolute bg-gray-900/75 text-white px-40 py-6 ${
                slide === i ? "block" : "hidden"
              }`}
              custom={slide === i}
              variants={{
                hidden: { opacity: 0, x: -620 },
                show: (active) => {
                  return active
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 1,
                          delay: 0.2,
                          type: "spring",
                          ease: "easeInOut",
                          damping: 9,
                        },
                      }
                    : { opacity: 0 };
                },
              }}
            >
              {TextComp ? <TextComp {...textProps} /> : null}
            </AnimatedItem>
          ))}
        </div>
      )}
    </>
  );
};
