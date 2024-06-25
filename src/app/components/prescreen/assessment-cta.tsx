import Image from "next/image";

export const AssessmentCTA: React.FC = () => {
  return (
    <a href="#popup-03" className="w-full block bg-white py-12">
      <Image
        src="/images/take_free_test_banner.jpg"
        alt="Take free risk assessment test"
        className="mx-auto"
        width={960}
        height={110}
      />
    </a>
  );
};
