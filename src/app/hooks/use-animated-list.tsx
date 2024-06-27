import { useEffect, useState } from "react";
import { animate, useMotionValue } from "framer-motion";

type UseAnimatedProps = {
  duration: number;
  total: number;
  repeat?: number;
};
export function useAnimatedList({
  duration,
  total,
  repeat = Infinity,
}: UseAnimatedProps) {
  const [index, setIndex] = useState<number>(0);
  const [repeatCount, setRepeatCount] = useState<number>(0);
  const count = useMotionValue(index);

  useEffect(() => {
    const sliding = animate(count, index, {
      duration,
      onComplete: () => {
        if (index === total - 1 && repeatCount > 0) {
          setIndex(0);
        } else if (index < total) {
          setIndex(index + 1);
        }

        if (repeatCount < repeat) {
          setRepeatCount(repeatCount + 1);
        }
      },
    });

    return () => {
      sliding.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total]);

  return { index, showIndex: setIndex };
}
