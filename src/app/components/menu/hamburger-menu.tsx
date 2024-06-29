import { useState } from "react";
import { motion } from "framer-motion";
import { NavItem } from "@components/ui/nav/nav-item";

export function HamburgerMenu({}) {
  const [isExpanded, setIsExpanded] = useState<boolean>();
  return (
    <div className="lg:hidden relative text-right p-3">
      <button
        className="h-10 w-10 bg-ion-orange"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <span
          className={`block h-0.5 w-7 mx-auto my-1 bg-white transition delay-150 ${
            isExpanded ? "rotate-[-45deg] translate-y-[8px]" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 mx-auto my-2 bg-white transition delay-150 ${
            isExpanded ? "rotate-45 translate-y-[-2px]" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-7 mx-auto my-1 bg-white transition-opacity delay-250 ease-in ${
            isExpanded ? "opacity-0 mb-0" : ""
          }`}
        />
        <span className="sr-only">Open main menu</span>
      </button>
      {isExpanded ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{
            delay: 0.2,
            type: "spring",
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute w-60 right-2 bg-white p-2 pb-4"
        >
          <NavItem href="#step-1" label="living with sleep apnea" />
          <NavItem href="#step-2" label="testing for sleep apnea" />
          <NavItem href="#step-3" label="treating sleep apnea" />
          <NavItem href="#step-4" label="stories and news" />
          <NavItem href="#step-5" label="get diagnosed" />
          <NavItem
            href="#login"
            label="Login"
            className="text-ion-orange uppercase"
          />
        </motion.div>
      ) : null}
    </div>
  );
}
