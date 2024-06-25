import { Variants } from "framer-motion";

export type ImageSpec = {
  alt: string;
  href: string;
  src: string;
  width?: number;
  height?: number;
};

export const ANIMATION = {
  VARIANTS: {
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
  } as Variants,
  IMAGES: [
    { alt: "Banner step 1", src: "/images/banner0.jpg" },
    { alt: "Banner step 2", src: "/images/banner1.jpg" },
    { alt: "Banner step 3", src: "/images/banner2.jpg" },
    { alt: "Banner step 4", src: "/images/banner1.jpg" },
    { alt: "Banner step 5", src: "/images/banner2.jpg" },
  ],
  TEXTS: [
    "remember sleeping like this?",
    "what happened?",
    "know now for little or no cost...",
    "...with a home sleep apnea test!",
    {
      width: 640,
      height: 160,
      href: "#popup-01",
      alt: "Banner CTA",
      src: "/images/call-to-action-banner.png",
    } as ImageSpec,
  ],
  DURATION: 3.5,
};
