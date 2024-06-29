"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedItem } from "@components/ui/animated-item";

type SliderTextProps = {
  texts?: any[];
  slide?: number;
  TextComp?: any;
};
export const SliderText: React.FC<SliderTextProps> = ({
  slide = 0,
  texts,
  TextComp,
}) => {
  return (
    texts && (
      <motion.div className="relative w-[640px] h-40 bottom-[340px] left-0">
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
      </motion.div>
    )
  );
};
