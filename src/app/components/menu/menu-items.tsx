"use client";

import {
  NavDropDown,
  NavDropDownListItem,
} from "@components/ui/nav/nav-dropdown";
import { NavItem } from "@components/ui/nav/nav-item";
import { NavItemWithDropdown } from "@components/ui/nav/nav-item-with-dropdown";
import { ArrowRightIcon } from "@components/ui/icons/arrow-right";

type MenuWrapper = {
  children: React.ReactNode;
};
function MenuWrapper({ children }: MenuWrapper) {
  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="hidden md:flex justify-end lg:flex-grow">{children}</div>
    </div>
  );
}

export function MenuItems() {
  return (
    <MenuWrapper>
      <NavItemWithDropdown label="about sleep apnea" href="#responsive-header">
        <NavDropDown>
          <NavDropDownListItem href="#step-1" label="living with sleep apnea" />
          <NavDropDownListItem href="#step-2" label="testing for sleep apnea" />
          <NavDropDownListItem href="#step-3" label="treating sleep apnea" />
          <NavDropDownListItem href="#step-4" label="stories and news" />
          <NavDropDownListItem
            href="#step-5"
            label="get diagnosed"
            className="text-ion-orange"
          />
        </NavDropDown>
      </NavItemWithDropdown>

      <NavItem label="free sleep risk score" href="#popup-03" />
      <NavItem label="get diagnosed" href="#step-5" />
      <NavItem
        label="login"
        href="#login"
        icon={
          <ArrowRightIcon className="ml-[5px] transition delay-150 group-hover:translate-x-1" />
        }
        className="inline-block mr-0 px-4 py-2 border rounded uppercase text-sm text-white bg-ion-orange hover:text-white hover:bg-red-500 group"
        // Note: add style props to override layout media query
        style={{ marginTop: -7, marginBottom: -7 }}
      />
    </MenuWrapper>
  );
}
