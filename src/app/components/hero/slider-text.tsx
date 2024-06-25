"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { ImageSpec } from "@components/hero/config";

const baseTitleStyle =
  "h-[56px] w-[640px] text-4xl font-extralight my-12 mx-auto px-14 text-center";

type SliderText = {
  texts: Array<string | ImageSpec>;
  duration?: number;
};
export const SliderText: React.FC<SliderText> = ({ duration = 5, texts }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [titleIndex, setIndex] = useState<number>(rounded.get());

  useEffect(() => {
    const controls = animate(count, 5, {
      duration: duration * 10,
    });

    return () => {
      controls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setIndex(latest);
  });

  return (
    <motion.div
      className={`absolute ${
        rounded.get() === 0 ? "" : "bg-gray-900/75"
      } text-white`}
      style={{
        width: 640,
        height: 160,
        top: 160,
        left: 320,
      }}
    >
      {texts.map((text, i) => (
        <strong
          key={i}
          className={`${baseTitleStyle} ${
            typeof text === "string" ? "" : "my-3"
          } ${titleIndex === i + 1 ? "block" : "hidden"}`}
        >
          {typeof text === "string" ? (
            text
          ) : (
            <Image
              width={text.width ?? 640}
              height={text.height ?? 160}
              alt={text.alt}
              src={text.src}
            />
          )}
        </strong>
      ))}
    </motion.div>
  );
};
