import Image from "next/image";

export const SleepTestCTA: React.FC = () => {
  return (
    <a href="#popup-03" className="w-full block bg-white lg:py-4 xl:py-12">
      <Image
        src="/images/call-to-action.png"
        alt="Take free risk assessment test"
        // Note: opacity on image to prevent loosing white bg
        className="hidden md:block hover:opacity-80 mx-auto"
        width={960}
        height={230}
      />
      <div className="md:hidden bg-slate-700 py-4 mb-2">
        <Image
          alt="Do you snore? Are you always tired?"
          src="/images/call-to-action-banner.png"
          className="mx-auto"
          width={382}
          height={136}
        />
      </div>
    </a>
  );
};
