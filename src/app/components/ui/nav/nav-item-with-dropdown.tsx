import React, { useState } from "react";

import { NavDropdownIcon } from "./nav-dropdown-icon";
import { NavItem, NavItemProps } from "./nav-item";

export const NavItemWithDropdown: React.FC<NavItemProps> = ({
  children,
  ...props
}) => {
  const [isHovered, setHovered] = useState<boolean>();

  return (
    <NavItem
      {...props}
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
      {children &&
        React.Children.map(children, (child) => {
          return (
            child &&
            React.cloneElement(child as React.ReactElement, {
              isOpened: isHovered,
              ...props,
            })
          );
        })}
    </NavItem>
  );
};
