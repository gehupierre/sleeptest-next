"use client";

import React from "react";
import { ArrowRightIcon } from "@components/ui/icons/arrow-right";

type TextProps = {
  title: string;
  content: string;
  ctaText: string;
  ctaHref: string;
};

export const SlideshowText: React.FC<TextProps> = ({
  title,
  content,
  ctaText,
  ctaHref,
}) => {
  return (
    <div className="">
      <h3 className="text-ion-bluesky text-2xl font-light mb-1">{title}</h3>
      <p>{content}</p>
      <div className="my-4">
        <a
          href={ctaHref}
          className="text-ion-orange hover:text-ion-blue text-lg"
        >
          {ctaText} <ArrowRightIcon className="inline-block mb-[2px]" />
        </a>
      </div>
    </div>
  );
};
