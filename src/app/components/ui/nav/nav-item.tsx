import React from "react";

export type NavItemProps = React.HTMLAttributes<
  HTMLAnchorElement | HTMLButtonElement
> & {
  label: string;
  href: string;
  className?: string;
  icon?: JSX.Element;
};

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  className = "",
  icon,
  ...props
}) => {
  const baseClassName = `mt-4 lg:mt-0 text-ion-blue hover:text-ion-green mr-7 transition-colors delay-75 ${className}`;

  return icon ? (
    <button
      className={`flex items-center justify-between relative ${baseClassName}`}
      {...props}
    >
      {label}
      {icon}
      {props.children ?? null}
    </button>
  ) : (
    <a
      href={href}
      className={`block lg:inline-block ${baseClassName}`}
      {...props}
    >
      {label}
      {props.children ?? null}
    </a>
  );
};
