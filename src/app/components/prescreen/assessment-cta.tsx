import Image from "next/image";

export const AssessmentCTA: React.FC = () => {
  return (
    <a
      href="#popup-03"
      className="w-full hidden md:block bg-white p-2 md:pb-12"
    >
      <Image
        src="/images/take_free_test_banner.jpg"
        alt="Take free risk assessment test"
        // Note: opacity on image to prevent loosing white bg
        className="mx-auto hover:opacity-80"
        width={960}
        height={110}
      />
    </a>
  );
};
