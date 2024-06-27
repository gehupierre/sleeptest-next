"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageSpec } from "@components/hero/config";
import { AnimatedItem } from "@components/ui/animated-item";
import { useAnimatedList } from "@app/hooks/use-animated-list";

type SliderTextProps = {
  texts: Array<string | ImageSpec>;
  duration?: number;
};
export const SliderText: React.FC<SliderTextProps> = ({
  duration = 5,
  texts,
}) => {
  const { index: titleIndex } = useAnimatedList({
    duration,
    total: texts.length + 1,
    repeat: 0,
  });

  return (
    <motion.div
      className={`absolute ${
        titleIndex < 2 ? "" : "bg-gray-900/75"
      } text-white`}
      style={{
        width: 640,
        height: 160,
        top: 160,
        left: 320,
      }}
    >
      {texts.map((text, i) => (
        <AnimatedItem
          key={i}
          animate={{
            // Note: Delay 1st frame by 1 step
            opacity: titleIndex === i + 2 ? 1 : 0,
          }}
          className={`h-[56px] w-[640px] text-4xl font-extralight my-12 mx-auto px-14 text-center ${
            typeof text === "string" ? "" : "my-3"
          } ${titleIndex === i + 2 ? "block" : "hidden"}`}
        >
          {typeof text === "string" ? (
            text
          ) : (
            <a href={text.href}>
              <Image
                width={text.width ?? 640}
                height={text.height ?? 160}
                alt={text.alt}
                src={text.src}
              />
            </a>
          )}
        </AnimatedItem>
      ))}
    </motion.div>
  );
};
