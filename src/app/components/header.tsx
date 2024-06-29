import { MenuItems } from "@components/menu/menu-items";
import { MenuLogo } from "@components/menu/menu-logo";

export function Header() {
  return (
    <header className="w-full">
      <nav className="flex lg:px-36 w-full bg-ion-bluelite">
        <MenuLogo />
        <MenuItems />
      </nav>
    </header>
  );
}
