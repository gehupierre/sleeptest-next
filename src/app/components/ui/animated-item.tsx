"use client";

import React from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";

const ANIMATED_ITEM_TYPES = {
  div: motion.div,
  span: motion.span,
  img: motion.img,
};
const DEFAULT_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  show: (active) => {
    return active
      ? {
          opacity: 1,
          transition: {
            duration: 2,
            delay: 0.2,
          },
        }
      : { opacity: 0 };
  },
};
type ComponentTypeKey = keyof typeof ANIMATED_ITEM_TYPES;
type AnimatedItemProps = {
  children?: React.ReactNode;
  itemType?: string;
  variants?: Variants;
  className?: string;
  custom?: number | boolean;
  [key: string]: any;
};
export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  itemType = "div",
  variants = DEFAULT_VARIANTS,
  className,
  ...props
}) => {
  const ComponentType = ANIMATED_ITEM_TYPES[itemType as ComponentTypeKey];

  return (
    <AnimatePresence>
      <ComponentType
        initial="hidden"
        animate="show"
        variants={variants}
        className={className}
        {...props}
      >
        {children ?? null}
      </ComponentType>
    </AnimatePresence>
  );
};
