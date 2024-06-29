import React from "react";
import { ArrowDownIcon } from "@components/ui/icons/arrow-down";
import { PhoneIcon } from "@components/ui/icons/phone";
import { FacebookIcon } from "@components/ui/icons/facebook";
import { TwitterIcon } from "@components/ui/icons/twitter";

type StepCTAProps = {
  label: string;
};

function StepCTA({ label }: StepCTAProps) {
  return (
    <a
      href="#step-1"
      className="text-ion-green hover:text-ion-blue group block md:inline text-center md:text-left"
    >
      <span className="text-lg">{label}</span>
      <div className="hidden md:inline-block w-3 h-4 ml-4">
        <span className="sr-only">arrow</span>
        <div className="h-3 w-[3px] mb-[-8px] mx-[10.5px] bg-ion-green group-hover:bg-ion-blue" />
        <ArrowDownIcon className="w-4 h-4" />
      </div>
    </a>
  );
}

function PhoneCTA() {
  return (
    <div className="flex justify-end text-ion-orange md:text-lg my-2">
      <PhoneIcon />
      <span className="ml-2">
        Call now for assistance - <a href="tel:1-888-866-5168">888.866.5168</a>{" "}
        - 24/7
      </span>
    </div>
  );
}

function SocialCTA() {
  return (
    <ul className="flex justify-end w-auto mx-2">
      <li className="w-7">
        <a href="#" aria-label="Facebook">
          <FacebookIcon />
        </a>
      </li>
      <li className="w-7 mx-2">
        <a href="#" aria-label="Tweet">
          <TwitterIcon />
        </a>
      </li>
    </ul>
  );
}

type StepsCTAMenuProps = StepCTAProps & {
  className?: string;
};
export const StepsCTAMenu: React.FC<StepsCTAMenuProps> = ({
  label,
  className,
}) => {
  return (
    <div
      className={`block md:flex w-full justify-between bg-white md:px-40 py-6 ${className}`}
    >
      <StepCTA label={label} />
      <PhoneCTA />
      <SocialCTA />
    </div>
  );
};
