import Image from "next/image";

export const SleepTestCTA: React.FC = () => {
  return (
    <a href="#popup-03" className="w-full block bg-white md:py-12">
      <Image
        src="/images/call-to-action.png"
        alt="Take free risk assessment test"
        className="mx-auto hidden md:block"
        width={960}
        height={230}
      />
      <div className="md:hidden bg-slate-700 py-4 mb-2">
        <Image
          alt="Do you snore? Are you always tired?"
          src="/images/call-to-action-banner.png"
          width={382}
          height={136}
        />
      </div>
    </a>
  );
};
