import Image from "next/image";
import { ArrowRightIcon } from "@components/ui/icons/arrow-right";

type VideoCtaProps = {
  imgAlt: string;
  imgSrc: string;
  href?: string;
};
export function VideoCta({ imgSrc, imgAlt, href }: VideoCtaProps) {
  return (
    <div className="relative py-2 mx-auto">
      <Image src={imgSrc} width="259" height="85" alt={imgAlt} />
      {href && (
        <a
          href={href}
          className="absolute text-white bottom-6 left-[50%] translate-x-[-50%] p-3 rounded-3xl bg-black/30 hover:bg-black/50 transition-colors delay-150"
        >
          <span className="sr-only">play</span>
          <ArrowRightIcon className="w-6 h-6" />
        </a>
      )}
    </div>
  );
}
