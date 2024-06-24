import { MenuItems } from "@components/menu/menu-items";
import { MenuLogo } from "@components/menu/menu-logo";

export function Header() {
  return (
    <header className="w-full">
      <nav className="flex w-full bg-ion-bluelite px-36">
        <MenuLogo />
        <MenuItems />
      </nav>
    </header>
  );
}
