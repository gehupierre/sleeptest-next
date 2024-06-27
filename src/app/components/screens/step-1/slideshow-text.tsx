"use client";

import React from "react";

type TextProps = {
  title: string;
  content: string;
  ctaText: string;
  ctaHref: string;
};

export const TextComp: React.FC<TextProps> = ({
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
