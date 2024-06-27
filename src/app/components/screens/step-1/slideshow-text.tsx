"use client";

import React from "react";
import { AnimatedItem } from "@components/ui/animated-item";
import { useAnimatedList } from "@app/hooks/use-animated-list";
import { TextProps } from "./config";

const TextComp: React.FC<TextProps> = ({
  title,
  content,
  ctaText,
  ctaHref,
}) => {
  return (
    <div className="">
      <h3 className="text-ion-bluesky text-2xl font-light">{title}</h3>
      <p>{content}</p>
      <div className="my-4">
        <a href={ctaHref} className="text-ion-orange text-lg">
          {ctaText}
        </a>
      </div>
    </div>
  );
};
type SlideshowTextProps = {
  texts: TextProps[];
  duration?: number;
};
export const SlideshowText: React.FC<SlideshowTextProps> = ({
  duration = 5,
  texts,
}) => {
  const { index: textIndex } = useAnimatedList({
    duration,
    total: texts.length,
  });

  return (
    <div className="relative w-[640px] h-40 top-40 left-0">
      {texts.map((textProps, i) => (
        <AnimatedItem
          key={i}
          className={`absolute bg-gray-900/75 text-white px-40 py-6 ${
            textIndex === i ? "block" : "hidden"
          }`}
          custom={textIndex === i}
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
          <TextComp {...textProps} />
        </AnimatedItem>
      ))}
    </div>
  );
};
