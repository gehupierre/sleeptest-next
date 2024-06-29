import { NavDropdownIcon } from "@components/ui/nav/nav-dropdown-icon";

export function ArrowRightIcon({ className = "", ...props }) {
  return (
    <NavDropdownIcon className={` rotate-[-90deg] ${className}`} {...props} />
  );
}
