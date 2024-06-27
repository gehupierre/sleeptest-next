import Image from "next/image";

export const SleepTestCTA: React.FC = () => {
  return (
    <a href="#popup-03" className="w-full block bg-white py-12">
      <Image
        src="/images/call-to-action.png"
        alt="Take free risk assessment test"
        className="mx-auto"
        width={960}
        height={230}
      />
    </a>
  );
};
