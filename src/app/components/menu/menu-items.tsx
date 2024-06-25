"use client";

import { useState } from "react";
import { NavDropdownIcon } from "@components/ui/nav/nav-dropdown-icon";
import {
  NavDropDown,
  NavDropDownListItem,
} from "@components/ui/nav/nav-dropdown";
import { NavItem } from "@components/ui/nav/nav-item";

export function MenuItems() {
  const [isHovered, setHovered] = useState<boolean>();

  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="flex justify-end lg:flex-grow">
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
          icon={
            <NavDropdownIcon
              style={{
                marginLeft: 5,
                transform: "rotate(-90deg)",
              }}
            />
          }
          className="inline-block px-4 py-2 border rounded uppercase text-sm text-white bg-ion-orange hover:text-white hover:bg-red-500"
          style={{ marginTop: -7, marginBottom: -7 }}
        />
      </div>
    </div>
  );
}
