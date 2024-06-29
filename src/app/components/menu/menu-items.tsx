"use client";

import { useState } from "react";
import { NavDropdownIcon } from "@components/ui/nav/nav-dropdown-icon";
import {
  NavDropDown,
  NavDropDownListItem,
} from "@components/ui/nav/nav-dropdown";
import { NavItem } from "@components/ui/nav/nav-item";
import { ArrowRightIcon } from "@components/ui/icons/arrow-right";

export function MenuItems() {
  const [isHovered, setHovered] = useState<boolean>();

  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="hidden md:flex justify-end lg:flex-grow">
        <NavItem
          label="about sleep apnea"
          href="#responsive-header"
          icon={
            <NavDropdownIcon
              style={{
                transform: isHovered ? "rotate(180deg)" : "",
                transition: "transform 0.2s ease-in-out",
              }}
            />
          }
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <NavDropDown isOpened={isHovered}>
            <NavDropDownListItem
              href="#step-1"
              label="living with sleep apnea"
            />
            <NavDropDownListItem
              href="#step-2"
              label="testing for sleep apnea"
            />
            <NavDropDownListItem href="#step-3" label="treating sleep apnea" />
            <NavDropDownListItem href="#step-4" label="stories and news" />
            <NavDropDownListItem
              href="#step-5"
              label="get diagnosed"
              className="text-ion-orange"
            />
          </NavDropDown>
        </NavItem>
        <NavItem label="free sleep risk score" href="#popup-03" />
        <NavItem label="get diagnosed" href="#step-5" />
        <NavItem
          label="login"
          href="#login"
          icon={<ArrowRightIcon className="ml-[5px]" />}
          className="inline-block px-4 py-2 border rounded uppercase text-sm text-white bg-ion-orange hover:text-white hover:bg-red-500"
          style={{ marginTop: -7, marginBottom: -7 }}
        />
      </div>
      <button className="md:hidden h-12 w-12 bg-ion-orange">
        <span className="sr-only">Open main menu</span>
      </button>
    </div>
  );
}
