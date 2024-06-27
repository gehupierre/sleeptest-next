import { NavDropdownIcon } from "@components/ui/nav/nav-dropdown-icon";

export function ArrowRightIcon({ className = "", ...props }) {
  return (
    <NavDropdownIcon
      className={className}
      style={{
        transform: "rotate(-90deg)",
        ...props.style,
      }}
      {...props}
    />
  );
}
