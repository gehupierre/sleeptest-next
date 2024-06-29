import React from "react";

type SliderControlsProps = {
  items: any[];
  showIndex: (index: number) => void;
  slide?: number;
  show?: boolean;
};
export const SliderControls: React.FC<SliderControlsProps> = ({
  items = [],
  showIndex,
  slide = 0,
  show = false,
}) => {
  return (
    show && (
      <div className="relative bottom-10 flex justify-end right-0 px-6">
        {items.map((_, i) => (
          <button
            key={i}
            className={`h-4 w-4 mx-2 rounded-full ${
              i === slide ? "bg-ion-bluesky" : "bg-black/50 hover:bg-slate-400"
            }`}
            onClick={() => showIndex(i)}
          />
        ))}
      </div>
    )
  );
};
